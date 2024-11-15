# Weather on Maps 🌍

**Weather on Maps** is a Progressive Web Application (PWA) that visualizes real-time weather data on an interactive map. Built with React, Vite, and Tailwind CSS, the app combines the power of OpenWeather API and Leaflet.js for an engaging user experience.

---

## Features 🚀
- 🌦 **Real-time Weather**: Fetch and display current weather information based on location.
- 🗺 **Interactive Map**: Explore weather data using a dynamic Leaflet.js-powered map.
- 📱 **Responsive Design**: Optimized for both desktop and mobile views.
- 🎨 **Weather-Themed Sidebar**: The sidebar background adapts based on weather conditions.
- 🖼 **Customizable Themes**: Easily add new weather themes using background images.

---

## Demo 🎉
coming soon...

---

## Tech Stack 🛠️
- **Frontend Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Mapping**: [Leaflet.js](https://leafletjs.com/)
- **API**: [OpenWeather](https://openweathermap.org/api)

---

## Installation 🛠️

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-on-maps.git
   cd weather-on-maps
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeather API key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:3000`.

---

## Project Structure 📂
```
weather-on-maps/
├── public/
│   ├── images/                # Background images for weather conditions
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx        # Main sidebar component
│   │   ├── WeatherInfo.jsx    # Weather information component
│   │   ├── WindInfo.jsx       # Wind details component
│   │   ├── SunInfo.jsx        # Sunrise and sunset component
│   │   └── ForecastInfo.jsx   # Mock forecast component
│   ├── App.jsx                # Main app component
│   └── index.css              # Tailwind CSS styles
├── .env                       # Environment variables (not included in version control)
├── package.json               # Project dependencies and scripts
```

---

## Usage ✨
- Launch the app and click on any location on the map to fetch weather details.
- The sidebar will display:
  - Current weather condition and temperature
  - Humidity and wind details
  - Sunrise and sunset times
  - A mock weather forecast (for demonstration)

---

## Future Plans 🛠️
- Add multi-day forecasts using OpenWeather's forecast API.
- Implement user-authored notes for locations.
- Enhance the mobile layout with gesture controls.

---


## Author ✍️
Created by **Lalit Kondekar**.  
Feel free to reach out for questions or collaborations!

```

### Instructions:
1. Replace **`yourusername`** in the clone link with your GitHub username.
2. Add your OpenWeather API key where indicated.
3. Replace **`[Insert your live demo link here]** and the placeholder links under "Author" with real URLs if applicable.
