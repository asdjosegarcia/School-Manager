import React from 'react'
import NavBar from '../../../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../../../Components/Layouts/HeaderTitle'
import GenericHorizontalCard from '../../../../../Components/Cards/GenericHorizontalCard'
import FieldSVG from '../../../../../SVG/FieldSVG'
import ProfessorSVG from '../../../../../SVG/ProfessorSVG'
import './MSubjetsPage.css'
import SubjectSVG from '../../../../../SVG/SubjectSVG'


const MSubjetsPage = () => {
  return (
    <div className='MSubjetsPage'>
      <NavBar role={"management"} />
      <HeaderTitle title={"Profesores"}
        helpTitle1={"¿Qué maneja esta seccion?"} helpText1={<>Aquí encontraras todas las Asignaturas que maneja este Profesor.</>}
        // helpTitle2={"¿Como busco un Profesor?"} helpText2={<>Solo debes dar click en el cuadro "DNI o Nombre del Profesor" y escribir el nombre o DNI del Profesor que buscas.</>}
        helpTitle3={""} helpText3={<></>}
      />
      <GenericHorizontalCard className="header" title={"Prof. ed sec en Biologia"} data={"ID:43432"} image={<FieldSVG fill="#17C500" className={"image"} />} />
      <GenericHorizontalCard className="header" title={"Prof. Juan Redorndo Ormeño"} data={"DNI:123456789"} image={<ProfessorSVG fill="#17C500" className={"image"} />} />
      <p className='subtitle'> Asignaturas: </p>
      <main>
        <GenericHorizontalCard title={"Biología orientada a las ciencias"} image={<SubjectSVG className={"image"} fill="#17C500"/>} className="subject"/>
      </main>

    </div>
  )
}

export default MSubjetsPage