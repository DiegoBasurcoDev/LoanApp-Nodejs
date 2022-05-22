const RegisterUser = require('../use-cases/user/RegisterUser');
const GetUser = require('../use-cases/user/GetUser');
const FindById = require('../use-cases/user/FindById');
const createError = require('http-errors');

module.exports = (dependencies) => {
    this.userRepository = dependencies.UserRepository;

    const userRegisterController = async (req, res, next) => {
        const registerUser = await RegisterUser();
        
        registerUser.Execute(req.body, res, next);
    };

    const userFindByIdController = async (req, res, next) => {
        const findById = await FindById();
        
        findById.Execute(req.params.id, res, next);
    };

    const userGetController = async (req, res, next) => {
        const getUser = await GetUser(this.userRepository);

        getUser.Execute().then((users) => {
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