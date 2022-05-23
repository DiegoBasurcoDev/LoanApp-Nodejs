const request = require('supertest');
const app = require('./app');

jest.setTimeout(10000);

describe('API Auth', () => {
    it('POST api/auth -> 404 if not found', async () => {
        const body = {
            username: "dbasurco",
            password: "123456"
        };
        
        return await request(app)
            .post('/api/auth').send(body)
            .expect(404);
    });

    it('POST api/auth -> get token', () => {
        const body = {
            username: "lreyes",
            password: "123456"
        };

        return request(app).post('/api/auth')
            .send(body).expect('Content-Type', /json/).expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        token: expect.any(String)
                    })
                )
            });
    });

    it('POST api/auth -> validate username and password', () => {
        const body = {
            username: 123,
            password: "123456"
        };

        return request(app).post('/api/auth')
        .send(body).expect(422);
    });
});