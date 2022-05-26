var routes = require('express').Router();

var controllers = require('./controllers');

// The about request
routes.get('/about', controllers.about);

// The distance request
routes.get('/distance', controllers.get_distance);

module.exports = routes;
