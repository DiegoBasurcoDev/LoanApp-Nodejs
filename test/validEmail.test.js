const validEmail = require('../src/validations/validEmail');

describe('Email validation', () => {
    it('email valid -> true', async () => {
        const result = validEmail.isValidEmail('dbasurco@gmail.com');
        return expect(result).toBe(true);
    });

    it('email without @ -> false', () => {
        const result = validEmail.isValidEmail('dbasurcogmail.com');
        expect(result).toBe(false);
    });
    
    it('email without . -> false', () => {
        const result = validEmail.isValidEmail('dbasurco@gmailcom');
        expect(result).toBe(false);
    });
    
    it('email replace . to , -> false', () => {
        const result = validEmail.isValidEmail('dbasurco@gmail,com');
        expect(result).toBe(false);
    });
    
    it('email with .c -> false', () => {
        const result = validEmail.isValidEmail('dbasurco@gmail.c');
        expect(result).toBe(false);
    });
    
    it('email with .co -> false', () => {
        const result = validEmail.isValidEmail('dbasurco@gmail.co');
        expect(result).toBe(true);
    });
});

