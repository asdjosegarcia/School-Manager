import React from 'react'
import './ProfilePage.css'
import NavBar from '../../Components/Layouts/NavBar'
import MainButton from '../../Components/Buttons/MainButton'
import Menu from '../../Components/Layouts/Menu'

const ProfilePage = () => {

    return (
        <>
            <NavBar />
            <div className='ProfilePage'>
                <Menu />
                <div className='container'>
                    <header>
                        <div className='picture'> <p>U</p></div>
                        <span className='username'>User</span>
                    </header>
                    <main>
                        <h2 >Información Basica</h2>
                        <div className='data-block odd' >
                            <span className='label'>Nombre</span>
                            <span className='value'>User</span>
                            <img className='edit' src="/icons/pencil.svg" alt="" />
                        </div>
                        <div className='data-block ' >
                            <span className='label'>Apellido</span>
                            <span className='value'>apellido</span>
                            <img className='edit' src="/icons/pencil.svg" alt="" />
                        </div>
                        <div className='data-block odd ' >
                            <span className='label'>DNI</span>
                            <span className='value'>123456789</span>
                            <img className='edit' src="/icons/pencil.svg" alt="" />
                        </div>
                        <div className='data-block ' >
                            <span className='label'>Género</span>
                            <span className='value'>Masculino</span>
                            <img className='edit' src="/icons/pencil.svg" alt="" />
                        </div>
                        <div className='data-block odd' >
                            <span className='label'>Nacimiento</span>
                            <span className='value'>7 mayo 2007</span>
                            <img className='edit' src="/icons/pencil.svg" alt="" />
                        </div>

                        <h2 >Contacto</h2>
                        <div className='data-block odd' >
                            <span className='label'>Télefono</span>
                            <span className='value'>3876564324</span>
                            <img className='edit' src="/icons/pencil.svg" alt="" />
                        </div>
                        <div className='data-block ' >
                            <span className='label'>Correo</span>
                            <span className='value'>UserApellido32@gmail.com</span>
                            <img className='edit' src="/icons/pencil.svg" alt="" />
                        </div>

                        <h2 >Cuenta</h2>
                        <div className='data-block odd' >
                            <span className='label'>Contraseña</span>
                            <span className='value'>**********</span>
                            <img className='edit' src="/icons/pencil.svg" alt="" />
                        </div>
                        <div className='data-block ' >
                            <span className='label'>Correo</span>
                            <span className='value'>UserApellido32@gmail.com</span>
                            <img className='edit' src="/icons/pencil.svg" alt="" />
                        </div>
                        <div className='data-block ' >
                            <span className='label'>Correo</span>
                            <span className='value'>UserApellido32@gmail.com</span>
                            <img className='edit' src="/icons/pencil.svg" alt="" />
                        </div>
                        <div className='data-block ' >
                            <span className='label'>Correo</span>
                            <span className='value'>UserApellido32@gmail.com</span>
                            <img className='edit' src="/icons/pencil.svg" alt="" />
                        </div>
                    </main>
                    <footer>
                        <MainButton text="guardar" />
                    </footer>
                </div>
            </div>
        </>
    )
}

export default ProfilePage