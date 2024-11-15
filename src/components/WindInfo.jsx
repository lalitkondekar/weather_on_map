export default function WindInfo({ wind }) {
    return (
      <div className="mt-4 bg-black bg-opacity-50 p-2 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm font-semibold">Wind</h3>
        <p>Speed: {wind.speed} m/s</p>
        <p>Direction: {wind.deg}°</p>
      </div>
    );
  }
  