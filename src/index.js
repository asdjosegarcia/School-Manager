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
import FieldHistoryPage from './App/FieldHistoryPage/FieldHistoryPage';
import ProfilePage from './App/Profile/ProfilePage';
import SelectFieldPage from './App/SelectField/SelectFieldPage';
import HelpPage from './App/Help/HelpPage';
import NotificationPage from './App/Notification/NotificationPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={< RegistePage/>} />
        <Route path="/exams" element={< ExamsPage/>} />
        <Route path="/select-field" element={< SelectFieldPage/>} />
        <Route path="/join-field" element={< JoinFieldPage/>} />
        <Route path="/field-history" element={< FieldHistoryPage/>} />
        <Route path="/profile" element={< ProfilePage/>} />
        <Route path="/help" element={< HelpPage/>} />
        <Route path="/notifications" element={< NotificationPage/>} />


        





        {/* Otras rutas pueden ir aquí */}
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
