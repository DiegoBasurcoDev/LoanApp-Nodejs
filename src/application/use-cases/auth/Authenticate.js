const createError = require('http-errors');

module.exports = (UserRepository, AuthRepository) => {
    async function Execute(req, res, next) {
        if(typeof req.username !== 'string') {
            return next(createError(422, 'Validation error'));
        }

        if(typeof req.password !== 'string') {
            return next(createError(422, 'Validation error'));
        }

        const params = { username: req.username, password: req.password };
        const result = UserRepository.getByParams(params);
        if(!result){
            return next(createError(404, "The email or password dosen't exists"));
        }

        const token = AuthRepository.generateToken(params);
   
        return res.status(200).json({token: token});
    }

    return {
        Execute
    };
};