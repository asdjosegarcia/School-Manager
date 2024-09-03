import React from 'react'
import './Menu.css'
const Menu = (props) => {

    return (
        <>
            {/* {(props.getMenu) && */}
                <div className={`background ${props.getMenu? "open":"closed"} }`} onClick={() => { props.setMenu(false) }}>

                    <section className='Menu'>

                        <div className='header'>
                            <img className='close' src="/icons/back.svg" alt="" onClick={() => { props.setMenu(false) }} />
                            <span>Instituto N°0000</span>
                            <span className='user'>SMG Alumno</span>
                        </div>
                        <button>
                            <img src="/icons/home.svg" alt="" />
                            Inicio
                        </button>
                        <button>
                            <img src="/icons/calendar.svg" alt="" />
                            Exámenes
                        </button>
                        <button>
                            <img src="/icons/clock.svg" alt="" />
                            Historial
                        </button>
                        <button>
                            <img src="/icons/hat.svg" alt="" />
                            Carreras
                        </button>
                        <button>
                            <img src="/icons/person.svg" alt="" />
                            Perfil
                        </button>
                        <button>
                            <img src="/icons/question.svg" alt="" />
                            Ayuda
                        </button>
                    </section>
                </div>
            {/* } */}
        </>


    )
}

export default Menu