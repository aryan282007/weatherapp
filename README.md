# 🌤️ Weather App

A modern, responsive weather application built with React + Vite that provides real-time weather information with dynamic UI based on temperature and weather conditions.

## Features

- 🔍 **City Search** - Search weather by city name
- 🌡️ **Temperature-Based Imagery** - Dynamic background images that change based on temperature ranges
- 🎨 **MUI Icons** - Weather-specific icons with color coding:
  - ❄️ Snowflake (< 10°C)
  - ☁️ Cloud (10-35°C)
  - ☀️ Sun (25-35°C)
  - 🔥 Fire (> 35°C)
  - 💧 Water droplet (Rain detected)
- 📍 **Location Details** - Displays city, country, coordinates, and timezone
- 🌬️ **Weather Data** - Real-time temperature, wind speed, and weather conditions
- ⚡ **No API Key Required** - Uses Open-Meteo free weather API
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ✨ **Clean UI** - Material-UI components for professional look

## Temperature Image Ranges

| Temperature | Image Theme |
|-------------|-------------|
| < 0°C | Snow/Winter |
| 0-10°C | Cold Winter |
| 10-15°C | Cool Fall |
| 15-25°C | Mild Spring |
| 25-35°C | Warm Sunny |
| > 35°C | Very Hot |
| Rain | Rain Scene |

## Tech Stack

- **Frontend**: React 19.2.5
- **Build Tool**: Vite 8.0.10
- **UI Framework**: Material-UI (MUI) 9.0.1
- **Icons**: MUI Icons Material 9.0.1
- **Styling**: CSS + MUI sx prop
- **API**: Open-Meteo Weather API (free, no key needed)
- **Package Manager**: npm

## Project Structure

```
src/
├── component/
│   ├── searchBox.jsx        # Search form & main logic
│   ├── weatherinfo.jsx      # Weather display card with icons
│   └── weather.js           # API call handler
├── componentCss/
│   ├── SearchBox.css        # Search box styling
│   └── card-box.css         # Weather card styling
├── App.jsx                  # Main app component
├── App.css                  # App styling
├── main.jsx                 # React entry point
└── index.css                # Global styles
.env                         # Environment variables (API URLs)
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone/Download the project:**
   ```bash
   cd "c:\Users\lenovo\OneDrive\Desktop\coding shit\webdev\react-basic\mini-project-React"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

## Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Environment Variables

Create a `.env` file in the project root (already included):

```
VITE_GEO_API_URL=https://geocoding-api.open-meteo.com/v1/search
VITE_FORECAST_API_URL=https://api.open-meteo.com/v1/forecast
```

## How to Use

1. **Enter a city name** in the search box
2. **Click "Search"** button
3. The app fetches weather data and displays:
   - Background image matching the temperature
   - Weather icon with appropriate color
   - Temperature, wind speed, and weather details
   - Location coordinates and timezone

## API Details

### Open-Meteo Weather API
- **Geocoding API** - Converts city names to coordinates
- **Forecast API** - Gets current weather data
- **Free tier** - No authentication required
- **Response includes**: Temperature, wind speed, weather code, time

## Dependencies

### Production
- `react` - UI library
- `react-dom` - React DOM rendering
- `@mui/material` - Material-UI components
- `@mui/icons-material` - Material Design icons
- `@emotion/react` - CSS-in-JS styling
- `@emotion/styled` - Styled components for MUI
- `@fontsource/roboto` - Roboto font for MUI
- `dotenv` - Environment variable management

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `eslint` - Code linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Popular Platforms

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Netlify**
- Connect your GitHub repo to Netlify
- Set build command: `npm run build`
- Set publish directory: `dist`

**GitHub Pages**
- Update `vite.config.js` with base path
- Push to GitHub
- Enable Pages in repository settings

**Other Options**: Heroku, Firebase, AWS, DigitalOcean

## Known Limitations

- Weather data updates with new search (not real-time polling)
- Images are external URLs (requires internet connection)
- Some cities may not be found if name format doesn't match API database

## Future Enhancements

- [ ] 7-day forecast
- [ ] Hourly weather breakdown
- [ ] Wind direction indicator
- [ ] Humidity display
- [ ] UV index
- [ ] Local storage for favorite cities
- [ ] Dark/Light theme toggle
- [ ] Weather alerts
- [ ] Geolocation auto-detect

## Troubleshooting

### "City not found" error
- Check spelling of city name
- Try with just the city name (not including state/country)
- Some smaller cities may not be in the database

### Images not loading
- Check internet connection
- Unsplash links should be accessible globally
- Clear browser cache

### Icons not displaying
- Ensure `@mui/icons-material` is installed: `npm install`
- Restart dev server: `npm run dev`

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Author

Created as a React weather application mini-project using Vite and Material-UI.

## Support

For issues or questions, check the Open-Meteo documentation:
- [Open-Meteo Docs](https://open-meteo.com/en/docs)
- [MUI Documentation](https://mui.com/)
