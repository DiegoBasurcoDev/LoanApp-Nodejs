const DatabaseServices = require('../../application/contracts/DatabaseServices');
const InMemoryUserRepository = require('./InMemoryUserRepository');
const MongoDBDatabaseService = require('../../application/contracts/MongoDBDatabaseService');

module.exports = class InMemoryDatabaseServices extends DatabaseServices {
    constructor() {
        super();
        this.userRepository = new InMemoryUserRepository();
    }

    async initDatabase() {
        new MongoDBDatabaseService().getConnection();
    }
}