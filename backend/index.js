import express from "express";
import session from "express-session";
import mysql from "mysql";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  applyActionCode,
} from "firebase/auth";
import { Storage } from "@google-cloud/storage";
import multer from "multer";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { group } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
};

const storageApp = new Storage();
const bucket = storageApp.bucket("money-flow-410110");
const authApp = initializeApp(config);

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "buildAuth")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "top-secret-no-buddy-knows-what-this-is",
    resave: false,
    saveUninitialized: false,
  })
);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

// function uploadFile(req,res,path,name,file, next) {
//     upload.single('file')(req, res, err => {
//       if (err) {
//         return next(err);
//       }
//       if (!file) {
//         const error = new Error('No file uploaded');
//         error.statusCode = 400;
//         return next(error);
//       }

//       const blob = bucket.file(`${path}/${name}`);

//       const blobStream = blob.createWriteStream({
//         resumable: false,
//         contentType: file.mimetype,
//       });

//       blobStream.on('error', err => next(err));

//       blobStream.on('finish', () => {
//         const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
//         res.locals.publicUrl = publicUrl;
//         next();
//       });

//       blobStream.end(file.buffer);
//     });
//   }
function uploadFile(folder, filename, file) {
  try {
    const fileUpload = bucket.file(`${folder}/${filename}`);
    const blobStream = fileUpload.createWriteStream({
      resumable: false,
      gzip: true,
    });

    blobStream.on("error", (err) => {
      console.log(err);
      next(err);
    });

    blobStream.on("finish", async () => {
      console.log(`File uploaded to ${folder}/${filename}`);
    });

    blobStream.end(file[0].buffer);
  } catch (err) {
    console.error(`Failed to upload file: ${err}`);
  }
}

const mysqlPool = mysql.createPool({
  host: process.env.INSTANCE_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.use(express.static(path.join(__dirname, "build")));

app.post("/api/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const auth = getAuth(authApp);
  console.log(email, password);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCreds) => {
      console.log("Got creds", userCreds);
      mysqlPool.getConnection((err, con) => {
        if (err) {
          console.log("DBError ", err);
          res.statusCode = 500;
          res.json({ message: "Internal Server Error" });
          return;
        }
        con.query(
          `select * from user where id='${userCreds.user.uid}' limit 1`,
          (error, result, field) => {
            if (error) {
              console.log("Query error ", error);
              res.statusCode = 500;
              res.json({ message: "Internal Server Error" });
            }
            console.log("result", result);
            if (result[0]) {
              req.session.user = result[0];
              res.json(result[0]);
            } else {
              console.log("creds", userCreds.user.email);
              req.session.user = userCreds.user;
              res.json(userCreds.user);
            }
          }
        );
        con.release();
      });
    })
    .catch((err) => {
      if (err) {
        console.log("Err3", err);
        res.statusCode = 500;
        res.json({ message: err });
      }
    });
});

app.get("/api/signout", async (req, res) => {
  req.session.user = null;
  res.redirect("/");
});
app.post(
  "/api/signup",
  upload.fields([{ name: "certificate" }, { name: "profile" }]),
  async (req, res) => {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      profession: req.body.profession,
      name: req.body.name,
      interest: req.body.interest,
      certificate: req.files.certificate,
      profile: req.files.profile,
    };
    console.log(userData);
    const auth = getAuth(authApp);
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCreds) => {
        const user = userCreds.user;
        mysqlPool.getConnection((err, con) => {
          uploadFile("certificates", user.uid, req.files.certificate);
          uploadFile("profiles", `${user.uid}.png`, req.files.profile);
          userData.profile = `profiles/${user.uid}.png`;
          userData.certificate = `certificates/${user.uid}`;
          con.query(
            `
         INSERT INTO user (id,profile,fields_of_interest, name, email, profession,certificate)
         VALUES
           ('${user.uid}','${userData.profile}','${userData.interest}', '${userData.name}', '${userData.email}', '${userData.profession}','${userData.certificate}')`,
            (queryErr, result, field) => {
              if (queryErr) {
                console.log("Error inserting data into DB", queryErr);
                return;
              }
              req.session.user = userData;
              res.json(userData);
            }
          );
          con.release();
        });
      })
      .catch((err) => {
        res.json(err);
      });
  }
);
app.get("/api/hospitals", async (req, res) => {
  if (req.session.user) {
    console.log("Req for hospitals");
    mysqlPool.getConnection((err, con) => {
      if (err) return;
      const result = con.query(
        `select * from hospitals`,
        (error, result, field) => {
          if (error) console.log("err ", error);
          res.json(result[0]);
        }
      );
      con.release();
    });
  } else {
    res.statusCode = 401;
    res.json({ "response code": "401", msg: "Sign In first" });
  }
});

