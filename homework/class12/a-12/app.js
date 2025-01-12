import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 7000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

const arr = []
app.post("/list-item",(req,res)=>{
    const {todoitem} = req.body;
    if(!todoitem){
        console.log("field is required");
        res.status(400).json({
            error : "feild is required",
        })
    } 
    else {
        console.log(todoitem);
        arr.push(todoitem)
        res.status(200).json({
            message :"success",
            data: arr
        })
    }
    
})
app.listen(port, () => {
    console.log("server running");
});