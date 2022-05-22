const MongoDBDatabaseService = require('../contracts/MongoDBDatabaseService');
const UserRepository = require('../contracts/UserRepository');

module.exports = (() => {
    return {
        MongoDBDatabaseService: new MongoDBDatabaseService(),
        UserRepository: new UserRepository()
    };
})();