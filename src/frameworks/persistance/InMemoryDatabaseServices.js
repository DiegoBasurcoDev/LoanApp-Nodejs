const DatabaseServices = require('../../application/contracts/DatabaseServices');
const InMemoryUserRepository = require('./InMemoryUserRepository');
const InMemoryAuthRepository = require('./InMemoryAuthRepository');
const InMemoryCreditorRepository = require('./InMemoryCreditorRepository');
const MongoDBDatabaseService = require('../../application/contracts/MongoDBDatabaseService');

module.exports = class InMemoryDatabaseServices extends DatabaseServices {
    constructor() {
        super();
        this.userRepository = new InMemoryUserRepository();
        this.authRepository = new InMemoryAuthRepository();
        this.creditorRepository = new InMemoryCreditorRepository();
    }

    async initDatabase() {
        new MongoDBDatabaseService().getConnection();
    }
}