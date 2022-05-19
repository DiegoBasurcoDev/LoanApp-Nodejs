const validEmail = require('../src/validations/validEmail');

test('email valid -> true', () => {
    const result = validEmail.isValidEmail('dbasurco@gmail.com');
    expect(result).toBe(true);
});

test('email without @ -> false', () => {
    const result = validEmail.isValidEmail('dbasurcogmail.com');
    expect(result).toBe(false);
});

test('email without . -> false', () => {
    const result = validEmail.isValidEmail('dbasurco@gmailcom');
    expect(result).toBe(false);
});

test('email replace . to , -> false', () => {
    const result = validEmail.isValidEmail('dbasurco@gmail,com');
    expect(result).toBe(false);
});

test('email with .c -> false', () => {
    const result = validEmail.isValidEmail('dbasurco@gmail.c');
    expect(result).toBe(false);
});

test('email with .co -> false', () => {
    const result = validEmail.isValidEmail('dbasurco@gmail.co');
    expect(result).toBe(true);
});