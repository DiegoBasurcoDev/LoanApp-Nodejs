const mongoose = require('mongoose');

module.exports = class MongodbDatabase {
    constructor() {}

    getConnection() {
        return mongoose.connect(process.env.MONGODB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
}