const data = require('../data.json');

// Routes for all the pages
module.exports = {
    home: (req, res) => {
        res.render('index' , {data: data.projects});
    },

    about: (req, res) => {
        res.render('about');
    },

    project: (req, res) => {
        const requestId = req.params.id;
        const project = data.projects[requestId];
        // Display project if it excists
        if (project !== undefined) {
            res.render('project', {data: project});
        } else {
            // Creates error page if it doesn't
            const err = new Error('Not Found');
            err.status = 404;
            res.render('error', {err: err});
        }
    }
}