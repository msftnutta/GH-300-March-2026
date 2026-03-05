const request = require('supertest');
const axios = require('axios');

// Mock axios before requiring the app
jest.mock('axios');

const app = require('../server');

const MOCK_CURRENT = {
  temperature: { value: 30, unit: 'C' },
  weatherIcon: 1,
  iconPhrase: 'Sunny',
  hasPrecipitation: false,
  relativeHumidity: 70
};

const MOCK_FORECAST = [
  {
    date: '2026-03-05T07:00:00+08:00',
    temperature: { minimum: { value: 25, unit: 'C' }, maximum: { value: 34, unit: 'C' } },
    day: { iconPhrase: 'Mostly sunny', hasPrecipitation: false },
    night: { iconPhrase: 'Clear', hasPrecipitation: false }
  }
];

describe('GET /weather/api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 400 when lat and lon are missing', async () => {
    const res = await request(app).get('/weather/api');
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toMatch(/lat and lon/i);
  });

  it('should return 400 when only lat is provided', async () => {
    const res = await request(app).get('/weather/api?lat=3.1');
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should return 400 when only lon is provided', async () => {
    const res = await request(app).get('/weather/api?lon=101.7');
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should return 500 when Azure Maps API key is not configured', async () => {
    const originalKey = process.env.AZURE_MAPS_KEY;
    delete process.env.AZURE_MAPS_KEY;

    const res = await request(app).get('/weather/api?lat=3.1&lon=101.7');
    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toMatch(/api key/i);

    process.env.AZURE_MAPS_KEY = originalKey;
  });

  it('should return 500 when Azure Maps API key is the placeholder value', async () => {
    const originalKey = process.env.AZURE_MAPS_KEY;
    process.env.AZURE_MAPS_KEY = 'YOUR_AZURE_MAPS_KEY_HERE';

    const res = await request(app).get('/weather/api?lat=3.1&lon=101.7');
    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty('error');

    process.env.AZURE_MAPS_KEY = originalKey;
  });

  it('should return current conditions and forecast when API key is valid', async () => {
    process.env.AZURE_MAPS_KEY = 'test-valid-key';

    axios.get.mockResolvedValueOnce({ data: { results: [MOCK_CURRENT] } });
    axios.get.mockResolvedValueOnce({ data: { forecasts: MOCK_FORECAST } });

    const res = await request(app).get('/weather/api?lat=3.1390&lon=101.6869');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('current');
    expect(res.body).toHaveProperty('forecast');
    expect(res.body.current).toMatchObject({ iconPhrase: 'Sunny' });
    expect(res.body.forecast).toHaveLength(1);

    delete process.env.AZURE_MAPS_KEY;
  });

  it('should return null current when API results array is empty', async () => {
    process.env.AZURE_MAPS_KEY = 'test-valid-key';

    axios.get.mockResolvedValueOnce({ data: { results: [] } });
    axios.get.mockResolvedValueOnce({ data: { forecasts: [] } });

    const res = await request(app).get('/weather/api?lat=3.1390&lon=101.6869');
    expect(res.statusCode).toBe(200);
    expect(res.body.current).toBeNull();
    expect(res.body.forecast).toEqual([]);

    delete process.env.AZURE_MAPS_KEY;
  });

  it('should return 502 when Azure Maps API call fails', async () => {
    process.env.AZURE_MAPS_KEY = 'test-valid-key';

    axios.get.mockRejectedValue(new Error('Network error'));

    const res = await request(app).get('/weather/api?lat=3.1390&lon=101.6869');
    expect(res.statusCode).toBe(502);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toMatch(/failed to fetch/i);

    delete process.env.AZURE_MAPS_KEY;
  });
});
