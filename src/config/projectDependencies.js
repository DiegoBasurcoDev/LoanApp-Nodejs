const MongoDBDatabaseService = require('../contracts/MongoDBDatabaseService');

module.exports = (() => {
    return {
        MongoDBDatabaseService: new MongoDBDatabaseService()
    };
})();