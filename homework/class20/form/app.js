import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';

const app = express();
const port = 6061;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

let user ={
    name : "ali",
    password : 123456
}


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post("/user",(req,res)=>{
    const{name,password} = req.body;
    console.log(name, password);
    // console.log(req);
    console.log(req.body);

    if (name == user.name && password == user.password) {
        res.cookie('login','true');
        res.redirect("/userDashboard")
        // console.log("welcome user")
        // console.log("Valid credentials");
        // res.send("<h1>Welcome User</h1>");

    } else {  
        console.log("Invalid credentials");
        res.send("<h1>Incorrect name or password</h1>");

            }
        });

app.get("/userDashboard",(req,res)=>{
    if(req.cookies.login){
       res.send("<h1>Welcome User</h1>"); 
    }
    else{
        res.send("<h1>Access Denied</h1>")
    }
})

app.listen(port);