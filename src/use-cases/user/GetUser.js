const userModel = require('../../models/user');

module.exports = () => {
    async function Execute() {
        //return await userModel.find();
        return [];
    }

    return {
        Execute
    };
};