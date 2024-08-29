import React from 'react'
import './ExamCard.css'
import MainButton from '../Buttons/MainButton'
import CheckSVG from '../../SVG/CheckSVG';
// import '/icons/check.svg'

let MainButtonBackground;
let MainButtonIcon;
let MainButtonText ='Inscribirme'
const ExamCard = (props) => {
  if(!props.inscribed){ //this if give styles to botton  (inscripto)
    MainButtonBackground= '#28A745';
    MainButtonIcon= <CheckSVG ></CheckSVG>
    MainButtonText= "Inscripto"
  }


  return (
    <div className='ExamCard'>
      <p><b>{'Didáctica general'}</b></p>
      <p><b>Carrera: </b>{'Profesorado en educacion secundaria en Informática'}</p>
      <p><b>Vocales: </b>{'Aguilera, Daniel Marcelo, San Martín, Guillermo Ignacio.'}</p>
      <p><b>Fecha: </b>{'Lunes 29 Julio 19:00hs.'}</p>
      <p><b>Sede: </b>{'principal'}</p>
      {/* <img src="/icons/check.svg" alt="" /> */}
      <p className='close'>Cierre de incripcion en{' 1 semana, 2 dias.'}</p>
      <MainButton text={MainButtonText} background={MainButtonBackground} icon={MainButtonIcon} /> {/* tus buton  */}
    </div>
  )
}

export default ExamCard