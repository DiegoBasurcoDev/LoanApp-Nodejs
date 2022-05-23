module.exports = (UserRepository) => {
    async function Execute() {
        return UserRepository.getAll();
    }

    return {
        Execute
    };
};