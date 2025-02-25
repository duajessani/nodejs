const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const User = require('../models/User');

router.post('/comments', async (req, res) => {
  try {
    const { text, userId } = req.body;
    
    // Check if user exists
    const user = await User.findById(userId);
    // if (!user) return res.status(404).json({ message: 'User not found' });

    // Create comment
    const comment = new Comment({ text, user: userId });
    await comment.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all comments with user details
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find().populate('user', 'name email'); // Populate user details
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
