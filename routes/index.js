const routes = require('express').Router();
const data = require('../data.json');

module.exports = {
    home: (req, res) => {
        res.render('index' , {data: data.projects});
    },

    about: (req, res) => {
        res.render('about');
    },

    project: (req, res) => {
        res.render('project', {data: data.projects[req.params.id]});
    }
}