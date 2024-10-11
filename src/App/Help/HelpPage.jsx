import React from 'react'
import "./HelpPage.css"
import NavBar from '../../Components/Layouts/NavBar'
import MainButton from '../../Components/Buttons/MainButton'

const HelpPage = () => {
    return (
        <div className='HelpPage'>
            <NavBar></NavBar>
            <header>
                <h2 className='title'>Ayuda</h2>
            </header>
            <main>
                <section className='introduction'>
                    <img src='/icons/exclamation.svg'></img>
                    <p>En esta seccion encontraras soluciones y preguntas frecuentes a cerca de la app. <br/>Recuerda que si tines un problema con algo relacionado a la institucion o tus notas debes comunicarte con los directivos o personal a cargo.</p>
                </section>
                <section className='frequently-asked-questions'>
                    <a href="">¿Como puedo cargar mis datos?</a>
                    <a href="">¿Como puedo unirme a una carrera? </a>
                    <a href="">¿Como puedo cambiar mi foto de perfil?</a>
                    <a href="">¿Quienes somos?</a>
                    <a href="">Ver mas preguntas</a>
                </section>
                <section className='contact'>
                    <MainButton text="Contactar con la Institutcion"></MainButton>
                    <MainButton text="Reportar un error en la App"></MainButton>
                    <MainButton className="support" text="Contactar con soporte"> </MainButton>

                </section>

            </main>

        </div>
    )
}

export default HelpPage