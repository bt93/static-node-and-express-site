const routes = require('express').Router();
const data = require('../data.json');

routes.get('/', (req, res) => {
    res.render('index', {data: data.projects});
});

module.exports = routes;