import { IoLocationOutline } from "react-icons/io5";
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
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { WiHumidity } from "react-icons/wi";
import { roundToTwoDecimals } from "../methods/conversionMethods";


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

export default function WeatherInfo({ weather }) {

  const Icon = getWeatherIcon(weather.status);

    return (
      <div className=" bg-black bg-opacity-50 p-3 rounded-xl mt-4 backdrop-blur-sm">
        <h2 className=" text-xl font-semibold w-full text-center mb-4 flex items-center"><IoLocationOutline size={32} color="#FFFFFF" className="mr-1"/> {weather.name? weather.name : "Unknown Location"}</h2>
        <p className="flex items-center text-lg"><Icon size={32} color="#FFFFFF" className="mr-1"/> {weather.status}</p>
        <p className="flex items-center text-lg"><LiaTemperatureLowSolid size={32} color="#FFFFFF" className="mr-1"/> {roundToTwoDecimals(weather.temp)}°C</p>
        <p className="flex items-center text-lg"><WiHumidity size={32} color="#FFFFFF" className="mr-1"/> {weather.humidity}%</p>
      </div>
    );
  }
  