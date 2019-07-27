// Requires the necessary dependancies and files
const express = require('express');
const data = require('./data.json');
const routes = require('./routes');

// Creates the app and sets the port
const app = express();
const port = 3000;

// Sets up necessary middleware
app.set('view engine', 'pug');
app.use(express.static('public'));

app.use('/', routes);

// Listens on the set port
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});