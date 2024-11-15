import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import Sidebar from './components/Sidebar';
import { getWeatherData } from './services/weatherService';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


// Custom icon for the location marker
const locationIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/252/252025.png', // Custom marker icon URL
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

export default function App() {
  const [weather, setWeather] = useState(null);
  const [mapCenter, setMapCenter] = useState([20, 0]); // Default center for the map
  const [zoomLevel, setZoomLevel] = useState(3); // Default zoom level
  const [markerPosition, setMarkerPosition] = useState(null); // Position of the marker

  // Fetch weather and set map center/zoom for the user's current location on load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter([latitude, longitude]);
          setMarkerPosition([latitude, longitude]); // Set initial marker position
          setZoomLevel(10); // Set zoom level to focus on the current location

          // Fetch and set weather data for the current location
          const data = await getWeatherData(latitude, longitude);
          console.log("data in app:",JSON.stringify(data,null,2))
          setWeather(data);
        },
        (error) => {
          console.error("Error fetching geolocation:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const LocationHandler = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat, lng]); // Update marker position on map click
        const data = await getWeatherData(lat, lng);
        setWeather(data);
      },
    });
    return null;
  };
  {console.log("weather in app"+weather)}
  return (
    <div className="flex h-screen">
      {/* Sidebar with fixed width */}
      <div className="w-72 bg-gray-900 text-white overflow-y-auto">
        <Sidebar weather={weather} />
      </div>

      {/* Map container takes the remaining space next to sidebar */}
      <div className="flex-1 relative">
        <MapContainer
          className="w-full h-full"
          center={mapCenter}
          zoom={zoomLevel}               // Use dynamic zoom level
          minZoom={2}
          maxZoom={18}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          
          {/* Marker at the selected location */}
          {markerPosition && (
            <Marker position={markerPosition} icon={locationIcon}>
              <Popup>
                <div>
                  <h2 className="font-semibold">{weather?.name || "Selected Location"}</h2>
                  <p>{weather ? `Temperature: ${weather.temp}°C` : "Loading weather..."}</p>
                </div>
              </Popup>
            </Marker>
          )}

          <LocationHandler />
        </MapContainer>
      </div>
    </div>
  );
}
