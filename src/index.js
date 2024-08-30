import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './App/Home/HomePage';
import LoginPage from './App/Login/LoginPage';
import RegistePage from './App/Register/RegisterPage';
import ExamsPage from './App/Exams/ExamsPage';
import JoinFieldPage from './App/JoinField/JoinFieldPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={< RegistePage/>} />
        <Route path="/exams" element={< ExamsPage/>} />
        <Route path="/join-field" element={< JoinFieldPage/>} />




        {/* Otras rutas pueden ir aquí */}
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
