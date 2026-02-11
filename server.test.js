const request = require('supertest');
const app = require('./server');

describe('SA Bank API Tests', () => {
  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('GET /api/account/:id should return account details', async () => {
    const response = await request(app).get('/api/account/ACC001');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('John Doe');
  });

  test('GET /api/account/:id should return 404 for invalid account', async () => {
    const response = await request(app).get('/api/account/INVALID');
    expect(response.status).toBe(404);
  });
});