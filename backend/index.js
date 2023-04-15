import express from 'express';
import session from 'express-session';
import mysql from 'mysql'
import dotenv from 'dotenv'
import { initializeApp } from 'firebase/app';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import {Storage} from '@google-cloud/storage'
import multer from 'multer'
import cors from 'cors'

dotenv.config()
const app = express();

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
  };

const storageApp =new Storage()
const bucket = storageApp.bucket("notional-cab-381815")
const authApp = initializeApp(config);

const [files] = await bucket.getFiles();

console.log('Files:');
files.forEach(file => {
  console.log(file.name);
});

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: "top-secret",
    resave: false,
    saveUninitialized: false
}))
app.use(multer().array());

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB
    },
  });
  
function uploadFile(path,name,file, next) {
    upload.single('file')(req, res, err => {
      if (err) {
        return next(err);
      }
      if (!file) {
        const error = new Error('No file uploaded');
        error.statusCode = 400;
        return next(error);
      }
  
      const blob = bucket.file(`${path}/${name}`);
  
      const blobStream = blob.createWriteStream({
        resumable: false,
        contentType: file.mimetype,
      });
  
      blobStream.on('error', err => next(err));
  
      blobStream.on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        res.locals.publicUrl = publicUrl;
        next();
      });
  
      blobStream.end(file.buffer);
    });
  }

const mysqlPool = mysql.createPool({
    host: process.env.INSTANCE_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});



const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
app.post("/signin", (req, res) => {
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
                    console.log("Err1 ",error)
                    res.statusCode=500;
                    res.json({"message":"Internal Server Error"});
                }
                if(result[0])
                res.json(result[0])
                else{
                 res.json(userCreds.user)
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
app.get("/", (req, res) => {
    res.end("Home Page");
});
app.post("/signup", (req, res) => {
    const userData={ 
        email : req.body.email,
        password : req.body.password,
        profession : req.body.profession,
        hospital : req.body.hospital,
        name : req.body.name,
        interest : req.body.interest,
        certificate : req.body.certificate
    };
    const auth = getAuth(authApp);
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCreds)=>{
        const user = userCreds.user;
        mysqlPool.getConnection((err,con)=>{
         uploadFile('certificates',req.user.uid,certificate,(err)=>{
              console.log(`File uploaded ${req.body.certificate.originalname}`);
         });
         con.query(`
         INSERT INTO user (id, hospital_id, fields_of_interest, name, email, profession)
         VALUES
           ('${user.uid}', ${userData.hospital}, '${userData.interest}', '${userData.name}', '${userData.email}', '${userData.profession}')`,
           (queryErr,result,field)=>{
              res.json(userData);  
           });
        });
    }).catch((err)=>{
       res.json(err);
    });

});
app.get("/hospitals", (req, res) => {
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

app.get("/doctors", (req, res) => {
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
app.get("/recent", (req, res) => {
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
app.get("/disease", (req, res) => {
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

app.get('/:folder/:imageName', async (req, res) => {
    const imageName = req.params.imageName;
    const file = bucket.file(`${req.params.folder}/${imageName}`);
    const stream = file.createReadStream();
    stream.on('error', (err) => {
        console.error(`Error retrieving file "${filePath}" from bucket:`, err);
        res.status(404).send('File not found');
    });
    
    stream.pipe(res);
});
app.post('/comment',(req,res)=>{
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
app.post('/post',(req,res)=>{
     const uid = req.user.uid;
     const msg = req.body.msg;
     const attachemnts = req.body.attachemnts;
     mysqlPool.getConnection((err,con)=>{
        con.query(`insert into posts (uid,msg) values ('${uid}','${msg}',)`,
        (error,result,field)=>{
            console.log('Post Added to mysql server');
            const postId = result.insertId;
            attachemnts.forEach(file=>{
                uploadFile('${uid}/posts/',postId,file,res,()=>{});

            });
            res.json({'response':'Comment Added'});
        });
   }).catch((err)=>{
      res.json({'response':'Something went wrong'});
   });

});

app.get("/user",(req,res)=>{
    
    if(req.session.user){
        res.json(req.session.user);
    }else{
        res.statusCode=403;
        res.json({"status":"Unauthenticated"});
    }
});