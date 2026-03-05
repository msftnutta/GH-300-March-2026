# HelloWorld App

A modernized **Node.js/Express** web application that displays "Hello World" alongside real-time date and time based on the client's location, and a live weather forecast retrieved from **Azure Maps**.

## Features

- 🕐 **Live clock** — date, time, and timezone updated every second based on the visitor's location
- 📍 **IP-based geolocation** — automatically detects city, region, and country via [ipapi.co](https://ipapi.co/)
- 🌤 **Weather forecast** — current conditions and 5-day daily forecast powered by [Azure Maps Weather API](https://learn.microsoft.com/en-us/azure/azure-maps/weather-coverage)
- 🌡 **Current conditions** — temperature, feels-like, humidity, wind, UV index, visibility, pressure, and cloud cover
- 📅 **5-day forecast** — high/low temperatures and weather icons for each day
- 🔒 **Secure API key handling** — Azure Maps subscription key is stored server-side and never exposed to the browser
- 📱 **Responsive design** — works on all screen sizes
- 🎨 **Modern glassmorphism UI** built with Tailwind CSS

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | [Node.js](https://nodejs.org/) |
| Web framework | [Express](https://expressjs.com/) |
| Templating | [EJS](https://ejs.co/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) (CDN) |
| Weather API | [Azure Maps Weather](https://learn.microsoft.com/azure/azure-maps/) |
| Geolocation | [ipapi.co](https://ipapi.co/) |
| HTTP client | [axios](https://axios-http.com/) |
| Config | [dotenv](https://github.com/motdotla/dotenv) |

## Project Structure

```
.
├── server.js           # Express app entry point
├── package.json
├── .env                # Environment variables (not committed)
├── routes/
│   ├── index.js        # GET /  — home page
│   ├── about.js        # GET /about
│   └── weather.js      # GET /weather  &  GET /weather/api
├── views/
│   ├── index.ejs       # Home page template
│   ├── about.ejs       # About page template
│   ├── weather.ejs     # Weather page template
│   ├── 404.ejs         # 404 error page
│   ├── 500.ejs         # 500 error page
│   └── partials/
│       ├── header.ejs  # Shared navigation header
│       └── footer.ejs  # Shared footer
└── public/
    └── script.js       # Client-side clock & geolocation logic
```

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- An [Azure Maps](https://azure.microsoft.com/products/azure-maps/) account with a valid subscription key

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/msftnutta/GH-300-March-2026.git
   cd GH-300-March-2026
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root and add your Azure Maps key:

   ```env
   AZURE_MAPS_KEY=your_azure_maps_subscription_key_here
   ```

   > You can obtain a key from the [Azure Portal](https://portal.azure.com/) under your Azure Maps account → **Authentication**.

## Running the App

**Production mode**

```bash
npm start
```

**Development mode** (auto-restarts on file changes)

```bash
npm run dev
```

The server starts on port **3000** by default. Open [http://localhost:3000](http://localhost:3000) in your browser.

You can change the port by setting a `PORT` environment variable in your `.env` file:

```env
PORT=8080
```

## Pages & API Routes

| Route | Description |
|---|---|
| `GET /` | Home page — live clock, timezone, and location |
| `GET /about` | About page — feature and tech stack overview |
| `GET /weather` | Weather page — current conditions and 5-day forecast |
| `GET /weather/api?lat=&lon=` | JSON API — proxies Azure Maps weather data for the given coordinates |

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Safari, Edge)
