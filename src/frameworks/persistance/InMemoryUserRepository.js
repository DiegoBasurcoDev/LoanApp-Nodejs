const UserRepository = require("../../application/contracts/UserRepository");

module.exports = class InMemoryUserRepository extends UserRepository {
    constructor() {
        super();
    }

    async getAll() {
        return [];
    }
};