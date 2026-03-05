const express = require('express');
const router = express.Router();
const axios = require('axios');

const AZURE_MAPS_BASE = 'https://atlas.microsoft.com/weather';
const API_VERSION = '1.1';

// GET /weather — render the weather page UI
router.get('/', (req, res) => {
  res.render('weather');
});

// GET /weather/api — proxy Azure Maps current conditions + 5-day forecast
router.get('/api', async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: 'lat and lon query parameters are required.' });
  }

  const key = process.env.AZURE_MAPS_KEY;
  if (!key || key === 'YOUR_AZURE_MAPS_KEY_HERE') {
    return res.status(500).json({ error: 'Azure Maps API key is not configured. Set AZURE_MAPS_KEY in your .env file.' });
  }

  const query = `${lat},${lon}`;

  try {
    const [currentRes, forecastRes] = await Promise.all([
      axios.get(`${AZURE_MAPS_BASE}/currentConditions/json`, {
        params: { 'api-version': API_VERSION, query, 'subscription-key': key, details: true }
      }),
      axios.get(`${AZURE_MAPS_BASE}/forecast/daily/json`, {
        params: { 'api-version': API_VERSION, query, duration: 5, 'subscription-key': key }
      })
    ]);

    const current = currentRes.data.results?.[0] || null;
    const forecast = forecastRes.data.forecasts || [];

    res.json({ current, forecast });
  } catch (err) {
    console.error('Azure Maps error:', err.response?.data || err.message);
    res.status(502).json({ error: 'Failed to fetch weather data from Azure Maps.', detail: err.response?.data || err.message });
  }
});

module.exports = router;
