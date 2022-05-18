const express = require('express');
const userRoutes = require('./user-routes');

const apiRoutes = () => {
    const routes = express.Router();

    routes.use('/users', userRoutes());

    return routes;
};

module.exports = apiRoutes;