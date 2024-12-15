import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './App/Home/HomePage';
import { LoginPage } from './App/Login/LoginPage';
import RegistePage from './App/Register/RegisterPage';
import ExamsPage from './App/Exams/ExamsPage';
import JoinFieldPage from './App/JoinField/JoinFieldPage';
import FieldHistoryPage from './App/FieldHistoryPage/FieldHistoryPage';
import ProfilePage from './App/Profile/ProfilePage';
import SelectFieldPage from './App/SelectField/SelectFieldPage';
import HelpPage from './App/Help/HelpPage';
import NotificationPage from './App/Notification/NotificationPage';
import MStudentsPage from './App/Management/Students/MStudentsPage';
import MSubjectsPage from './App/Management/Subject/MSubjectsPage';
import MSubjectPageByIdPageById from './App/Management/Subject/[id]/MSubjectPageById';
import MExamsPage from './App/Management/Exams/MExamsPage';
import MNewExamPage from './App/Management/Exams/New/MNewExamPage';
import MExamPageById from './App/Management/Exams/[id]/MExamPageById';
import MProfesorsPage from './App/Management/Professors/MProfesorsPage';
import MProfesorsPageById from './App/Management/Professors/[id]/MProfesorsPageById';
import MNewStudentPage from './App/Management/Students/New/MNewStudentPage';
import MProfileById from './App/Management/Profile/[id]/MProfileById';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={< RegistePage />} />
        <Route path="/exams" element={< ExamsPage />} />
        <Route path="/select-field" element={< SelectFieldPage />} />
        <Route path="/join-field" element={< JoinFieldPage />} />
        <Route path="/field-history" element={< FieldHistoryPage />} />
        <Route path="/profile" element={< ProfilePage />} />
        <Route path="/help" element={< HelpPage />} />
        <Route path="/notifications" element={< NotificationPage />} />

        {/* Management///////////////////////////////////////////////////////////////// */}
        <Route path="/management" element={< MStudentsPage />} />
        <Route path="/management/students" element={< MStudentsPage />} />
        <Route path="/management/students/new" element={< MNewStudentPage />} />


        <Route path="/management/exams" element={< MExamsPage />} />
        <Route path="/management/exams/new" element={< MNewExamPage />} />
        <Route path="/management/exams/:id" element={< MExamPageById />} />

        <Route path="/management/subjects" element={< MSubjectsPage />} />
        <Route path="/management/subjects/:id" element={< MSubjectPageByIdPageById />} />

        <Route path="/management/professors/" element={<MProfesorsPage/>} />
        <Route path="/management/professors/:id" element={< MProfesorsPageById />} />

        <Route path="/management/profile/:id" element={<MProfileById/>} />







        {/* <Route path="/management/students" element={< StudentsPage/>} /> */}














        {/* Otras rutas pueden ir aquí */}
      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
