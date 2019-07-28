// Requires the necessary dependancies and files
const express = require('express');
const data = require('./data.json');
const {home, about, project, error} = require('./routes/index');

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

// Creates an error if page isn't found
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Takes the error and renders a user friendly page
app.use((err, req, res, next) => {
    console.error(err.message, err.status);

    res.status(err.status);
    res.render('error', {err: err});
})


// Listens on the set port
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});