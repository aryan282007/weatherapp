import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../componentCss/SearchBox.css"
import Weather from "./weather.js";
import WeatherInfo from "./weatherinfo.jsx";

export default function SearchBox() {
  let [city, setCity] = useState("");
  let [weatherResult, setWeatherResult] = useState(null);
  let [error, setError] = useState(null);

  let handleSearch = (e) => {
    setCity(e.target.value)
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      let weatherData = await Weather(city);
      setCity("");

      if (!weatherData || !weatherData.current_weather) {
        throw new Error('Weather data is unavailable for this location.');
      }

      let result = {
        city: weatherData.city || city,
        country: weatherData.country,
        timezone: weatherData.timezone,
        latitude: weatherData.latitude,
        longitude: weatherData.longitude,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        weather_code: weatherData.current_weather.weathercode || weatherData.current_weather.weather_code,
        time: weatherData.current_weather.time
      }

      setWeatherResult(result);
      console.log(result);
    } catch (err) {
      setWeatherResult(null);
      setError(err.message || "Failed to fetch weather data. Please try again.");
      console.error(err);
    }
  };
   
  return (
    <div className="search-box">
      <h1>Search For The Weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="city-name" 
          label="City Name" 
          variant="standard" 
          value={city}
          onChange={handleSearch}
          required
          style={{backgroundColor : "#62b4cf",borderRadius : "15px"}}
        />
        <br /><br />
       <Button variant="contained" type="submit">
        Search
      </Button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      <WeatherInfo weather={weatherResult} />
      </div>
  )
}