import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Sistema de Doações</h1>
      <button className="home-button" onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  );
};

export default Home;
