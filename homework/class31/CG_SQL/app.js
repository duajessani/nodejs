const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3080;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
});

connection.connect(err => {
    if (err) {
        console.log(err)
        console.error('Error connecting:', err.message);
        return;
    }
    console.log('Connected to MySQL Database');
});



connection.query(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
)`, err => { if (err) throw err; });

connection.query("INSERT INTO users (name, email) VALUES ('Sana', 'sana@gmail.com')", err => { if (err) throw err; });

const getUsers = (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const createUser = (req, res) => {
    const { name, email } = req.body;
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
        if (err) throw err;
        res.json({ message: 'User created', id: result.insertId });
    });
};


const updateUser = (req, res) => {
    const { id, name, email } = req.query;
    if (!id) return res.status(400).json({ message: 'User ID is required' });
    connection.query("UPDATE users SET name = ? , email = ? WHERE id = ?", [name, email, id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'User updated', affectedRows: result.affectedRows });
    });
};


app.get('/users', getUsers);
app.post('/users', createUser);
app.get('/update-user', updateUser);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
