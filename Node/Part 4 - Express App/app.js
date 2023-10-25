const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<h1>This is an Express Home</h1>');
    res.sendFile('./index.html', { root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<h1>This is an Express About</h1>');
    res.sendFile('./about.html', { root: __dirname});
});