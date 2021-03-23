import request from 'supertest';

import app from '../server';
import db from '../database';

describe('users', () => {
  beforeAll(async () => {
    await db.connectToDatabase();
  });

  afterAll(async () => {
    await db.disconnectToDatabase();
  });

  afterEach(async () => {
    await db.truncateDatabase();
  });

  it('should create a new user', async done => {
    const response = await request(app).post('/users').send({
      fullname: 'Guilherme Falcão',
      email: 'guilusa25@gmail.com',
      login: 'aqselmo',
      birthday: '25/01/2001',
      password: 'Guilherme2501',
    });

    expect(JSON.parse(response.text)).toEqual(
      expect.objectContaining({
        fullname: 'Guilherme Falcão',
      })
    );
    done();
  });
});
