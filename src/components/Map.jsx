import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Required to load Leaflet styles
import { useNavigate } from 'react-router-dom';

const Map = () => {
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const [data,setData] = useState({})

  useEffect(() => {
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13); // Default location (London)

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Set up a click event on the map
    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      setCoordinates({ lat, lon: lng });
    });
  }, []);

  const Navigater = () => {
    // Access coordinates from state
    const { lat, lon } = coordinates;

    if (lat && lon) {
      const fetchedData = fetch('https://cropx-backend.onrender.com/intelligence/weather-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lat, lon }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Server response:', data);
          navigate('/MapML'); // Navigate after the request
        })
        .catch((error) => console.error('Error:', error));
        setData(fetchedData)
        
    } else {
      alert('Please click on the map to select coordinates!');
    }
    navigate("/MapML")
    
    
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      {/* Map container */}
      <div
        ref={mapRef}
        className="w-full sm:w-96 h-96 rounded-lg shadow-lg border border-gray-200"
      ></div>

      {/* Coordinates display */}
      <div className="p-4 bg-white shadow-md rounded-lg w-full sm:w-3/4 md:w-1/2">
        {coordinates.lat && coordinates.lon ? (
          <p className="text-lg font-semibold text-gray-700">
            Latitude: {coordinates.lat}, Longitude: {coordinates.lon}
          </p>
        ) : (
          <p className="text-sm text-gray-500">Click on the map to get coordinates</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={Navigater}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Submit
      </button>
    </div>
  );
};

export default Map;

