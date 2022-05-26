var routes = require('express').Router;

var controllers = require('./controllers');

routes.get('/about', controllers.about);

module.exports = routes;
