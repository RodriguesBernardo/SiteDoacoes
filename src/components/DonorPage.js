import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/DonorPage.css';

const receptors = [
  {
    id: 1,
    name: 'Lar da Caridade',
    address: 'Rua Júlio de Castilhos, 856, Centro, Bento Gonçalves - RS',
    location: { lat: -29.1671, lng: -51.5177 },
    goal: 'Alimentos não perecíveis, roupas, itens de higiene pessoal',
  },
  {
    id: 2,
    name: 'Fundação Consepro',
    address: 'Rua 13 de Maio, 50, Centro, Bento Gonçalves - RS',
    location: { lat: -29.1685, lng: -51.5189 },
    goal: 'Material escolar, livros, itens de informática',
  },
  {
    id: 3,
    name: 'Cáritas Bento Gonçalves',
    address: 'Rua Marechal Deodoro, 35, Centro, Bento Gonçalves - RS',
    location: { lat: -29.1658, lng: -51.5164 },
    goal: 'Cobertores, utensílios de cozinha, brinquedos',
  },
];

const DonorPage = () => {
  const [selectedReceptor, setSelectedReceptor] = useState(null);

  const mapContainerStyle = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = { lat: -29.1671, lng: -51.5177 };

  const handleMouseOver = (marker, e) => {
    if (window.google && window.google.maps) {
      marker.setIcon({
        url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        scaledSize: new window.google.maps.Size(40, 40),
      });
    }
  };

  const handleMouseOut = (marker, e) => {
    if (window.google && window.google.maps) {
      marker.setIcon({
        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        scaledSize: new window.google.maps.Size(30, 30),
      });
    }
  };

  return (
    <div className="donor-page">
      <LoadScript googleMapsApiKey="AIzaSyDnGzZitl8iem0pGLORgkFHnFcgIpVsTQk">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={defaultCenter}
        >
          {receptors.map((receptor) => (
            <Marker
              key={receptor.id}
              position={receptor.location}
              onClick={() => setSelectedReceptor(receptor)}
              icon={{
                url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                scaledSize: window.google?.maps
                  ? new window.google.maps.Size(30, 30)
                  : null, 
              }}
              onMouseOver={(e) => handleMouseOver(e, receptor)}
              onMouseOut={(e) => handleMouseOut(e, receptor)}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      <div className="sidebar">
        <h2>Instituições</h2>
        <ul className="receptor-list">
          {receptors.map((receptor) => (
            <li
              key={receptor.id}
              className="receptor-item"
              onClick={() => setSelectedReceptor(receptor)}
            >
              {receptor.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedReceptor && (
        <div className="details-panel">
          <h3>{selectedReceptor.name}</h3>
          <p>
            <strong>Endereço:</strong> {selectedReceptor.address}
          </p>
          <p>
            <strong>Necessidades:</strong> {selectedReceptor.goal}
          </p>
          <button className="donate-button">Doar</button>
          <button
            className="close-button"
            onClick={() => setSelectedReceptor(null)}
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default DonorPage;
