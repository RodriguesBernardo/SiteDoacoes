import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapComponent = ({ locations }) => {
  const [selectedReceptor, setSelectedReceptor] = useState(null);

  const mapContainerStyle = {
    height: '400px', 
    width: '100%', 
  };


  const defaultCenter = { lat: -23.55052, lng: -46.633308 }; 

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={selectedReceptor?.location || defaultCenter} 
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            onClick={() => setSelectedReceptor(location)} 
          />
        ))}

        {selectedReceptor && (
          <InfoWindow
            position={selectedReceptor.position}
            onCloseClick={() => setSelectedReceptor(null)}
          >
            <div>
              <h4>{selectedReceptor.name}</h4>
              <p>
                <strong>Necessidades:</strong> {selectedReceptor.goal}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
