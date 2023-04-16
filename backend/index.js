import express from 'express';
import session from 'express-session';
import mysql from 'mysql'
import dotenv from 'dotenv'
import { initializeApp } from 'firebase/app';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, applyActionCode} from 'firebase/auth'
import {Storage} from '@google-cloud/storage'
import multer from 'multer'
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()
const app = express();

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
  };

const storageApp =new Storage()
const bucket = storageApp.bucket("notional-cab-381815")
const authApp = initializeApp(config);


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: "top-secret",
    resave: false,
    saveUninitialized: false
}))

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
  
      blobStream.on('error', (err) => {
        console.log(err);
        next(err);
      });
  
      blobStream.on('finish', async () => {
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

app.use(express.static(path.join(__dirname, 'build')));


app.post("/api/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const auth = getAuth(authApp);
    console.log(email,password);
    signInWithEmailAndPassword(auth,email,password)
    .then((userCreds)=>{
        mysqlPool.getConnection((err,con)=>{
            if(err){
                    console.log("DBError ",err);
                    res.statusCode=500;
                    res.json({"message":"Internal Server Error"});
                    return;
            }
            con.query(`select * from user where id='${userCreds.user.uid}' limit 1`, (error, result, field) => {
                if (error) {
                    console.log("Query error ",error)
                    res.statusCode=500;
                    res.json({"message":"Internal Server Error"});
                }
                console.log("result",result)
                if(result[0]){
                    
                    req.session.user=result[0];
                   res.json(result[0])
                }
                else{
                    console.log("creds",userCreds.user.email);
                    req.session.user=userCreds.user;
                 res.json(userCreds.user);
                }
            });
        })
        
    }).catch((err)=>{
        if(err){
        console.log("Err3",err);
        res.statusCode=500;
        res.json({"message":err});
        }
    });

    
});
app.get("/api/", (req, res) => {
    res.end("Home Page");
});

app.get("/api/signout",(req,res)=>{
      req.session.user=null;
      res.redirect("/")
});
app.post("/api/signup",upload.fields([{ name: 'certificate' }, { name: 'profile' }]), (req, res) => {
    const userData={ 
        email : req.body.email,
        password : req.body.password,
        profession : req.body.profession,
        name : req.body.name,
        interest : req.body.interest,
        certificate : req.files.certificate,
        profile : req.files.profile
    };
    console.log(userData)
    const auth = getAuth(authApp);
    createUserWithEmailAndPassword(auth,userData.email,userData.password)
    .then((userCreds)=>{
        const user = userCreds.user;
        mysqlPool.getConnection((err,con)=>{
          uploadFile('certificates',user.uid,req.files.certificate);
          uploadFile('profiles',`${user.uid}.png`,req.files.profile);
       userData.profile=`profiles/${user.uid}.png`
         con.query(`
         INSERT INTO user (id,profile,fields_of_interest, name, email, profession)
         VALUES
           ('${user.uid}','${userData.profile}','${userData.interest}', '${userData.name}', '${userData.email}', '${userData.profession}')`,
           (queryErr,result,field)=>{
            if(queryErr){
                console.log("Error inserting data into DB",queryErr);
                return;
            }
            req.session.user=userData;
            res.json(userData);  
           });
        });
    }).catch((err)=>{
       res.json(err);
    });

});
app.get("/api/hospitals", (req, res) => {
    if (req.session.user) {
    console.log("Req for hospitals");
    mysqlPool.getConnection((err, con) => {
        if (err) return;
        const result = con.query(`select * from hospitals`, (error, result, field) => {
            if (error) console.log("err ", error)
            res.json(result[0])
        });
    });
} else {
    res.statusCode=401
        res.json({"response code":"401","msg":"Sign In first"})
    }
});

app.get("/api/doctors", (req, res) => {
    if (req.session.user) {
    console.log("Req for docters");
    mysqlPool.getConnection((err, con) => {
        if (err) return;
        const result = con.query(`select * from user where profession='doctor'`, (error, result, field) => {
            if (error) console.log("err ", error)
            res.json(result[0])
        });
    });
} else {
    res.statusCode=401
        res.json({"response code":"401","msg":"Sign In first"})
}
});
app.get("/api/recent", (req, res) => {
    if (req.session.user) {
        console.log("Req for recent");
        mysqlPool.getConnection((err, con) => {
            if (err) return;
            const result = con.query(`
            SELECT *
            FROM news
            ORDER BY publish_date DESC
            LIMIT 10;
            `, (error, result, field) => {
                if (error) console.log("err ", error)
                res.json(result[0])
            });
        });
    } else {
        res.statusCode=401
        res.json({"response code":"401","msg":"Sign In first"})
    }
});
app.get("/api/disease", (req, res) => {
    res.header({"Content-Type":"application/json"});
    if (req.session.user) {
        console.log("Req for diseases");
        mysqlPool.getConnection((err, con) => {
            if (err) return;
            const result = con.query(`select * from disease limit 10`, (error, result, field) => {
                if (error) console.log("err ", error)
                res.json(result[0])
            });
        });
    } else {
        res.statusCode=401
        res.json({"response code":"401","msg":"Sign In first"})
    }
});

app.get('/api/images/:folder/:imageName', async (req, res) => {
    const imageName = req.params.imageName;
    const filePath = `${req.params.folder}/${imageName}`
    const file = bucket.file(filePath);
    const stream = file.createReadStream();
    stream.on('error', (err) => {
        console.error(`Error retrieving file "${filePath}" from bucket:`, err);
        res.status(404).send('File not found');
    });
    
    stream.pipe(res);
});
app.post('/api/comment',(req,res)=>{
     const uid = req.body.uid;
     const postid = req.body.postid;
     const msg = req.body.msg;
     mysqlPool.getConnection((err,con)=>{
          con.query(`insert into comments (uid,postid,msg) values ('${uid}','${postid}','${msg}')`,
          (error,result,field)=>{
              res.json({'response':'Comment Added'});
          });
     }).catch((err)=>{
        res.json({'response':'Something went wrong'});
     });
});
app.post('/api/posts',upload.single('file'),(req,res)=>{
     const uid = req.session.user.id;
     const title = req.body.title;
     const msg = req.body.content;
     const file = req.file;
     mysqlPool.getConnection((err,con)=>{
        con.query(`insert into posts (title,description,author) values ('${title}','${msg}','${uid}')`,
        (error,result,field)=>{
            console.log('Post Added to mysql server');
            const postId = result.insertId;
            uploadFile(`${uid}/posts/attachments/${postId}`,file.originalname,file);
            res.json({'response':'Post Added'});
        })
   });

});
app.post("/api/like",(req,res)=>{
    const uid = req.session.user.id;
    const post_id = req.body.post_id;
    mysqlPool.getConnection((err,con)=>{
        con.query(`select * from likes where user_id='${uid}' and post_id='${post_id}'`,
        (error,result,field)=>{
         if(error){
            res.json({"response":"Some error occured"});
            return;
         }
         if(result[0].count==0){
            con.query(`insert into likes (user_id,post_id) values ('${uid}','${post_id}')`,(error2,result2,f)=>{
                 if(error2){
                    console.log("Some error occured");
                    return;
                 }
            });
         }else{
            con.query(`delete from likes where user_id='${uid}' and post_id='${post_id}'`,(error2,result2,f)=>{
                if(error2){
                   console.log("Some error occured");
                   return;
                }
           });
         }
        con.query(`update posts set likes=(select count(*) from likes where id="${post_id}")`,
        (error,result,field)=>{
         if(error){
            res.json({"response":"Some error occured"});
            return;
         }
         
        })
        })
        res.json({"response":"Okay"});
   });

});
app.get("/api/posts",(req,res)=>{
      if(req.session.user){
        mysqlPool.getConnection((err,con)=>{
            con.query(`SELECT posts.*, user.id AS author_id, user.name AS author_name, user.profile AS author_profile
            FROM posts
            LEFT JOIN user
            ON posts.author = user.id limit 20;`,
            (error,result,field)=>{
                if(err){
                    res.statusCode=403;
                    res.json({'response':'Something went wrong'}); 
                }
                res.json(result);
            });
       })
      }else{
        res.statusCode=403;
        res.json({status:"Unauthenticated"});
      }
});

app.get("/api/user",async (req,res)=>{
    
    if(req.session.user){
        console.log(req.session.user)
        res.json(req.session.user);
    }else{
        res.statusCode=403;
        res.json({status:"Unauthenticated"});
    }
});
app.post("/api/contact",async (req,res)=>{
    const name= req.body.name;
    const email = req.body.email;
    const msg = req.body.msg;
    mysqlPool.getConnection((err,con)=>{
        con.query(`insert into contact(email,name,msg) values('${email}','${name}','${msg}')`,
        (error,result,field)=>{
            if(err){
                res.statusCode=403;
                res.json({'response':'Something went wrong'}); 
            }
            res.json(result);
        });
   })
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  const port = 3000;
  
  app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
  });