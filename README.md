# Simple Hello World Website

A minimalist static website that displays "Hello World" with real-time date, time, and location information based on the visitor's IP address.

## Files Included

- **index.html** - Main homepage with Hello World message and location/time display
- **404.html** - Custom 404 error page for missing pages
- **500.html** - Custom 500 error page for server errors
- **about.html** - About page explaining the website
- **styles.css** - Stylesheet with modern gradient design
- **script.js** - JavaScript for real-time updates and geolocation

## Features

- 🌍 Automatic location detection via IP address
- 🕐 Real-time clock updated every second
- 📱 Responsive design for all devices
- 🎨 Modern gradient UI with glassmorphism effect
- ⚡ Pure vanilla JavaScript, no dependencies

## How to Use

1. Simply open `index.html` in any modern web browser
2. For local development, you can use any static server:
   - Python: `python -m http.server 8000`
   - Node.js: `npx http-server`
   - PHP: `php -S localhost:8000`

## API Used

The site uses [ipapi.co](https://ipapi.co/) free API for IP-based geolocation. No API key required for basic usage.

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Safari, Edge)
