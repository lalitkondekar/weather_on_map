export default function ForecastInfo({ forecast }) {
    return (
      <div className="mt-4 bg-black bg-opacity-50 p-2 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm font-semibold">Forecast</h3>
        <p>Temperature: {forecast.temp}°C</p>
        <p>Status: {forecast.status}</p>
      </div>
    );
  }
  