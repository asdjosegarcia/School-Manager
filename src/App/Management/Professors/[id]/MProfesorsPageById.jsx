import React from 'react'
import './MProfesorsPageById.css'
import NavBar from '../../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../../Components/Layouts/HeaderTitle'
import GenericHorizontalCard from '../../../../Components/Cards/GenericHorizontalCard'
import FieldSVG from '../../../../SVG/FieldSVG'
import ProfessorSVG from '../../../../SVG/ProfessorSVG'
import SimpleHorizontalButton from '../../../../Components/Buttons/SimpleHorizontalButton'

const MProfesorsPageById = () => {
    return (
        <div className='MProfesorsPageById'>
            <NavBar />
            <HeaderTitle title={"Profesores"}
                helpTitle1={"¿Qué maneja esta seccion?"} helpText1={<>Aquí encontraras a todos los Profesores registrados en la carrera.</>}
                helpTitle2={"¿Como busco un Profesor?"} helpText2={<>Solo debes dar click en el cuadro "DNI o Nombre del Profesor" y escribir el nombre o DNI del Profesor que buscas.</>}
                helpTitle3={""} helpText3={<></>}
            />
            <GenericHorizontalCard  title={"Prof. ed sec en Biologia"} data={"ID:43432"} image={<FieldSVG fill="#17C500" className={"image"} />} />
            <GenericHorizontalCard image={<ProfessorSVG height={60} className={"image"} fill="#17C500" />} title={"Juan Redondo Ormeño"} data={"DNI:123456789"} />
            <section className='option-list'>
                <SimpleHorizontalButton text ={"Perfil"}/>
                <SimpleHorizontalButton text ={"Asignaturas"}/>
                <SimpleHorizontalButton text ={"Alumnos"}/>
                <SimpleHorizontalButton text ={"Examenes"}/>
                




            </section>

        </div>
    )
}

export default MProfesorsPageById