app.get("/api/doctors", async (req, res) => {
  if (req.session.user) {
    console.log("Req for docters");
    mysqlPool.getConnection((err, con) => {
      if (err) return;
      const result = con.query(
        `select * from user where profession='doctor'`,
        (error, result, field) => {
          if (error) console.log("err ", error);
          res.json(result[0]);
        }
      );
      con.release();
    });
  } else {
    res.statusCode = 401;
    res.json({ "response code": "401", msg: "Sign In first" });
  }
});

app.get("/api/disease", async (req, res) => {
  res.header({ "Content-Type": "application/json" });
  if (req.session.user) {
    console.log("Req for diseases");
    mysqlPool.getConnection((err, con) => {
      if (err) return;
      const result = con.query(
        `select * from disease limit 10`,
        (error, result, field) => {
          if (error) console.log("err ", error);
          res.json(result[0]);
        }
      );
      con.release();
    });
  } else {
    res.statusCode = 401;
    res.json({ "response code": "401", msg: "Sign In first" });
  }
});

app.get("/api/images/:folder/:imageName", async (req, res) => {
  const imageName = req.params.imageName;
  const filePath = `${req.params.folder}/${imageName}`;
  const file = bucket.file(filePath);
  const stream = file.createReadStream();
  stream.on("error", (err) => {
    console.error(`Error retrieving file "${filePath}" from bucket:`, err);
    res.status(404).send("File not found");
  });

  stream.pipe(res);
});
app.post("/api/comment", async (req, res) => {
  const uid = req.body.uid;
  const postid = req.body.postid;
  const msg = req.body.msg;
  mysqlPool
    .getConnection((err, con) => {
      con.query(
        `insert into comments (uid,postid,msg) values ('${uid}','${postid}','${msg}')`,
        (error, result, field) => {
          res.json({ response: "Comment Added" });
        }
      );
      con.release();
    })
    .catch((err) => {
      res.json({ response: "Something went wrong" });
    });
});
app.post("/api/posts", upload.single("file"), async (req, res) => {
  const uid = req.session.user.id;
  const title = req.body.title;
  const msg = req.body.content;
  const file = req.file;
  mysqlPool.getConnection((err, con) => {
    con.query(
      `insert into posts (title,description,author) values ('${title}','${msg}','${uid}')`,
      (error, result, field) => {
        console.log("Post Added to mysql server");
        const postId = result.insertId;
        uploadFile(
          `${uid}/posts/attachments/${postId}`,
          file.originalname,
          file
        );
        res.json({ response: "Post Added" });
      }
    );
    con.release();
  });
});
app.get("/api/post/:postId", async (req, res) => {
  const postId = req.params.postId;
  mysqlPool.getConnection((err, con) => {
    if (err) {
      console.log(err);
      return;
    }
    con.query(
      `select * from posts LEFT JOIN user on posts.author=user.id where posts.id='${postId}'`,
      (err2, result, f) => {
        if (err2) {
          console.log(err2);
          return;
        }
        res.json(result[0]);
        console.log(result[0]);
      }
    );
  });
});
app.post("/api/like", async (req, res) => {
  const uid = req.session.user.id;
  const post_id = req.body.post_id;
  console.log(uid, post_id);
  mysqlPool.getConnection((err, con) => {
    if (err) {
      console.log("Error", err);
      res.json({ response: "Some error occured" });
      return;
    }
    con.query(
      `select * from likes where user_id='${uid}' and post_id=${post_id}`,
      (error, result, field) => {
        if (error) {
          console.log(error);
          res.json({ response: "Some error occured" });
          return;
        }
        if (!result[0]) {
          con.query(
            `insert into likes (user_id,post_id) values ('${uid}',${post_id})`,
            (error2, result2, f) => {
              if (error2) {
                console.log("Some error occured", error2);
                return;
              }
            }
          );
        } else {
          con.query(
            `delete from likes where user_id='${uid}' and post_id=${post_id}`,
            (error2, result2, f) => {
              if (error2) {
                console.log("Some error occured", error2);
                return;
              }
            }
          );
        }
        con.query(
          `update posts set likes=(select count(*) from likes where post_id=${post_id}) where id=${post_id}`,
          (error, result, field) => {
            if (error) {
              console.log(error);
              res.json({ response: "Some error occured" });
              return;
            }
          }
        );
      }
    );
    con.release();
  });
});
app.get("/api/groups", async (req, res) => {
  if (req.session.user) {
    mysqlPool.getConnection((err, con) => {
      if (err) {
        console.log(err);
        return;
      }
      con.query(
        `
               SELECT g.*, 
               CASE WHEN s.user_id = '${req.session.user.id}' THEN 1 ELSE 0 END AS Subscribed
               FROM topic_groups g
               LEFT JOIN (
                      SELECT *
                      FROM subscription
                      WHERE user_id = '${req.session.user.id}'
               ) s ON g.group_id = s.group_id limit 10`,
        (err2, result, f) => {
          if (err2) {
            console.log(err2);
            return;
          }
          res.json(result);
          console.log(result);
        }
      );
    });
  } else {
    res.statusCode = 403;
    res.json({ status: "Unauthenticated" });
  }
});
app.get("/api/posts", async (req, res) => {
  if (req.session.user) {
    mysqlPool.getConnection((err, con) => {
      con.query(
        `
            SELECT  p.*, u.name AS author_name,
            CASE WHEN likes.user_id IS NOT NULL THEN 1 ELSE 0 END AS is_liked
            FROM posts p 
            LEFT JOIN topic_groups g ON FIND_IN_SET(g.name, p.category) > 0 
            LEFT JOIN subscription s ON g.group_id = s.group_id 
            LEFT JOIN user u ON p.author = u.id 
            LEFT JOIN likes ON p.id = likes.post_id AND likes.user_id = '${req.session.user.id}'
            WHERE s.user_id = '${req.session.user.id}'  OR p.category IS NULL
            ORDER BY p.publish_date DESC LIMIT 20;`,
        (error, result, field) => {
          if (err) {
            res.statusCode = 403;
            res.json({ response: "Something went wrong" });
          }
          if (error || !result || result.length === 0) {
            // Query to fetch latest posts if no posts meet the criteria
            const latestPostsQuery = `
                    SELECT p.*, u.name AS author_name,
                    CASE WHEN l.user_id IS NOT NULL THEN 1 ELSE 0 END AS is_liked
                    FROM posts p 
                    LEFT JOIN user u ON p.author = u.id 
                    LEFT JOIN likes l ON p.id = l.post_id AND l.user_id = '${req.session.user.id}' 
                    ORDER BY p.publish_date DESC
                    LIMIT 20;
                    
                        `;

            con.query(
              latestPostsQuery,
              (latestPostsError, latestPostsResult, latestPostsFields) => {
                if (latestPostsError) {
                  res.statusCode = 500;
                  return res.json({ response: "Error fetching latest posts" });
                }

                // Return the fetched latest posts as JSON
                res.json(latestPostsResult);
                console.log("Posts:", result);
              }
            );
          } else {
            // Return the fetched posts meeting criteria as JSON
            res.json(result);
            console.log("Posts:", result);
          }
        }
      );
      con.release();
    });
  } else {
    res.statusCode = 403;
    res.json({ status: "Unauthenticated" });
  }
});

