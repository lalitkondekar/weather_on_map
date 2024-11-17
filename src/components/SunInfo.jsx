import React from 'react';
import { WiDaySunny, WiNightClear } from 'react-icons/wi';

export default function SunInfo({ sunrise, sunset }) {
  const now = Date.now() / 1000; // Current time in seconds
  const isDayTime = now >= sunrise && now <= sunset;

  const totalDaylight = sunset - sunrise;
  const elapsedDaylight = isDayTime ? now - sunrise : 0;
  const sunPosition = isDayTime ? (elapsedDaylight / totalDaylight) * 100 : 0;

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="relative mt-4 bg-black bg-opacity-50 p-4 rounded-xl backdrop-blur-sm text-white">
      <h3 className="text-lg font-semibold text-center mb-4">Sun</h3>
      <div className="relative w-full h-32">
        {/* Semicircle */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 border-4 border-dotted border-b-0 border-white border-opacity-25 rounded-t-full"></div>
        
        {/* Sun or Moon Icon */}
        {isDayTime ? (
          <WiDaySunny
            className="absolute text-yellow-400"
            style={{
              left: `${sunPosition}%`,
              bottom: `${Math.sqrt(1 - Math.pow((sunPosition - 50) / 50, 2)) * 100}%`, // Parabolic curve
              transform: 'translate(-50%, 50%)',
            }}
            size={38}
          />
        ) : (
          <WiNightClear
            className="absolute text-blue-500"
            style={{
              left: '50%',
              bottom: '50%',
              transform: 'translate(-50%, 50%)',
            }}
            size={56}
          />
        )}

        {/* Labels */}
        <p className="absolute left-0 -bottom-2 text-sm">{formatTime(sunrise)}</p>
        <p className="absolute right-0 -bottom-2 text-sm text-right">{formatTime(sunset)}</p>
      </div>
    </div>
  );
}
