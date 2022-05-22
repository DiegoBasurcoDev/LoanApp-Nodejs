const express = require('express');
const userRoutes = require('./user-routes');

const apiRoutes = (dependencies) => {
    const routes = express.Router();

    routes.use('/users', userRoutes(dependencies));

    return routes;
};

module.exports = apiRoutes;