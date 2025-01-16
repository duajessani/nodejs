import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 6061;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
        console.log("welcome user")
        console.log("Valid credentials");
        res.send("<h1>Welcome User</h1>");

    } else {  
        console.log("Invalid credentials");
        res.send("<h1>Incorrect name or password</h1>");

            }
        });

app.listen(port);