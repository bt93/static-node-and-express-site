// Requires the necessary dependancies and files
const express = require('express');
const data = require('./data.json');
const {home, about, project} = require('./routes/index');

// Creates the app and sets the port
const app = express();
const port = 3000;

// Sets up necessary middleware
app.set('view engine', 'pug');
app.use(express.static('public'));

// Creates routes for each page
app.get('/', home);
app.get('/about', about);
app.get('/project/:id', project);

// Listens on the set port
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});