const mongoose = require('../database/connection');


const CommentSchema = new mongoose.Schema({ 
    username: String,
    text: String 
});
const Comment = mongoose.model('Comment', CommentSchema);

module.exports =  Comment;