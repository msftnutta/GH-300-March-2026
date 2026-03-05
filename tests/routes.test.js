const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should return 200 and render the home page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello World');
  });
});

describe('GET /about', () => {
  it('should return 200 and render the about page', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
  });
});

describe('GET /weather', () => {
  it('should return 200 and render the weather page', async () => {
    const res = await request(app).get('/weather');
    expect(res.statusCode).toBe(200);
  });
});

describe('GET /nonexistent', () => {
  it('should return 404 for unknown routes', async () => {
    const res = await request(app).get('/nonexistent-page');
    expect(res.statusCode).toBe(404);
  });
});
