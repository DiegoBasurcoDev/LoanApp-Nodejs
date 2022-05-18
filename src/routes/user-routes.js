const express = require('express');
const userController = require('../controllers/user-controllers');

const userRoutes = () => {
    const router = express.Router();

    const controller = userController();

    router.get('/', controller.userGetController);

    router.get('/:id', controller.userFindByIdController);

    router.post('/', controller.userRegisterController);
    // router.route('/register').post(controller.userRegisterController);

    return router;
};

module.exports = userRoutes;