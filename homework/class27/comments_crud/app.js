const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect(process.env.DB_URL) .then(() => console.log('MongoDB Connected'));

const CommentSchema = new mongoose.Schema({ 
    username: String,
    text: String 
});
const Comment = mongoose.model('Comment', CommentSchema);

app.get('/', async (req, res) => {
    const comments = await Comment.find();
    res.render('index', { comments });
});


app.post('/comments', async (req, res) => {
    await Comment.create({ username: req.body.username, text: req.body.text });
    res.redirect('/');
});

app.get('/comments/edit/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.render('edit', { comment });
});

app.post('/comments/update/:id', async (req, res) => {
    await Comment.findByIdAndUpdate(req.params.id, { text: req.body.text });
    res.redirect('/');
});

app.post('/comments/delete/:id', async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));