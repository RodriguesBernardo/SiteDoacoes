import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import DonorPage from './components/DonorPage';
import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donor-dashboard" element={<DonorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
