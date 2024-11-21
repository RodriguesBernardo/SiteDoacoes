import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import receptors from '../data/receptors'; 
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('doador');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = receptors.find(
      (user) => user.email === email && user.password === password && user.type === userType
    );

    if (user) {
      onLogin(userType);
      navigate('/dashboard');
    } else {
      alert('Credenciais inválidas ou usuário não registrado!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <label>
              <input
                type="radio"
                value="doador"
                checked={userType === 'doador'}
                onChange={(e) => setUserType(e.target.value)}
              />
              Sou Doador
            </label>
            <label style={{ marginLeft: '20px' }}>
              <input
                type="radio"
                value="receptor"
                checked={userType === 'receptor'}
                onChange={(e) => setUserType(e.target.value)}
              />
              Sou Receptor
            </label>
          </div>
          <button className="login-button" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
