const MongoDBDatabaseService = require('../application/contracts/MongoDBDatabaseService');
const InMemoryDatabaseServices = require('../frameworks/persistance/InMemoryDatabaseServices');

module.exports = (() => {
    return {
        MongoDBDatabaseService: new MongoDBDatabaseService(),
        DatabaseService: new InMemoryDatabaseServices()
    };
})();