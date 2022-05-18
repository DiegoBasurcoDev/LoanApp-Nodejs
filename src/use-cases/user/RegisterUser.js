const userModel = require('../../models/user');
const createError = require('http-errors');

module.exports = () => {
    async function Execute(req, res, next) {
        //const newUser = new userModel(res);
        //await newUser.save();

        if(typeof req.name !== 'string') {
            return next(createError(422, 'Validation error'));
        }

        const newUser = {
            name: req.name,
            lastname: req.lastname,
            email: req.email,
            username: req.username,
            password: req.password
        };
        //return await userModel.find();
        return res.status(201).json(newUser);
    }

    return {
        Execute
    };
};