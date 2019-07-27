const express = require('express');
// const data = require('./public/images/');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('It Works!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});