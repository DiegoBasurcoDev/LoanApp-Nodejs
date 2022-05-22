const User = require('../models/user');

module.exports = class UserRepository {
    constructor() { }

    async getAll() {
        return [];
        //return User.find();
    }
}