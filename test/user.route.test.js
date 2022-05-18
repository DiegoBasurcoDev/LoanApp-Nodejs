const request = require('supertest');
const app = require('./app');

jest.setTimeout(10000);

describe('API Users', () => {
    it('GET api/users -> Array', async () => {
        return await request(app)
            .get('/api/users')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([])
                )
            });
    });

    it('GET api/users/1 -> specific user by ID', async () => {
        return await request(app)
            .get('/api/users/1')
            .expect('Content-Type', /json/)
            .expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String)
                    })
                )
            });
    });

    it('GET api/users/9999 -> 404 if not found', async () => {
        return await request(app)
            .get('/api/users/9999')
            .expect(404);
    });

    it('POST api/users -> create todo', () => {
        const body = {
            name: "diego",
            lastname: "basurco",
            email: "diego.basurco@gmail.com",
            username: "dbasurco",
            password: "123456"
        };

        return request(app).post('/api/users')
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

    it('POST api/users -> validate body', () => {
        const body = {
            name: 123,
            lastname: "basurco",
            email: "diego.basurco@gmail.com",
            username: "dbasurco",
            password: "123456"
        };

        return request(app).post('/api/users')
        .send(body).expect(422);
    });
});