const RegisterUser = require('../application/use-cases/user/RegisterUser');
const GetUser = require('../application/use-cases/user/GetUser');
const FindById = require('../application/use-cases/user/FindById');
const createError = require('http-errors');

module.exports = (dependencies) => {
    const { userRepository } = dependencies.DatabaseService;

    const userRegisterController = async (req, res, next) => {
        const registerUser = await RegisterUser();
        
        registerUser.Execute(req.body, res, next);
    };

    const userFindByIdController = async (req, res, next) => {
        const findById = await FindById();
        
        findById.Execute(req.params.id, res, next);
    };

    const userGetController = async (req, res, next) => {
        const getUserQuery = await GetUser(userRepository);

        getUserQuery.Execute().then((users) => {
            res.json(users);
        }, (err) => {
            next(err);
        })
    };

    return {
        userRegisterController,
        userFindByIdController,
        userGetController
    }
}