const userModel = require('../../../entities/user');
const createError = require('http-errors');

module.exports = () => {
    async function Execute(id, res, next) {
        const todos = [{id: 1, name: 'Liliana'}];
        //return await userModel.find();
        const foundTodo = todos.find(todo => todo.id === Number(id));

        if(!foundTodo){
            return next(createError(404, 'Not found'));
        }

        return res.status(201).json(foundTodo);
    }

    return {
        Execute
    };
};