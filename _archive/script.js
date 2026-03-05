// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    
    const dateTimeString = now.toLocaleString(undefined, options);
    document.getElementById('datetime').textContent = dateTimeString;
}

// Function to get location information from IP
async function getLocationInfo() {
    try {
        // Using ipapi.co free API for geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.city && data.country_name) {
            document.getElementById('location').textContent = 
                `📍 Location: ${data.city}, ${data.region}, ${data.country_name}`;
            document.getElementById('timezone').textContent = 
                `🕐 Timezone: ${data.timezone} (UTC${data.utc_offset})`;
        } else {
            document.getElementById('location').textContent = 
                '📍 Location: Unable to detect';
            document.getElementById('timezone').textContent = 
                `🕐 Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
        }
    } catch (error) {
        console.error('Error fetching location:', error);
        document.getElementById('location').textContent = 
            '📍 Location: Unable to detect';
        document.getElementById('timezone').textContent = 
            `🕐 Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
    }
}

// Initialize
updateDateTime();
getLocationInfo();

// Update time every second
setInterval(updateDateTime, 1000);
