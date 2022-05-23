const Authenticate = require("../application/use-cases/auth/Authenticate");

module.exports = (dependencies) => {
    const { userRepository, authRepository } = dependencies.DatabaseService;    

    const authController = async (req, res, next) => {
        const AuthenticateQuery = await Authenticate(userRepository, authRepository);
        
        AuthenticateQuery.Execute(req.body, res, next);
    };

    return {
        authController
    }
};