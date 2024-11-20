import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -29.1662,
  lng: -51.5175, // Coordenadas de Bento Gonçalves
};

const MapComponent = ({ locations }) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true); // Marca que o mapa foi carregado
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDnGzZitl8iem0pGLORgkFHnFcgIpVsTQk">
      {mapLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={{
                lat: location.position[0],
                lng: location.position[1],
              }}
              label={location.name}
            />
          ))}
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default MapComponent;
