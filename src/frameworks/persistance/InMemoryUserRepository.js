const UserRepository = require("../../application/contracts/UserRepository");
const User = require('../../entities/user');

module.exports = class InMemoryUserRepository extends UserRepository {
    constructor() {
        super();
    }

    async getAll() {
        const todos = [{id: 1, name: 'Liliana', lastname: 'Reyes', email: 'lreyes@gmail.com', username: 'lreyes', password: '123456'}];

        return todos;
    }

    getById(userId) {
        const todos = [{id: 1, name: 'Liliana', lastname: 'Reyes', email: 'lreyes@gmail.com', username: 'lreyes', password: '123456'}];

        const foundTodo = todos.find(todo => todo.id === Number(userId));

        return foundTodo;
    }

    getByParams(userInstance) {
        const todos = [{id: 1, name: 'Liliana', lastname: 'Reyes', email: 'lreyes@gmail.com', username: 'lreyes', password: '123456'}];

        const found = todos.find(todo => todo.username === userInstance.username
            && todo.password === userInstance.password);

        return found;
    }

    async add(userInstance) {
        //this.currentId = this.currentId + 1;
        //studentInstance.id = this.currentId;
        //this.students.push(userInstance);

        return await userInstance;
    }
};