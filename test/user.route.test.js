const request = require('supertest');
const app = require('./app');

jest.setTimeout(10000);

describe('API User', () => {
    it('GET api/user -> Array', async () => {
        return await request(app)
            .get('/api/user')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: expect.any(Number),
                            name: expect.any(String),
                            lastname: expect.any(String),
                            email: expect.any(String),
                            username: expect.any(String),
                            password: expect.any(String)
                        })
                    ])
                )
            });
    });

    it('GET api/user/1 -> specific user by ID', async () => {
        return await request(app)
            .get('/api/user/1')
            .expect('Content-Type', /json/)
            .expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        lastname: expect.any(String),
                        email: expect.any(String),
                        username: expect.any(String),
                        password: expect.any(String)
                    })
                )
            });
    });

    it('GET api/user/9999 -> 404 if not found', async () => {
        return await request(app)
            .get('/api/user/9999')
            .expect(404);
    });

    it('POST api/user -> create todo', async () => {
        const body = {
            name: "diego",
            lastname: "basurco",
            email: "diego.basurco@gmail.com",
            username: "dbasurco",
            password: "123456"
        };

        return await request(app).post('/api/user')
            .send(body).expect('Content-Type', /json/).expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                            name: expect.any(String),
                            lastname: expect.any(String),
                            email: expect.any(String),
                            username: expect.any(String),
                            password: expect.any(String)
                        })
                )
            });
    });

    it('POST api/user -> validate body', async () => {
        const body = {
            name: 123,
            lastname: "basurco",
            email: "diego.basurco@gmail.com",
            username: "dbasurco",
            password: "123456"
        };

        return await request(app).post('/api/user')
        .send(body).expect(422);
    });
});