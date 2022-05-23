module.exports = class AuthRepository {
    constructor() { }

    generateToken(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    verifyToken(tokenInstance) {
        return Promise.reject(new Error('not implemented'));
    }
}