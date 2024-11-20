import React from 'react';
import receptors from '../data/receptors'; // Importando o arquivo de receptores
import MapComponent from './MapComponent';
import '../styles/DonorPage.css';

const DonorPage = () => {
  // Mapeando os receptores para adicionar informações relevantes ao mapa
  const mapLocations = receptors.map((receptor) => ({
    id: receptor.id,
    name: receptor.name,
    position: receptor.location, // [latitude, longitude]
    needs: receptor.goal,
  }));

  return (
    <div className="donor-page">
      <h1>Mapa de Receptores - Bento Gonçalves, RS</h1>
      <div className="map-container">
        {/* Passando as localizações para o componente MapComponent */}
        <MapComponent locations={mapLocations} />
      </div>
      <ul>
        {receptors.map((receptor) => (
          <li key={receptor.id}>
            <h3>{receptor.name}</h3>
            <p><strong>Necessidades:</strong> {receptor.goal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorPage;
