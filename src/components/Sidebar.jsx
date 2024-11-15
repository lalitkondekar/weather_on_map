import WeatherInfo from './WeatherInfo';
import WindInfo from './WindInfo';
import SunInfo from './SunInfo';
import ForecastInfo from './ForecastInfo';

export default function Sidebar({ weather }) {

    const getBackgroundImage = () => {
        const condition = weather?.status?.toLowerCase().replace(" ", "_"); // Convert condition to match image filename format
        return condition ? `/images/weather_backgrounds/${condition}.jpg` : '/images/weather_backgrounds/default.jpg';
    };
  return (
    <div className="flex flex-col w-72 h-full p-4 bg-gray-900 text-white overflow-y-auto border-r-4 border-black rounded-2xl"
    style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
      }}
    >
      <div className='flex-grow'>
        <h1 className="text-center text-2xl font-bold bg-black bg-opacity-50 p-2 rounded-lg backdrop-blur-sm">Weather on Maps</h1>
        {console.log(weather? "weather"+weather :"empty weather")}
        {weather ? (
          
          <div>
            <WeatherInfo weather={weather} />
            <WindInfo wind={weather.wind} />
            <SunInfo sunrise={weather.sunrise} sunset={weather.sunset} />
            <ForecastInfo forecast={weather.forecast} />
          </div>
        ) : (
          <p className="text-center mt-4">Click on a location for weather details</p>
        )}
      </div>
      <div className='bg-black bg-opacity-50 p-2 rounded-lg backdrop-blur-sm'>
        <p className='text-center'>Created by: lalitkondekar</p>
      </div>
      
    </div>
  );
}
