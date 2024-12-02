import React from 'react'
import NavBar from '../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../Components/Layouts/HeaderTitle'
import SearchInput from '../../../Components/Inputs/SearchInput'
import GenericHorizontalCard from '../../../Components/Cards/GenericHorizontalCard'
import FieldSVG from '../../../SVG/FieldSVG'
import './MSubjectsPage.css'
import SubjectSVG from '../../../SVG/SubjectSVG'

const MSubjectsPage = () => {
  return (
    <div className='MSubjectsPage'>
      <NavBar />
      <HeaderTitle title={"Asignaturas"}
        helpTitle1={"¿Que maneja esta seccion?"} helpText1={<>Aquí encontraras a todas las Asignaturas de la carrera listas para tu gestión.</>}
        helpTitle2={"¿Como busco una materia?"} helpText2={<>Solo debes dar click en el cuadro "ID o Nombre del Asignatura" y escribir el ID o Nombre del Asignatura que buscas.</>}
        helpTitle3={""} helpText3={<></>}
      />
      <GenericHorizontalCard
        className={"field"}
        image={<FieldSVG className={"image"} fill={"#17C500"} />}
        title={"Prof. ed sec en Biologia"}
        data={`ID: 3232423`}
      />
      <SearchInput placeholder={"ID o Nombre del Asignatura"} />
      <section className='field-list'>
        <GenericHorizontalCard
          image={<SubjectSVG fill="#696969" className={"image"} />}
          title={"Pedagogia orientada a la educacion"}
          data={"ID:4543232"}
        />
        <GenericHorizontalCard
          image={<SubjectSVG fill="#696969" className={"image"} />}
          title={"Pedagogia orientada a la educacion"}
          data={"ID:4543232"}
        />

      </section>
    </div>

  )
}

export default MSubjectsPage