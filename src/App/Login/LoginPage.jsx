import { LoginForm } from './LoginForm';
import './LoginPage.css';

function LoginPage(){
  return(
    <div className="page-container">
      <h1>IES 6021</h1>
      <span>Sistema de Gestión de alumnos</span>
      <LoginForm/>
    </div>
  )
}

export { LoginPage };