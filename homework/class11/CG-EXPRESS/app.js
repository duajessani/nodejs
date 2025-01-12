import express from 'express'
const app = express();
const port = 8080;

const users =[
    {
        id : "101",
        name : "Ali",
        age : "20"
    },
    {
        id : "102",
        name : "Sana",
        age : "15"
    },
    {
        id : "103",
        name : "Muslim",
        age : "50"
    }
];

let displaydata = '';
app.get('/users',(req,res)=>{
    users.forEach(user => {
        displaydata += `
        <li>User ID = ${user.id}</li>
        <li>User Name = ${user.name}</li>
        <li>User Age = ${user.age}</li><br>
        `
    });
    res.send(displaydata);
})

let userById = ''
app.get('/users/:id',(req,res)=>{
    users.forEach(user => {
        if(req.params.id == user.id){
            if(user.age > 18){
                console.log(user.id);
                userById += `
                <li>User ID = ${user.id}</li>
                <li>User Name = ${user.name}</li>
                <li>User Age = ${user.age}</li><br>
                `
            }
            else if(user.age < 18){
                userById += `<h1> ${user.id}  Access Denied ! Under 18</h1>`
            }
        }
    });
    if(userById == ''){
        userById += `<h1> ID not found </h1>`
    }
    res.send(userById);
    userById = '';
})



// app.get('/',(req,res)=>{
//     res.send("Hello World!");
// })

// app.get('/about',(req,res)=>{
//     res.send("About page");
// })

// app.get('/ab?cd',(req,res)=>{
//     res.send("")
// })

app.listen(port,()=>{
    console.log("server is started");
})