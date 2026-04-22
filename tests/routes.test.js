const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should return 200 and render the home page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello World');
  });

  it('should include the language selector with all supported languages', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('lang-switcher');
    expect(res.text).toContain('data-lang-btn="en"');
    expect(res.text).toContain('data-lang-btn="zh"');
    expect(res.text).toContain('data-lang-btn="ja"');
    expect(res.text).toContain('data-lang-btn="hi"');
  });

  it('should include i18n script', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('/i18n.js');
  });

  it('should include data-i18n attributes for home page content', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('data-i18n="home.title"');
    expect(res.text).toContain('data-i18n="home.subtitle"');
    expect(res.text).toContain('data-i18n="nav.home"');
  });
});

describe('GET /about', () => {
  it('should return 200 and render the about page', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
  });

  it('should include data-i18n attributes for about page content', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('data-i18n="about.title"');
    expect(res.text).toContain('data-i18n="about.back"');
  });
});

describe('GET /weather', () => {
  it('should return 200 and render the weather page', async () => {
    const res = await request(app).get('/weather');
    expect(res.statusCode).toBe(200);
  });

  it('should include data-i18n attributes for weather page content', async () => {
    const res = await request(app).get('/weather');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('data-i18n="weather.title"');
    expect(res.text).toContain('data-i18n="weather.humidity"');
    expect(res.text).toContain('data-i18n="weather.conditions"');
  });
});

describe('GET /nonexistent', () => {
  it('should return 404 for unknown routes', async () => {
    const res = await request(app).get('/nonexistent-page');
    expect(res.statusCode).toBe(404);
  });
});
