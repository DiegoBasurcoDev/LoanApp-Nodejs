const express = require('express');
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');

const apiRoutes = (dependencies) => {
    const routes = express.Router();

    routes.use('/users', userRoutes(dependencies));
    routes.use('/auth', authRoutes(dependencies));

    return routes;
};

module.exports = apiRoutes;