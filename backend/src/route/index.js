const homeRoute = require('./home.js');

function route(app) {
    app.use('/', homeRoute);
}

module.exports = route;
