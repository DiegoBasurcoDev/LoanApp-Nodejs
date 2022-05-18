const userModel = require('../../models/user');

module.exports = () => {
    async function Execute(req) {
        //const newUser = new userModel(res);
        //await newUser.save();

        console.log(req);
        return await userModel.find();
    }

    return {
        Execute
    };
};