import React from 'react'
import './MNotificationsPage.css'
import NavBar from '../../../Components/Layouts/NavBar'
import GenericHorizontalCard from '../../../Components/Cards/GenericHorizontalCard'
import HeaderTitle from '../../../Components/Layouts/HeaderTitle'
import FieldSVG from '../../../SVG/FieldSVG'
import SearchInput from '../../../Components/Inputs/SearchInput'
import MainButton from '../../../Components/Buttons/MainButton'
// import GenericHorizontalCard from '../../../Components/Cards/GenericHorizontalCard'
// import NotifySVG from '../../../SVG/NotifySVG'
import NotificationSVG from '../../../SVG/NotificationSVG'



const MNotificationsPage = () => {
    return (
        <div className='MNotificationsPage'>
            <NavBar role={"management"} />
            <HeaderTitle title={"Profesores"}
                helpTitle1={"¿Qué maneja esta seccion?"} helpText1={<>Aquí encontraras todas las notificaciones.</>}
                helpTitle2={"¿Como notifico a alguien?"} helpText2={<>Solo debes dar click en el boton "Notificar" y te guiara a una nueva seccion donde notificaras a quien quieras!.</>}
                helpTitle3={"¿Como edito una notificacion?"} helpText3={<>Da click en cualquiera de las notificaciones y te permitira editarla y/o eliminarla</>}
            />
            <GenericHorizontalCard className="header" title={"Prof. ed sec en Biologia"} data={"ID:43432"} image={<FieldSVG fill="#17C500" className={"image"} />} />
            <main className='main'>
                <SearchInput placeholder={"Titulo o ID de notificación"} />
                <MainButton text="Notificar" icon={<img src="/icons/plus.svg"></img>} />
                <section className='notifications-list'>
                    <GenericHorizontalCard
                        image={<NotificationSVG height={50}  width={50} className={"image"} fill="#17C500" />}
                        title={"Presentar documentacion"}
                        data={"Fecha:04/10/2026"}
                    />
                    <GenericHorizontalCard
                        image={<NotificationSVG height={50} className={"image"} fill="#17C500" />}
                        title={"Presentarse en el salon"}
                        data={"Fecha:04/10/2026"}

                    />

                </section>
            </main>

        </div>
    )
}

export default MNotificationsPage