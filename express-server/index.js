const path = require('path');
const express = require('express');
const app = express();


app.get(['/', '/home'], (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/contact_me.html'));
});

// On error
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, './404.html'));
});


// Running the app
app.listen(3000);