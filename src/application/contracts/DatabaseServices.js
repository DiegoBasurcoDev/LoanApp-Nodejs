module.exports = class DatabaseServices {
    constructor() {
        this.userRepository = null;
    }

    initDatabase() {
        return Promise.reject(new Error('not implemented'));
    }
}