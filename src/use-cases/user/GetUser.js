module.exports = (dependencies) => {
    async function Execute() {
        //return await userModel.find();
        return dependencies.getAll();
    }

    return {
        Execute
    };
};