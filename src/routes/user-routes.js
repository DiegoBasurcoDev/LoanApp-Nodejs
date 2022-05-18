const express = require('express');
const userController = require('../controllers/user-controllers');

const userRoutes = () => {
    const router = express.Router();

    const controller = userController();

    router.route('/register').post(controller.userRegisterController);

    return router;
};

module.exports = userRoutes;