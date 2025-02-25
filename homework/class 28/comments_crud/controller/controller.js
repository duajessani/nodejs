const Comment = require('../models/schema')

const findComment = async (req, res) => {
    const comments = await Comment.find();
    res.render('index', { comments });
}

const addComment = async (req, res) => {
    await Comment.create({ username: req.body.username, text: req.body.text });
    res.redirect('/');
}
const editComment = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.render('edit', { comment });
}
const updateComment = async (req, res) => {
    await Comment.findByIdAndUpdate(req.params.id, { text: req.body.text });
    res.redirect('/');
}
const deleteComment = async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.redirect('/');
}


module.exports = {findComment,addComment,editComment,updateComment,deleteComment}