app.get("/api/user", async (req, res) => {
  console.log(req.query.uid);
  if (req.session.user && undefined != req.query.uid) {
    mysqlPool.getConnection((err, con) => {
      if (err) {
        console.log(err);
        return;
      }
      con.query(
        `select * from user where id='${req.query.uid}'`,
        (err2, result, f) => {
          if (err2) {
            console.log(err2);
            return;
          }

          res.json(result[0]);
          console.log("returned: ", result[0]);
          console.log(result[0]);
        }
      );
    });
  } else if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.statusCode = 403;
    res.json({ status: "Unauthenticated" });
  }
});

app.post("/api/group/unsubcribe", async (req, res) => {
  if (req.session.user) {
    mysqlPool.getConnection((err, con) => {
      if (err) {
        console.log(err);
        return;
      }
      con.query(
        `delete from subscription where group_id='${req.body.group_id}' and user_id='${req.session.user.id}'`,
        (err2, result, f) => {
          if (err2) {
            console.log(err2);
            return;
          }
          res.json({ Message: "Success" });
        }
      );
    });
  } else {
    res.statusCode = 403;
    res.json({ status: "Unauthenticated" });
  }
});
app.get("/api/news", async (req, res) => {
  //Temp user id
  const id = "fw4LTCJoGKYJ82q6IqJwI5rxX9w2";
  if (!req.session.user) {
    mysqlPool.getConnection((err, con) => {
      con.query(
        `
            SELECT  n.*, u.name AS user_name,
            FROM news n
            LEFT JOIN topic_groups g ON FIND_IN_SET(g.name, n.category) > 0 
            LEFT JOIN subscription s ON g.group_id = s.group_id 
            LEFT JOIN user u ON n.author = u.id 
            WHERE s.user_id = '${id}'  OR n.category IS NULL
            ORDER BY n.publishedAt DESC LIMIT 20;`,
        (error, result, field) => {
          if (err) {
            res.statusCode = 403;
            console.log(err);
            res.json({ response: "Something went wrong" });
          }
          res.json(result);
          console.log(result);
        }
      );
      con.release();
    });
  } else {
    res.statusCode = 403;
    res.json({ status: "Unauthenticated" });
  }
});

app.post("/api/contact", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const msg = req.body.msg;
  mysqlPool.getConnection((err, con) => {
    con.query(
      `insert into contact(email,name,msg) values('${email}','${name}','${msg}')`,
      (error, result, field) => {
        if (err) {
          res.statusCode = 403;
          res.json({ response: "Something went wrong" });
        }
        res.json(result);
      }
    );
    con.release();
  });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
