import React, { useState } from 'react'
import NavBar from '../../Components/Layouts/NavBar'
import './NotificationPage.css'
import ExtraHelp from '../../Components/Modals/ExtraHelp'
import NoificationCard from '../../Components/Cards/NoificationCard'
import Menu from '../../Components/Layouts/Menu'



const NotificationPage = () => {
    const [getExtraHelp, setExtraHelp] = useState(false)



    return (
        <>
            <NavBar></NavBar>
            <div className='NotificationPage'>
                <Menu />
                <div className='container'>
                    <header>
                        <h2 className='title'>Notificaciones</h2>
                        {(getExtraHelp) ?
                            <img src="/icons/exit.svg" alt="" onClick={() => { setExtraHelp(false); console.log('click') }} />
                            :
                            <img src="/icons/help.svg" alt="" onClick={() => { setExtraHelp(true); console.log('click') }} />
                        }

                    </header>
                    {getExtraHelp &&
                        <ExtraHelp
                            subTitle1="¿Qué es? " img1="" text1="Aquí reciviaras las notificaciones sobre examenes, notas, comunicados generales de la institucion o alguna informacion que los directivos necesiten comunicarte."
                            subTitle2="¿Como funciona?" img2="" text2={<>Solo debes dar click en la felcha de cada notificacion y esta te mostrara su contenido.</>}
                        />
                    }
                    <main className='notification-list'>
                        <NoificationCard title="Mario Gutierrez (PRECEPTOR):" />
                        <NoificationCard title="App:" />

                    </main>
                </div>
            </div>
        </>
    )
}

export default NotificationPage