const AuthRepository = require("../../application/contracts/AuthRepository");
const jwt = require('jsonwebtoken');

module.exports = class InMemoryAuthRepository extends AuthRepository {
    generateToken(userInstance) {
        const token = jwt.sign(userInstance, process.env.SECRET_KEY);
        return token;
    }

    verifyToken(tokenInstance) {
        const userInstance = jwt.verify(tokenInstance, process.env.SECRET_KEY);

        return userInstance;
    }
};