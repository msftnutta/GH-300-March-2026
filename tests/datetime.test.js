/**
 * Unit tests for date/time utility logic from public/script.js
 *
 * These tests validate the formatting behaviour used on the front-end
 * without relying on a browser DOM, by replicating the same logic.
 */

const MALAYSIA_TIMEZONE = 'Asia/Kuala_Lumpur';

/** Replicates updateDateTime from script.js */
function formatMalaysiaDateTime(date) {
  return date.toLocaleString('en-US', {
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

/** Replicates updateLocalDateTime from script.js */
function formatLocalDateTime(date) {
  return date.toLocaleString('en-US', {
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

/** Replicates the location-display logic from getLocationInfo in script.js */
function buildLocationText(data) {
  const parts = [data.city, data.region, data.country_name].filter(Boolean);
  return parts.length ? parts.join(', ') : 'Location unavailable';
}

/** Replicates the timezone-display logic from getLocationInfo in script.js */
function buildTimezoneText(data) {
  const offset = data.utc_offset || '';
  const tz = data.timezone || 'Unknown';
  return offset ? `${tz} (UTC${offset})` : tz;
}

// ─── Malaysia DateTime Formatting ────────────────────────────────────────────

describe('formatMalaysiaDateTime', () => {
  it('should return a non-empty string', () => {
    const result = formatMalaysiaDateTime(new Date());
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  it('should include the timezone abbreviation MYT or +08', () => {
    const result = formatMalaysiaDateTime(new Date('2026-03-05T00:00:00Z'));
    // Malaysia Standard Time shows as "GMT+8" or "MYT" depending on runtime
    expect(result).toMatch(/MYT|GMT\+8|\+0800|\+08/);
  });

  it('should include the year 2026 for a 2026 date', () => {
    const result = formatMalaysiaDateTime(new Date('2026-06-15T12:00:00Z'));
    expect(result).toContain('2026');
  });

  it('should include the full weekday name', () => {
    // 2026-03-05 is a Thursday
    const result = formatMalaysiaDateTime(new Date('2026-03-05T00:00:00Z'));
    expect(result).toMatch(/Thursday|Wednesday/); // depends on UTC offset
  });

  it('should include AM or PM', () => {
    const result = formatMalaysiaDateTime(new Date());
    expect(result).toMatch(/AM|PM/);
  });
});

// ─── Local DateTime Formatting ────────────────────────────────────────────────

describe('formatLocalDateTime', () => {
  it('should return a non-empty string', () => {
    const result = formatLocalDateTime(new Date());
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  it('should include a year', () => {
    const result = formatLocalDateTime(new Date('2026-03-05T10:00:00Z'));
    expect(result).toContain('2026');
  });

  it('should include AM or PM', () => {
    const result = formatLocalDateTime(new Date());
    expect(result).toMatch(/AM|PM/);
  });
});

// ─── Location Text Builder ────────────────────────────────────────────────────

describe('buildLocationText', () => {
  it('should join city, region, and country when all are present', () => {
    const result = buildLocationText({ city: 'Tokyo', region: 'Tokyo', country_name: 'Japan' });
    expect(result).toBe('Tokyo, Tokyo, Japan');
  });

  it('should skip missing fields', () => {
    const result = buildLocationText({ city: 'Paris', region: '', country_name: 'France' });
    expect(result).toBe('Paris, France');
  });

  it('should return "Location unavailable" when all fields are empty', () => {
    const result = buildLocationText({ city: '', region: '', country_name: '' });
    expect(result).toBe('Location unavailable');
  });

  it('should handle undefined fields gracefully', () => {
    const result = buildLocationText({ country_name: 'Malaysia' });
    expect(result).toBe('Malaysia');
  });
});

// ─── Timezone Text Builder ────────────────────────────────────────────────────

describe('buildTimezoneText', () => {
  it('should format timezone with UTC offset when both are present', () => {
    const result = buildTimezoneText({ timezone: 'Asia/Tokyo', utc_offset: '+0900' });
    expect(result).toBe('Asia/Tokyo (UTC+0900)');
  });

  it('should show only timezone name when offset is absent', () => {
    const result = buildTimezoneText({ timezone: 'Europe/London', utc_offset: '' });
    expect(result).toBe('Europe/London');
  });

  it('should return "Unknown" when timezone is absent', () => {
    const result = buildTimezoneText({ utc_offset: '' });
    expect(result).toBe('Unknown');
  });

  it('should handle Malaysia timezone correctly', () => {
    const result = buildTimezoneText({ timezone: 'Asia/Kuala_Lumpur', utc_offset: '+0800' });
    expect(result).toBe('Asia/Kuala_Lumpur (UTC+0800)');
  });
});
