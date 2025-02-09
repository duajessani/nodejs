const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
})

router.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('Unauthorized');
    }
    res.send(`<h2>Welcome, ${req.session.user}</h2>`);
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('<h2>Logged out successfully</h2>');
});

router.post('/login', (req, res) => {
    const { username } = req.body;
    
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }

    req.session.user = username; // Store user session
    req.session.save(err => {  // Ensure session is saved
        if (err) {
            return res.status(500).json({ message: 'Session save error' });
        }
        res.json({ message: 'Login successful', user: username });
    });
});

module.exports = router;