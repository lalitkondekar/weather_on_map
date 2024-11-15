export default function SunInfo({ sunrise, sunset }) {
    return (
      <div className="mt-4 bg-black bg-opacity-50 p-2 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm font-semibold">Sun</h3>
        <p>Sunrise: {new Date(sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(sunset * 1000).toLocaleTimeString()}</p>
      </div>
    );
  }
  