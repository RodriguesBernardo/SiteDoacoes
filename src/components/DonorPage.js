import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import '../styles/DonorPage.css';

const receptors = [
  {
    id: 1,
    name: 'Lar da Caridade',
    address: 'R. Júlio de Castilhos, 856 - Centro, Bento Gonçalves - RS, 95700-072',
    location: { lat: -29.16575315563083, lng: -51.508511157600175 },
    goal: 'Alimentos não perecíveis, roupas, itens de higiene pessoal',
  },
  {
    id: 2,
    name: 'Fundação Consepro',
    address: 'Sala 11C - Andar 1 Rua Avelino Luiz Zat - Fenavinho, Bento Gonçalves - RS, 95700-000',
    location: { lat: -29.167987622095065, lng: -51.49197639308764 },
    goal: 'Material escolar, livros, itens de informática',
  },
  {
    id: 3,
    name: 'Associação Anjos Unidos',
    address: 'Linha Palmeiro - Distrito de - Rodovia, VRS 855, 3973 - São Pedro, Bento Gonçalves - RS, 95700-000',
    location: { lat: -29.16359420050435, lng: -51.502454089478114 },
    goal: 'Tampinhas plásticas, lacres, alimentos e itens de higiene.',
  },
];

const DonorPage = () => {
  const [selectedReceptor, setSelectedReceptor] = useState(null);

  const mapContainerStyle = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = { lat: -29.1671, lng: -51.5177 };

  return (
    <div className="donor-page">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={13} center={defaultCenter}>
          {receptors.map((receptor) => (
            <Marker
              key={receptor.id}
              position={receptor.location}
              onClick={() => setSelectedReceptor(receptor)}
            />
          ))}

          {selectedReceptor && (
            <InfoWindow
              position={selectedReceptor.location}
              onCloseClick={() => setSelectedReceptor(null)}
            >
              <div>
                <h3>{selectedReceptor.name}</h3>
                <p>
                  <strong>Endereço:</strong> {selectedReceptor.address}
                </p>
                <p>
                  <strong>Necessidades:</strong> {selectedReceptor.goal}
                </p>
              </div>
            </InfoWindow>
          )}
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
    </div>
  );
};

export default DonorPage;
