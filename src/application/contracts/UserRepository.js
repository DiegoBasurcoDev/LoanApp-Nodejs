const User = require('../../entities/user');

module.exports = class UserRepository {
    constructor() { }

    getAll() {
        return Promise.reject(new Error('not implemented'));
        //return [];
        //return User.find();
    }
}