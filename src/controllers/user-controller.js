const RegisterUser = require('../application/use-cases/user/AddUser');
const GetAllUsers = require('../application/use-cases/user/GetAllUsers');
const FindById = require('../application/use-cases/user/FindById');
const createError = require('http-errors');

module.exports = (dependencies) => {
    const { userRepository } = dependencies.DatabaseService;

    const userRegisterController = async (req, res, next) => {
        const registerUser = await RegisterUser(userRepository);
        
        registerUser.Execute(req.body, res, next);
    };

    const userFindByIdController = async (req, res, next) => {
        const FindByIdQuery = await FindById(userRepository);
        
        FindByIdQuery.Execute(req.params.id, res, next);
    };

    const userGetController = async (req, res, next) => {
        const GetAllUsersQuery = await GetAllUsers(userRepository);

        GetAllUsersQuery.Execute().then((users) => {
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