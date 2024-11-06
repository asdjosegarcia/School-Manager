import React from 'react'
import NavBar from '../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../Components/Layouts/HeaderTitle'


const StudentsPage = () => {
    return (
        <div className='StudentsPage'>
            <NavBar />
            <HeaderTitle title={"Alumnos"}
                helpTitle1={"¿Que maneja esta seccion?"} helpText1={<>Aquí encontraras a todos los alumnos registrados en la carrera.</>}
                helpTitle2={"¿Como busco un Alumno?"} helpText2={<>Solo debes dar click en el cuadro "DNI o Nombre de Alumno" y escribir el nombre o DNI del alumno que buscas.</>}
                helpTitle3={""} helpText3={<></>}
            />


        </div>
    )
}

export default StudentsPage