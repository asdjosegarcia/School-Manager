import React, { useState } from 'react'
import NavBar from '../../Components/Layouts/NavBar'
import ExtraHelp from '../../Components/Modals/ExtraHelp'
import './SelectFieldPage.css'
import { useNavigate } from 'react-router-dom';
import Menu from '../../Components/Layouts/Menu';


let userHaveFiels = true
const SelectFieldPage = () => {
    const [getExtraHelp, setExtraHelp] = useState(false)
    const navigate = useNavigate();



    return (
        <>
            <NavBar />
            <div className='SelectFieldPage'>
                <Menu></Menu>
                <div className='container'>
                    <header>
                        <h2 className='title'>Tus carreras</h2>
                        {(getExtraHelp) ?
                            <img src="/icons/exit.svg" alt="" onClick={() => { setExtraHelp(false); console.log('click') }} />
                            :
                            <img src="/icons/help.svg" alt="" onClick={() => { setExtraHelp(true); console.log('click') }} />
                        }

                    </header>
                    {getExtraHelp &&
                        <ExtraHelp
                            subTitle1="¿Qué es? " img1="" text1="Aquí encontrarás las carraras a las cuales te encuentras inscripto."
                            subTitle2="¿Como funciona?" img2="" text2={<>Segun la carrera que selecciones la aplicacion te mostrara el historial academico, proximos examenes entre otras cosas.</>}
                            subTitle3="¿Como me uno a una carrera? " img3="" text3='Solo debes hacer click en el boton "Agregar" lo cual te llevara a otra seccion en la que podras "unirte"/agregar otra carrera.'

                        />
                    }
                    <main className='field-list'>
                        <div className='field-box' onClick={() => navigate('/')} >
                            <img className='' src="" alt="" />
                            <h2 className='title'>Tecnicatura Superior en Gestión de Empresas.</h2>
                        </div>
                        <div className='field-box' onClick={() => navigate('/')}>
                            <img src="" alt="" />
                            <h2 className='title'>Profesorado en educacion secundaria en infomática.</h2>
                        </div>
                        {/* <div className='field-box' onClick={() => navigate('/')}>
                        <img src="" alt="" />
                        <h2 className='title'>Profesorado en educacion secundaria en infomática.</h2>
                    </div>
                    <div className='field-box' onClick={() => navigate('/')}>
                        <img src="" alt="" />
                        <h2 className='title'>Profesorado en educacion secundaria en infomática.</h2>
                    </div>
                    <div className='field-box' onClick={() => navigate('/')}>
                        <img src="" alt="" />
                        <h2 className='title'>Profesorado en educacion secundaria en infomática.</h2>
                    </div> */}
                        {/* <div className='field-box add-field' onClick={() => navigate('/join-field')}>
                        <img src="/icons/plus-box.svg" alt="" />
                        <h2 className='title' >Agregar</h2>
                    </div> */}

                    </main>
                    <footer className='app-info'>
                        <h2>School Manager</h2>
                        <p>V1.4.3</p>
                        <p>Created by Electronic Systems</p>
                    </footer>
                </div>
            </div>
        </>

    )
}

export default SelectFieldPage