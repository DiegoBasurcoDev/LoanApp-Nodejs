const createError = require('http-errors');

module.exports = (CreditorRepository) => {
    async function Execute(id, res, next) {
        const foundTodo = CreditorRepository.getById(id);

        if(!foundTodo){
            return next(createError(404, 'Not found'));
        }

        return res.status(201).json(foundTodo);
    }

    return {
        Execute
    };
};