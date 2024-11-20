// src/components/Register.js
import React, { useState } from 'react';
import '../styles/Register.css';

const Register = () => {
  const [userType, setUserType] = useState('doador');

  return (
    <div className="register-container">
      <h1>Cadastro</h1>
      <div className="form-group">
        <label>Tipo de usuário:</label>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="doador">Doador</option>
          <option value="receptor">Receptor</option>
        </select>
      </div>
      {userType === 'doador' ? (
        <>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" placeholder="Digite seu nome" />
          </div>
          <div className="form-group">
            <label>CPF:</label>
            <input type="text" placeholder="Digite seu CPF" />
          </div>
        </>
      ) : (
        <>
          <div className="form-group">
            <label>Nome do Local:</label>
            <input type="text" placeholder="Digite o nome do local" />
          </div>
          <div className="form-group">
            <label>CNPJ:</label>
            <input type="text" placeholder="Digite o CNPJ" />
          </div>
        </>
      )}
      <button>Cadastrar</button>
    </div>
  );
};

export default Register;
