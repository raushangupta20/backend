require('dotenv').config()
const express = require('express');
const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/twitter', (req, res) => {
    res.send('raushandotcom');
});

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>YouTube</h2>');
});

// Add this route to fix your error
app.get('/twitter/youtube', (req, res) => {
    res.send('<h1>Twitter + YouTube Page</h1>');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
