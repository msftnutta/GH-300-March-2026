// ─── Live Date & Time ────────────────────────────────────────────────────────
function updateDateTime() {
  const el = document.getElementById('datetime');
  if (!el) return;

  const now = new Date();
  el.textContent = now.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
}

// ─── IP Geolocation ───────────────────────────────────────────────────────────
async function getLocationInfo() {
  const locationEl = document.getElementById('location');
  const timezoneEl = document.getElementById('timezone');
  if (!locationEl && !timezoneEl) return;

  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();

    if (locationEl) {
      const parts = [data.city, data.region, data.country_name].filter(Boolean);
      locationEl.textContent = parts.length ? parts.join(', ') : 'Location unavailable';
    }

    if (timezoneEl) {
      const offset = data.utc_offset || '';
      const tz = data.timezone || 'Unknown';
      timezoneEl.textContent = offset ? `${tz}  (UTC${offset})` : tz;
    }
  } catch (err) {
    console.warn('Geolocation failed:', err.message);
    if (locationEl) locationEl.textContent = 'Location unavailable';
    if (timezoneEl) timezoneEl.textContent = 'Timezone unavailable';
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
  getLocationInfo();
});
