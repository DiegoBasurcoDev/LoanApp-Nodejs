const express = require('express');
const creditorController = require('../../controllers/creditor-controller');

const creditorRoutes = (dependencies) => {
    const router = express.Router();

    const controller = creditorController(dependencies);

    router.get('/', controller.creditorGetController);

    router.get('/:id', controller.creditorFindByIdController);

    router.post('/', controller.creditorRegisterController);

    return router;
};

module.exports = creditorRoutes;