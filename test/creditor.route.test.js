const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app');
const { deleteOne } = require('../src/entities/user');

jest.setTimeout(10000);

describe('API Creditor', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URL);
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });

    it('GET api/creditor -> Array', async () => {
        return await request(app)
            .get('/api/creditor')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: expect.any(Number),
                            name: expect.any(String),
                            lastname: expect.any(String),
                            status: expect.any(Number),
                            idUser: expect.any(Number)
                        })
                    ])
                )
            });
    });

    it('GET api/creditor/1 -> specific user by ID', async () => {
        return await request(app)
            .get('/api/creditor/1')
            .expect('Content-Type', /json/)
            .expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        lastname: expect.any(String),
                        status: expect.any(Number),
                        idUser: expect.any(Number)
                    })
                )
            });
    });

    it('GET api/creditor/9999 -> 404 if not found', async () => {
        return await request(app)
            .get('/api/creditor/9999')
            .expect(404);
    });

    it('POST api/creditor -> create todo', async () => {
        const body = {
            name: "liliana",
            lastname: "reyes",
            status: 1,
            idUser: 1
        };

        return await request(app).post('/api/creditor')
            .send(body).expect('Content-Type', /json/).expect(201)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                            name: expect.any(String),
                            lastname: expect.any(String),
                            status: expect.any(Number),
                            idUser: expect.any(Number)
                        })
                )
            });
    });

    it('POST api/creditor -> validate body', async () => {
        const body = {
            name: 123,
            lastname: "reyes",
            status: 1,
            idUser: 1
        };

        return await request(app).post('/api/creditor')
        .send(body).expect(422);
    });
});