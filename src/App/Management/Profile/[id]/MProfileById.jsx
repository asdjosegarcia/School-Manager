import React from 'react'
import './MProfileById.css'
import MainButton from '../../../../Components/Buttons/MainButton'
import NavBar from '../../../../Components/Layouts/NavBar'
import Menu from '../../../../Components/Layouts/Menu'
import HeaderTitle from '../../../../Components/Layouts/HeaderTitle'
import ResetSVG from '../../../../SVG/ResetSVG.jsx'


const MProfileById = () => {
    return (
        <div className='MProfileById'>
            <NavBar />
            <Menu />
            <HeaderTitle
                title={"Perfil"}
                helpTitle1={"¿Qué maneja esta seccion?"} helpText1={<>Aquí veras los datos de profesores, alumnos  y un boton para reestablecer su contraseña a la asignada por defecto.</>}
                // helpTitle2={"¿Como relleno el formulario?"} helpText2={<>Solo debes ingresar los datos de el nuevo alumno segun lo requiera cada casilla. <br />En caso de ingresar algún dato de manera incorrecta, la aplicación te lo hará saber. </>}
                helpTitle3={""} helpText3={<></>}
            />

            <div className='container'>
                <header>
                    {/* <div className='picture'> <p>U</p></div>*/}
                    <MainButton text="Reestablecer Contraseña" icon={<ResetSVG height={34} />}/>
                    <span className='username'>Juan Ramon</span> 
                </header>
                <main>
                    <h2 >Información Basica</h2>
                    <div className='data-block odd' >
                        <span className='label'>Nombre</span>
                        <span className='value'>User</span>
                        {/* <img className='edit' src="/icons/pencil.svg" alt="" /> */}
                    </div>
                    <div className='data-block ' >
                        <span className='label'>Apellido</span>
                        <span className='value'>apellido</span>
                        {/* <img className='edit' src="/icons/pencil.svg" alt="" /> */}
                    </div>
                    <div className='data-block odd ' >
                        <span className='label'>DNI</span>
                        <span className='value'>123456789</span>
                        {/* <img className='edit' src="/icons/pencil.svg" alt="" /> */}
                    </div>
                    <div className='data-block ' >
                        <span className='label'>Género</span>
                        <span className='value'>Masculino</span>
                        {/* <img className='edit' src="/icons/pencil.svg" alt="" /> */}
                    </div>
                    <div className='data-block odd' >
                        <span className='label'>Nacimiento</span>
                        <span className='value'>7 mayo 2007</span>
                        {/* <img className='edit' src="/icons/pencil.svg" alt="" /> */}
                    </div>

                    <h2 >Contacto</h2>
                    <div className='data-block odd' >
                        <span className='label'>Télefono</span>
                        <span className='value'>3876564324</span>
                        {/* <img className='edit' src="/icons/pencil.svg" alt="" /> */}
                    </div>
                    <div className='data-block ' >
                        <span className='label'>Correo</span>
                        <span className='value'>UserApellido32@gmail.com</span>
                        {/* <img className='edit' src="/icons/pencil.svg" alt="" /> */}
                    </div>

                    <h2 >Cuenta</h2>
                    <div className='data-block odd' >
                        <span className='label'>Contraseña</span>
                        <span className='value'>**********</span>
                        {/* <img className='edit' src="/icons/pencil.svg" alt="" /> */}
                    </div>
                    <div className='data-block ' >
                        <span className='label'>Correo</span>
                        <span className='value'>UserApellido32@gmail.com</span>
                        {/* <img className='edit' src="/icons/pencil.svg" alt="" /> */}
                    </div>  
                </main>
                <footer>
                </footer>
            </div>
        </div>
    )
}

export default MProfileById