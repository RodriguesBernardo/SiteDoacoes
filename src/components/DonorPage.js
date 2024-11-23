import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import '../styles/DonorPage.css';
import receptors from '../data/receptors';

const DonorPage = () => {
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  const mapContainerStyle = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = { lat: -29.16575315563083, lng: -51.508511157600175 };

  const institutions = receptors.filter((receptor) => receptor.type === 'receptor');

  return (
    <div className="donor-page">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={13} center={defaultCenter}>
          {institutions.map((institution) => (
            <Marker
              key={institution.id}
              position={institution.location}
              onClick={() => setSelectedInstitution(institution)}
            />
          ))}

          {selectedInstitution && (
            <InfoWindow
              position={selectedInstitution.location}
              onCloseClick={() => setSelectedInstitution(null)}
            >
              <div className="info-window-container">
                <div className="info-window-header">{selectedInstitution.name}</div>
                <div className="info-window-content">
                  <p><strong>Endereço:</strong> {selectedInstitution.address}</p>
                  <p><strong>Necessidades:</strong> {selectedInstitution.goal}</p>
                </div>
                <div className="info-window-buttons">
                  <button onClick={() => alert('Função de doação ainda não implementada!')}>
                    Doar
                  </button>
                  <button
                    className="close-btn"
                    onClick={() => setSelectedInstitution(null)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      <div className="sidebar">
        <h2>Instituições</h2>
        <ul className="institution-list">
          {institutions.map((institution) => (
            <li
              key={institution.id}
              className="institution-item"
              onClick={() => setSelectedInstitution(institution)}
            >
              {institution.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DonorPage;
