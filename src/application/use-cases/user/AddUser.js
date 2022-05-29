const createError = require('http-errors');

module.exports = (UserRepository) => {
    async function Execute(req, res, next) {

        if(typeof req.name !== 'string') {
            return next(createError(422, 'Validation error'));
        }

        const newUser = {
            name: req.name,
            lastname: req.lastname,
            email: req.email,
            username: req.username,
            password: req.password,
            status: 1
        };

        try{
            const result = await UserRepository.add(newUser);        
            return res.status(201).json(result);
        }catch(error){
            return res.status(422).json({message: "No se pudo registrar al usuario"});
        }
    }

    return {
        Execute
    };
};