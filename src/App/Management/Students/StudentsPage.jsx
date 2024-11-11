import React from 'react'
import NavBar from '../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../Components/Layouts/HeaderTitle'
import SearchInput from '../../../Components/Inputs/SearchInput'
import MainButton from '../../../Components/Buttons/MainButton'
import StudentCard from '../../../Components/Cards/StudentCard'
import './StudentsPage.css'



const StudentsPage = () => {
    return (
        <div className='StudentsPage'>
            <NavBar />
            <HeaderTitle title={"Alumnos"}
                helpTitle1={"¿Que maneja esta seccion?"} helpText1={<>Aquí encontraras a todos los alumnos registrados en la carrera.</>}
                helpTitle2={"¿Como busco un Alumno?"} helpText2={<>Solo debes dar click en el cuadro "DNI o Nombre de Alumno" y escribir el nombre o DNI del alumno que buscas.</>}
                helpTitle3={""} helpText3={<></>}
            />
            <SearchInput placeholder="DNI o nombre del Alumno" />

            <MainButton text="Registrar Nuevo Alumno" icon={<img src="/icons/plus.svg"></img>} />
            <section className='student-list'>
                <StudentCard/>
                <StudentCard/>
            </section>




        </div>
    )
}

export default StudentsPage