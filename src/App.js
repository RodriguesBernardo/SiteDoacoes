import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import DonorPage from './components/DonorPage';
import ReceiverDashboard from './components/ReceiverDashboard';
import 'leaflet/dist/leaflet.css';

const App = () => {
  const [userType, setUserType] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={setUserType} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            userType === 'doador' ? <DonorPage /> : <ReceiverDashboard />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
