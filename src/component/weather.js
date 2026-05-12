
export default function Weather(city) {
    let getWeather = async () => {
       const GEO_API_URL = import.meta.env.VITE_GEO_API_URL;
       const FORECAST_API_URL = import.meta.env.VITE_FORECAST_API_URL;
       
        try {
            // First, get coordinates from city name using Open-Meteo geocoding API
            const geoResponse = await fetch(`${GEO_API_URL}?name=${city}&count=1&language=en&format=json`);
            const geoData = await geoResponse.json();
            
            if (!geoData.results || geoData.results.length === 0) {
                throw new Error('City not found');
            }
            
            const { latitude: lat, longitude: lon, name, country } = geoData.results[0];
            
            // Fetch weather data from Open-Meteo API (no API key needed)
            const response = await fetch(`${FORECAST_API_URL}?latitude=${lat}&longitude=${lon}&current_weather=true`);
            const data = await response.json();
            
            return {
                city: name || city,
                country: country || null,
                latitude: lat,
                longitude: lon,
                timezone: data.timezone,
                current_weather: data.current_weather,
            };
        } catch (error) {
            console.error('Error fetching weather data:', error);
            return null;
        }

}
return getWeather(city);
}