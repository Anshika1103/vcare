import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.json())
app.use(session({
    secret : "top-secret",
    resave: false,
    saveUninitialized: false
}))
const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});
app.post("/login",(req,res)=>{
    res.end("Authentication Server");
});
app.get("/",(req,res)=>{
   res.end("Home Page");
});
app.post("/signup",(req,res)=>{
   res.end("Signup page");
});
app.get("/hospitals",(req,res)=>{
  res.end("Hospitals page returns list of hosptals");
});
app.get("/doctors",(req,res)=>{
    res.end("Doctors page returns list of doctors");
});
app.get("/recent",(req,res)=>{
     if(req.session.user){

     }else{
        res.end("Need to sign in first");
        res.redirect("/");
     }
});
app.get("/deseases",(req,res)=>{
    res.end("Deseases page: List deaseses and cures");
});
