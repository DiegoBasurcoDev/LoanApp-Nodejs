module.exports = (UserRepository) => {
    async function Execute() {
        //return await userModel.find();
        return UserRepository.getAll();
    }

    return {
        Execute
    };
};