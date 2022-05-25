const createError = require('http-errors');

module.exports = (CreditorRepository) => {
    async function Execute(req, res, next) {

        if(typeof req.name !== 'string') {
            return next(createError(422, 'Validation error'));
        }

        const newUser = {
            name: req.name,
            lastname: req.lastname,
            status: 1,
            idUser: req.idUser
        };

        try{
            const result = CreditorRepository.add(newUser);        
            return res.status(201).json(result);
        }catch(error){
            return res.status(422).json({message: "No se pudo registrar el acreedor"});
        }
    }

    return {
        Execute
    };
};