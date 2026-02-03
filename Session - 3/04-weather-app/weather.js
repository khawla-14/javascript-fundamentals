// API Configuration
const API_KEY = '7dd1a119c9771ee15ca268f877332a89';// Get from openweathermap.org
// Or use: 'demo' for testing (limited)

// Select elements
const cityInput = document.querySelector('#cityInput');
const searchButton = document.querySelector('#searchButton');
const loading = document.querySelector('#loading');
const error = document.querySelector('#error');
const weatherInfo = document.querySelector('#weatherInfo');
// Weather display elements
const cityName = document.querySelector('#cityName');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const feelsLike = document.querySelector('#feelsLike');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#windSpeed');
const pressure = document.querySelector('#pressure');
 
// Fetch weather data
async function getWeather() {
    const city = cityInput.value.trim();
    
   // Validate input
    if (!city) {
        showError('Please enter a city name');
        return;
    }
    
   // Show loading
    loading.style.display = 'block';
    weatherInfo.style.display = 'none';
    error.style.display = 'none';
    
    try {
       // Build API URL
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        
       // Fetch data
        const response = await fetch(url);
        
       // Check if city was found
        if (response.status === 404) {
            throw new Error('City not found');
        }
        
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();
        
       // Hide loading
        loading.style.display = 'none';
        
       // Display weather data
        displayWeather(data);
        
    } catch (err) {
        loading.style.display = 'none';
        showError(err.message);
    }
}

// Display weather information
function displayWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed} m/s`;
    pressure.textContent = `${data.main.pressure} hPa`;
    
    weatherInfo.style.display = 'block';
}

// Show error message
function showError(message) {
    error.textContent = message;
    error.style.display = 'block';
}

// Event listeners
searchButton.addEventListener('click', getWeather);

// Search on Enter key
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather();
    }
});
