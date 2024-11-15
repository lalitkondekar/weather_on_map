export default function WeatherInfo({ weather }) {
    return (
      <div className=" bg-black bg-opacity-50 p-2 rounded-lg mt-4 backdrop-blur-sm">
        <h2 className=" text-xl font-semibold mt-4 w-full text-center mb-4">{weather.name}</h2>
        <p>Status: {weather.status}</p>
        <p>Temperature: {weather.temp}°C</p>
        <p>Humidity: {weather.humidity}%</p>
      </div>
    );
  }
  