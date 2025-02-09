const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const sessionMiddleware = require('./middleware/sessionMiddleware');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(sessionMiddleware);
app.use(authRoutes);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});