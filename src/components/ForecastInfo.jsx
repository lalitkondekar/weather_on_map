import { LiaTemperatureLowSolid } from "react-icons/lia";
import { roundToTwoDecimals } from "../methods/conversionMethods";
import {
  WiDaySunny,
  WiCloud,
  WiCloudy,
  WiRain,
  WiRainWind,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiDayHaze,
  WiDust,
  WiShowers,
  WiTornado
} from 'react-icons/wi';

const getWeatherIcon = (weatherStatus) => {
  const weatherMap = {
    'clear sky': WiDaySunny,
    'few clouds': WiCloud,
    'scattered clouds': WiCloud,
    'broken clouds': WiCloudy,
    'overcast clouds': WiCloudy,
    'light rain': WiRain,
    'moderate rain': WiRain,
    'heavy rain': WiRainWind,
    'thunderstorm': WiThunderstorm,
    'snow': WiSnow,
    'mist': WiFog,
    'fog': WiFog,
    'haze': WiDayHaze,
    'dust': WiDust,
    'drizzle': WiShowers,
    'tornado': WiTornado,
  };

  // Normalize the input to lowercase and trim any whitespace
  const normalizedStatus = weatherStatus?.toLowerCase().trim();

  // Fallback to a default icon if no match is found
  return weatherMap[normalizedStatus] || WiDaySunny;
};

export default function ForecastInfo({ forecast }) {

  const Icon = getWeatherIcon(forecast.status);

    return (
      <div className="mt-4 bg-black bg-opacity-50 p-3 rounded-xl backdrop-blur-sm">
        <h3 className="text-lg font-semibold">Forecast (Tomarrow)</h3>
        <p className="flex items-center mt-2"><LiaTemperatureLowSolid size={28} color="#ffffff" className="mr-2"/> {roundToTwoDecimals(forecast.temp)}°C</p>
        <p className="flex items-center mt-1"><Icon size={28} color="#FFFFFF" className="mr-2"/> {forecast.status}</p>
      </div>
    );
  }
  