import express from 'express';
import ejs from 'ejs';
const app = express();
const port = 3030;

app.set('view engine','ejs');

// app.get("/",(req,res)=>{
//     res.render('index');
// })
var users = [
    { id : '1',name: 'Sammy', age : 20},
    { id : '2',name: 'Tux', age : 13},
    { id : '3',name: 'Moby Dock', age : 25}
  ];

app.get("/users",(req,res)=>
    {
    res.render('users',{
        users : users,
        id : null
    })
})
app.get("/users/:id",(req,res)=>{
    const { id } = req.params;

    res.render("users",{
        users : users,
        id : id
    })
    console.log(id);
})

app.listen(port);