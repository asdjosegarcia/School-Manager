import React from 'react'
import './MProfesorsPage.css'
import NavBar from '../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../Components/Layouts/HeaderTitle'
import SearchInput from '../../../Components/Inputs/SearchInput'
import MainButton from '../../../Components/Buttons/MainButton'
import GenericHorizontalCard from '../../../Components/Cards/GenericHorizontalCard'
import FieldSVG from '../../../SVG/FieldSVG'
import ProfessorSVG from '../../../SVG/ProfessorSVG'



const MProfesorsPage = () => {
  return (
    <div className='MProfesorsPage'>
      <NavBar />
      <HeaderTitle title={"Profesores"}
        helpTitle1={"¿Qué maneja esta seccion?"} helpText1={<>Aquí encontraras a todos los Profesores registrados en la carrera.</>}
        helpTitle2={"¿Como busco un Profesor?"} helpText2={<>Solo debes dar click en el cuadro "DNI o Nombre del Profesor" y escribir el nombre o DNI del Profesor que buscas.</>}
        helpTitle3={""} helpText3={<></>}
      />
      <GenericHorizontalCard className="header" title={"Prof. ed sec en Biologia"} data={"ID:43432"} image={<FieldSVG fill="#17C500" className={"image"} />} />
      <SearchInput placeholder="DNI o nombre del Profesor" />
      <MainButton text="Registrar Nuevo Profesor" icon={<img src="/icons/plus.svg"></img>} />
      <section className='professor-list'>
        <GenericHorizontalCard
          image={<ProfessorSVG height={60} className={"image"} fill="#17C500" />}
          title={"Juan Redondo Ormeño"}
          data={"DNI:123456789"}
        />
        <GenericHorizontalCard
          image={<ProfessorSVG height={60} className={"image"} fill="#17C500" />}
          title={"Juan Redondo Ormeño"}
          data={"DNI:123456789"}
        />





      </section>





    </div>
  )
}

export default MProfesorsPage