const RegisterUser = require('../use-cases/user/RegisterUser');

module.exports = () => {
    const userRegisterController = async (req, res) => {
        const registerUser = await RegisterUser();
        
        registerUser.Execute(req.body).then((users) => {
            res.json(users);
        }, (err) => {
            next(err);
        })
        
        
        //.Execute(req.body);
        //console.log(req.body);
        //return res.json(RegisterUser);
    };

    return {
        userRegisterController
    }
}