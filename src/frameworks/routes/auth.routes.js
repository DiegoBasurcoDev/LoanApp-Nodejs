const express = require('express');
const loginController = require('../../controllers/auth-controller');

const loginRoutes = (dependencies) => {
    const router = express.Router();

    const controller = loginController(dependencies);

    router.post('/', controller.authController);

    return router;
};

module.exports = loginRoutes;