const createError = require('http-errors');

module.exports = (UserRepository) => {
    async function Execute(id, res, next) {
        const foundTodo = UserRepository.getById(id);

        if(!foundTodo){
            return next(createError(404, 'Not found'));
        }

        return res.status(201).json(foundTodo);
    }

    return {
        Execute
    };
};