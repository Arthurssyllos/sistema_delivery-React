import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json');
        setLocation(response.data);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      {location ? (
        <div>
          <p>Entrega em: {location.city}, {location.region}</p>
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default LocationComponent;
