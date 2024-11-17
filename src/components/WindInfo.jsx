import { MdOutlineSpeed } from "react-icons/md";
import { IoCompassOutline } from "react-icons/io5";


export default function WindInfo({ wind }) {
    return (
      <div className="mt-4 bg-black bg-opacity-50 p-3 rounded-xl backdrop-blur-sm">
        <h3 className="text-lg font-semibold">Wind</h3>
        <p className="flex items-center mt-2"><MdOutlineSpeed size={28} className="mr-2"/> {wind.speed} m/s</p>
        <p className="flex items-center mt-1"><IoCompassOutline size={28} className="mr-2"/> {wind.deg}°</p>
      </div>
    );
  }
  