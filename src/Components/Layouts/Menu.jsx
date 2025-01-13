import React, { useState } from 'react'
import './Menu.css'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Menu = (props) => {
    const navigate = useNavigate();
    const [getOpen, setOpen] = useState(window.innerWidth > 700 ? true : false);
    const [getRole, setRole] = useState(props.role )//this useState is for magnament or student menu, "management" from managment pages, "student" or each other for any other

    window.addEventListener('resize', function () {//listen windows width, to open/close  Mobile menu
        if (window.innerWidth > 700) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    });



    return (
        <>
            {/* {(props.getMenu) && */}
            <div className={`background ${getOpen || props.getMenu ? "open" : "closed"} }`} onClick={() => { if (window.innerWidth < 700) { props.setMenu(false) } }}>
                <section className='Menu'>
                    {
                        (getRole !== "management") ?
                            <>
                                <div className='header'>
                                    <img className='close' src="/icons/back.svg" alt="" onClick={() => { props.setMenu(false) }} />
                                    <span className='title'>Instituto N°0000</span>
                                    <span className='user'>SMG Alumno</span>
                                </div>
                                <button onClick={() => navigate('/')}>
                                    <img src="/icons/home.svg" alt="" />
                                    Inicio
                                </button>

                                <button onClick={() => navigate('/exams')}>
                                    <img src="/icons/calendar.svg" alt="" />
                                    Exámenes
                                </button>
                                <button onClick={() => navigate('/field-history')}>
                                    <img src="/icons/clock.svg" alt="" />
                                    Historial
                                </button>
                                <button onClick={() => navigate('/select-field')}>
                                    <img src="/icons/hat.svg" alt="" />
                                    Carreras
                                </button>
                                <button onClick={() => navigate('/profile')}>
                                    <img src="/icons/person.svg" alt="" />
                                    Perfil
                                </button>
                                <button onClick={() => navigate('/help')}>
                                    <img src="/icons/question.svg" alt="" />
                                    Ayuda
                                </button>
                            </>
                            :
                            <>
                                <div className='header'>
                                    <img className='close' src="/icons/back.svg" alt="" onClick={() => { props.setMenu(false) }} />
                                    <span className='title'>Instituto N°0000</span>
                                    <span className='user'>SMG Gestion</span>
                                </div>
                                <button onClick={() => navigate('/management/')}>
                                    <img src="/icons/home.svg" alt="" />
                                    Inicio
                                </button> 
                                <button onClick={() => navigate('/management/students')}>
                                    <img src="/icons/group.svg" alt="" />
                                    Alumnos
                                </button>
                                <button onClick={() => navigate('/management/professors')}>
                                    <img src="/icons/professor.svg" alt="" />
                                    Profesores
                                </button>

                                <button onClick={() => navigate('/management/exams')}>
                                    <img src="/icons/calendar.svg" alt="" />
                                    Exámenes
                                </button>
                                {/* <button onClick={() => navigate('/field-history')}>
                                    <img src="/icons/clock.svg" alt="" />
                                    Historial
                                </button> */}
                                <button onClick={() => navigate('/management/subjects')}>
                                    <img src="/icons/hat.svg" alt="" />
                                    Asignaturas
                                </button>
                                <button onClick={() => navigate('/profile')}>
                                    <img src="/icons/person.svg" alt="" />
                                    Perfil
                                </button>
                                <button onClick={() => navigate('/help')}>
                                    <img src="/icons/question.svg" alt="" />
                                    Ayuda
                                </button>
                            </>
                    }
                </section>
            </div>
            {/* } */}
        </>


    )
}

export default Menu