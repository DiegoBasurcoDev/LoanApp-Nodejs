const CreditorRepository = require("../../application/contracts/CreditorRepository");
const Creditor = require('../../entities/creditor');

module.exports = class InMemoryUserRepository extends CreditorRepository {
    constructor() {
        super();
    }

    async getAll() {
        const todos = [{id: 1, name: 'Liliana', lastname: 'Reyes', status: 1, idUser: 1}];

        return todos;
    }

    getById(creditorId) {
        const todos = [{id: 1, name: 'Liliana', lastname: 'Reyes', status: 1, idUser: 1}];

        const foundTodo = todos.find(todo => todo.id === Number(creditorId));

        return foundTodo;
    }

    getByParams(creditorInstance) {
        const todos = [{id: 1, name: 'Liliana', lastname: 'Reyes', status: 1, idUser: 1}];

        const found = todos.find(todo => todo.idUser === creditorInstance.idUser);

        return found;
    }

    add(creditorInstance) {
        //this.currentId = this.currentId + 1;
        //studentInstance.id = this.currentId;
        //this.students.push(userInstance);

        return creditorInstance;
    }
};