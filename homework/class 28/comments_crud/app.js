const express = require('express');
const commentRoutes = require('./routes/route');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const bodyParser = require('body-parser');


// dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/', commentRoutes); // Use comment routes

// mongoose.connect(process.env.DB_URL) .then(() => console.log('MongoDB Connected'));

// const CommentSchema = new mongoose.Schema({ 
//     username: String,
//     text: String 
// });
// const Comment = mongoose.model('Comment', CommentSchema);
// ----------------------------------------------------------------------
// refrence schema
// const UserSchema = new mongoose.Schema({ 
//     name: String,
//     email: String, 
// });
// const User = mongoose.model('User', UserSchema);

// const PostSchema = new mongoose.Schema({
//     author: String,
//     postName: String
// })
// const Post = mongoose.model('Post', PostSchema); 

// const commentSchema = new mongoose.Schema({
//     message: String,
//     postId: {
//         type: mongoose.Schema.Types.ObjectId, 
//         ref : "Post"
//     },
//     userId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     }
// })

// const Comments = mongoose.model("Comments", commentSchema);


// app.post('/user', async (req, res) => {
//     await .User.save({ name: req.body.username, text: req.body.text });
//     res.status(201);
// });

// app.post('/post', async (req, res) => {
//     await db.Post.save({ 
//       author:req.body.author,
//       postName:req.body.postName  
//      });
//      res.status(201);
// });

// app.post('/comment', async (req, res) => {
//     await db.Comments.save({ 
//         postId:req.body.postid,
//         userId:req.body.userid,
//         message:req.body.message

//      });
//      res.status(201);
//     // res.redirect('/');
// });
// ----------------------------------------------------
// app.get('/', async (req, res) => {
//     const comments = await Comment.find();
//     res.render('index', { comments });
// });


// app.post('/comments', async (req, res) => {
//     await Comment.create({ username: req.body.username, text: req.body.text });
//     res.redirect('/');
// });

// app.get('/comments/edit/:id', async (req, res) => {
//     const comment = await Comment.findById(req.params.id);
//     res.render('edit', { comment });
// });

// app.post('/comments/update/:id', async (req, res) => {
//     await Comment.findByIdAndUpdate(req.params.id, { text: req.body.text });
//     res.redirect('/');
// });

// app.post('/comments/delete/:id', async (req, res) => {
//     await Comment.findByIdAndDelete(req.params.id);
//     res.redirect('/');
// });

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));