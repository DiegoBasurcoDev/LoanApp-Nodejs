const express = require('express');
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const creditorRoutes = require('./creditor.routes');

const apiRoutes = (dependencies) => {
    const routes = express.Router();

    routes.use('/user', userRoutes(dependencies));
    routes.use('/auth', authRoutes(dependencies));
    routes.use('/creditor', creditorRoutes(dependencies));

    return routes;
};

module.exports = apiRoutes;