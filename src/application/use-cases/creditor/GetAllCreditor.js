module.exports = (CreditorRepository) => {
    async function Execute() {
        return CreditorRepository.getAll();
    }

    return {
        Execute
    };
};