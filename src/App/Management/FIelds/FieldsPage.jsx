import React from 'react'
import NavBar from '../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../Components/Layouts/HeaderTitle'
import SearchInput from '../../../Components/Inputs/SearchInput'
import GenericHorizontalCard from '../../../Components/Cards/GenericHorizontalCard'
import FieldSVG from '../../../SVG/FieldSVG'
import './FieldsPage.css'

const FieldsPage = () => {
  return (
    <div className='FieldsPage'>
      <NavBar />
      <HeaderTitle title={"Asignaturas"}
        helpTitle1={"¿Que maneja esta seccion?"} helpText1={<>Aquí encontraras a todas las Asignaturas de la carrera listas para tu gestión.</>}
        helpTitle2={"¿Como busco una materia?"} helpText2={<>Solo debes dar click en el cuadro "ID o Nombre del Asignatura" y escribir el ID o Nombre del Asignatura que buscas.</>}
        helpTitle3={""} helpText3={<></>}
      />
      <SearchInput placeholder={"ID o Nombre del Asignatura"} />
      <section className='field-list'>
        <GenericHorizontalCard
          image={<FieldSVG fill="#696969" className={"image"} />}
          title={"Pedagogia orientada a la educacion"}
          data={"ID:4543232"}
        />
        <GenericHorizontalCard
          image={<FieldSVG fill="#696969" className={"image"} />}
          title={"Pedagogia orientada a la educacion"}
          data={"ID:4543232"}
        />

      </section>
    </div>

  )
}

export default FieldsPage