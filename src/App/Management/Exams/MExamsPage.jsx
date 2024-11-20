import React from 'react'
import HeaderTitle from '../../../Components/Layouts/HeaderTitle'
import NavBar from '../../../Components/Layouts/NavBar'
import GenericHorizontalCard from '../../../Components/Cards/GenericHorizontalCard'
import FieldSVG from '../../../SVG/FieldSVG'
import ExamSVG from '../../../SVG/ExamSVG'
import SearchInput from '../../../Components/Inputs/SearchInput'
import MainButton from '../../../Components/Buttons/MainButton'

import './MExamsPage.css'



const MExamsPage = () => {
  return (

    <div className='MExamsPage'>
      <NavBar />
      <HeaderTitle title={"Exámenes"} />
      <GenericHorizontalCard title={"Prof. ed sec en Biologia"} data={"ID:43432"} image={<FieldSVG fill="#17C500" className={"image"} />} />
      <SearchInput placeholder={'ID,Fecha o Nombre'} />
      <MainButton text={"Crear Nuevo Examen"} icon={<img src='/icons/plus.svg'></img>} />
      <section className='exam-list'>
        <GenericHorizontalCard
          className={"selectableOne"}
          image={<ExamSVG width="50" height="50" fill="#17C500" className={"image"} />}
          title={"Pedagogia orientada a la educacion"}
          data={"ID:4543232"}
        />
        <GenericHorizontalCard
          className={"selectableOne"}
          image={<ExamSVG width="50" height="50" fill="#696969" className={"image"} />}
          title={"Pedagogia orientada a la educacion"}
          data={"ID:4543232"}
        />

      </section>




    </div>
  )
}

export default MExamsPage