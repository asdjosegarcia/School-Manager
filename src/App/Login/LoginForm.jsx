import React, { useState } from 'react';

function LoginForm(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí podés añadir la lógica para manejar el login
      console.log('Usuario:', username);
      console.log('Password:', password);
    };

    return(
        <React.Fragment>
        <div  className='login-container'>
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
        </React.Fragment>
    );
}
export { LoginForm };