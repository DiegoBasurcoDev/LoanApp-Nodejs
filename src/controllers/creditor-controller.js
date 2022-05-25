const AddCreditor = require('../application/use-cases/creditor/AddCreditor');
const GetAllCreditor = require('../application/use-cases/creditor/GetAllCreditor');
const FindById = require('../application/use-cases/creditor/FindById');
const createError = require('http-errors');

module.exports = (dependencies) => {
    const { creditorRepository } = dependencies.DatabaseService;

    const creditorRegisterController = async (req, res, next) => {
        const AddCreditorQuery = await AddCreditor(creditorRepository);
        
        AddCreditorQuery.Execute(req.body, res, next);
    };

    const creditorFindByIdController = async (req, res, next) => {
        const FindByIdQuery = await FindById(creditorRepository);
        
        FindByIdQuery.Execute(req.params.id, res, next);
    };

    const creditorGetController = async (req, res, next) => {
        const GetAllCreditorQuery = await GetAllCreditor(creditorRepository);

        GetAllCreditorQuery.Execute().then((users) => {
            res.json(users);
        }, (err) => {
            next(err);
        })
    };

    return {
        creditorRegisterController,
        creditorFindByIdController,
        creditorGetController
    }
}