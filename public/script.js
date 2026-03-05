const MALAYSIA_TIMEZONE = 'Asia/Kuala_Lumpur';
const MALAYSIA_LOCATION = 'Kuala Lumpur, Malaysia';

// ─── Malaysia Date & Time ─────────────────────────────────────────────────────
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
    timeZone: MALAYSIA_TIMEZONE,
    timeZoneName: 'short'
  });
}

// ─── Local Date & Time ────────────────────────────────────────────────────────
function updateLocalDateTime() {
  const el = document.getElementById('local-datetime');
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

  // Default to Malaysia values
  if (locationEl) locationEl.textContent = MALAYSIA_LOCATION;
  if (timezoneEl) timezoneEl.textContent = `${MALAYSIA_TIMEZONE} (UTC+08:00)`;

  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();

    // Show local info section only if user is outside Malaysia
    if (data.country_code && data.country_code !== 'MY') {
      const localSection = document.getElementById('local-section');
      if (localSection) localSection.classList.remove('hidden');

      const localLocationEl = document.getElementById('local-location');
      const localTimezoneEl = document.getElementById('local-timezone');

      if (localLocationEl) {
        const parts = [data.city, data.region, data.country_name].filter(Boolean);
        localLocationEl.textContent = parts.length ? parts.join(', ') : 'Location unavailable';
      }

      if (localTimezoneEl) {
        const offset = data.utc_offset || '';
        const tz = data.timezone || 'Unknown';
        localTimezoneEl.textContent = offset ? `${tz} (UTC${offset})` : tz;
      }
    }
  } catch (err) {
    console.warn('Geolocation failed:', err.message);
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  updateLocalDateTime();
  setInterval(() => {
    updateDateTime();
    updateLocalDateTime();
  }, 1000);
  getLocationInfo();
});
