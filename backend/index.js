import express from 'express';
import session from 'express-session';
import mysql from 'mysql'
import dotenv from 'dotenv'
import { initializeApp } from 'firebase/app';
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'

dotenv.config()
const app = express();

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
  };

const authApp = initializeApp(config);

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: "top-secret",
    resave: false,
    saveUninitialized: false
}))

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
app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const auth = getAuth(authApp);
    console.log(email,password);
    signInWithEmailAndPassword(auth,email,password)
    .then((userCreds)=>{
        req.session.user=userCreds.user;
        res.json(userCreds.user);
        
    }).catch((err)=>{
        res.json(err);
    });
});
app.get("/", (req, res) => {
    res.end("Home Page");
});
app.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const profession = req.body.profession;
    const hospital = req.body.hospital;
    const name = req.body.name;
    const interest = req.body.interest;
    const certificate = req.body.certificate;
    const auth = getAuth(authApp);
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCreds)=>{
        const user = userCreds.user;
        mysqlPool.getConnection((err,con)=>{
         con.query(`
         INSERT INTO user (id, hospital_id, fields_of_interest, name, email, profession)
         VALUES
           ('${user.uid}', ${hospital}, '${interest}', '${name}', '${email}', '${profession}')`,
           (queryErr,result,field)=>{
              res.json(user);  
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
