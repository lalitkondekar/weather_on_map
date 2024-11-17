import axios from 'axios';


const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeatherData(lat, lon) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return {
    name: response.data.name,
    temp: response.data.main.temp,
    humidity: response.data.main.humidity,
    status: response.data.weather[0].description,
    wind: response.data.wind,
    sunrise: response.data.sys.sunrise,
    sunset: response.data.sys.sunset,
    forecast: { temp: response.data.main.temp + 1, status: response.data.weather[0].description }, // Mock forecast
  };
}
