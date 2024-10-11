import React, { useState } from 'react';
import '../../Styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podés añadir la lógica para manejar el login
    console.log('Usuario:', username);
    console.log('Password:', password);
  };

  return (
    <div className="page-container">
      <div>
        <h1>IES 6021</h1>
        <p>Sistema de gestión de alumnos</p>
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Iniciar Sesión</h2>
          <input
            type="text"
            value={username}
            placeholder='Usuario'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            placeholder='Contraseña'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;