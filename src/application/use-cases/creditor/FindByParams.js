const createError = require('http-errors');

module.exports = (CreditorRepository) => {
    async function Execute(params, res, next) {
        const found = CreditorRepository.getByParams(params);

        if(!found){
            return next(createError(404, 'Not found'));
        }

        return res.status(201).json(found);
    }

    return {
        Execute
    };
};