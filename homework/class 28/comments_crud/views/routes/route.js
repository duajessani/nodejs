// const Comment = require('../models/schema')
const express = require('express');
const router = express.Router();
const { findComment, addComment, editComment, updateComment, deleteComment } = require('../controller/controller');

router.get('/', findComment);

router.post('/comments', addComment);

router.get('/comments/edit/:id', editComment);

router.post('/comments/update/:id', updateComment);

router.post('/comments/delete/:id',deleteComment);

module.exports = router;