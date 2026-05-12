import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import OpacityIcon from '@mui/icons-material/Opacity';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import "../componentCss/card-box.css";

// Function to get weather icon based on temperature and weather code
const getWeatherIcon = (temperature, weatherCode) => {
  const rainCodes = [51, 53, 55, 61, 63, 65, 80, 81, 82];
  if (rainCodes.includes(weatherCode)) {
    return <OpacityIcon sx={{ fontSize: 50, color: '#2196F3' }} />;
  } else if (temperature < 0) {
    return <AcUnitIcon sx={{ fontSize: 50, color: '#00BCD4' }} />;
  } else if (temperature < 10) {
    return <AcUnitIcon sx={{ fontSize: 50, color: '#1976D2' }} />;
  } else if (temperature < 15) {
    return <CloudIcon sx={{ fontSize: 50, color: '#9C27B0' }} />;
  } else if (temperature < 25) {
    return <CloudIcon sx={{ fontSize: 50, color: '#4CAF50' }} />;
  } else if (temperature < 35) {
    return <WbSunnyIcon sx={{ fontSize: 50, color: '#FFC107' }} />;
  } else {
    return <WhatshotIcon sx={{ fontSize: 50, color: '#F44336' }} />;
  }
};

// Function to get image based on temperature and weather code
const getWeatherImage = (temperature, weatherCode) => {
  // Rain weather codes: 51, 53, 55 (drizzle), 61, 63, 65, 80, 81, 82 (rain)
  const rainCodes = [51, 53, 55, 61, 63, 65, 80, 81, 82];
  if (rainCodes.includes(weatherCode)) {
    // Rain
    return "https://plus.unsplash.com/premium_photo-1687418992343-38c7d2751406?q=80&w=1150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else if (temperature < 0) {
    // Very cold / Snow
    return "https://images.unsplash.com/photo-1476108621677-3c620901b5e7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else if (temperature < 10) {
    // Cold / Winter
    return "https://images.unsplash.com/photo-1476108621677-3c620901b5e7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else if (temperature < 15) {
    // Cool / Fall
    return "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else if (temperature < 25) {
    // Mild / Spring
    return "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else if (temperature < 35) {
    // Warm / Sunny
    return "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else {
    // Very hot
    return "https://images.unsplash.com/photo-1658349794601-d824c1ce5f6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
};

export default function WeatherInfo({ weather }) {
  if (!weather) {
    return (
      <div className="Weather-info">
        <h2>Weather Information</h2>
        <p>Search a city to view the latest weather card.</p>
      </div>
    );
  }

  return (
    <div className="Weather-info">
      <h2>Weather Information</h2>
      <div className='card-fix'>
      <Card sx={{ maxWidth: 345, marginTop: 2 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={getWeatherImage(weather.temperature, weather.weather_code)}
          title="Weather"
        />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            {getWeatherIcon(weather.temperature, weather.weather_code)}
          </Box>
          <Typography gutterBottom variant="h5" component="div">
            {weather.city}{weather.country ? `, ${weather.country}` : ''}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Temperature: {weather.temperature ?? 'N/A'} °C
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Wind speed: {weather.windspeed ?? 'N/A'} km/h
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Weather code: {weather.weather_code ?? 'N/A'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Time: {weather.time ?? 'N/A'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 1 }}>
            Lat/Lon: {weather.latitude ?? 'N/A'}, {weather.longitude ?? 'N/A'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Timezone: {weather.timezone ?? 'N/A'}
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
