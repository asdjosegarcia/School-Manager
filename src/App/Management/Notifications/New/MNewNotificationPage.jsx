import React from 'react'
import './MNewNotificationPage.css'
import NavBar from '../../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../../Components/Layouts/HeaderTitle'
import GenericHorizontalCard from '../../../../Components/Cards/GenericHorizontalCard'
import FieldSVG from '../../../../SVG/FieldSVG'
import MainButton from '../../../../Components/Buttons/MainButton'
import DropdownSelect from '../../../../Components/Inputs/DropdownSelect'

const MNewNotificationPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // here we can use form data
    };
    return (
        <div className='MNewNotificationPage'>
            <NavBar role={"management"} />
            <HeaderTitle title={"Notificar"}
                helpTitle1={"¿Qué maneja esta seccion?"} helpText1={<>Aquí puedes notificar a 1 o un grupo de personas.</>}
            // helpTitle2={"¿Como notifico a alguien?"} helpText2={<>Sigue el formulario, es bastante intuitivo.</>}
            // helpTitle3={"¿Como puedo editar una notificacion?"} helpText3={<>Da click en cualquiera de las notificaciones y te permitira editarla y/o eliminarla</>}
            />
            <GenericHorizontalCard className="header" title={"Prof. ed sec en Biologia"} data={"ID:43432"} image={<FieldSVG fill="#17C500" className={"image"} />} />
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="registration-start">Notificar a:</label>
                    <DropdownSelect />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Titulo:</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Aguirrez"
                    // onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group ">
                    <label htmlFor="content">Contenido:</label>
                    <textarea
                        className='content'
                        type="text"
                        id="content"
                        placeholder="Aguirrez"
                    // onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className='buttons-container'>
                    <MainButton text={"Cancelar"} className={"button-cancel"} />
                    <MainButton text={"Registrar"} className={"button-register"} /* funct={()=>{setBigGenericModal(true)}} */ />
                </div>
            </form>


        </div>
    )
}

export default MNewNotificationPage