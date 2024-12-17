import React, { useState } from 'react'
import './MNewExamPage.css'
import NavBar from '../../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../../Components/Layouts/HeaderTitle'
import GenericHorizontalCard from '../../../../Components/Cards/GenericHorizontalCard'
import FieldSVG from '../../../../SVG/FieldSVG'
import MainButton from '../../../../Components/Buttons/MainButton'
import DropdownSelect from '../../../../Components/Inputs/DropdownSelect'

const MNewExamPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podés añadir la lógica para manejar el login
        //   console.log('Usuario:', username);
        //   console.log('Password:', password);
    };
    return (
        <div className='MNewExamPage'>
            <NavBar  role={"management"}/>
            <HeaderTitle title={"Examenes"} />
            <GenericHorizontalCard title={"Prof. ed sec en Biologia"} data={"ID:43432"} image={<FieldSVG fill="#17C500" className={"image"} />} />
            <section className='main'>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="registration-start">Llamado</label>
                        <DropdownSelect></DropdownSelect>
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="registration-start">Materia</label>
                        <select id="options" name="options">
                            <option className='option' value="opcion1">Pedagogia orientada a la educación.</option>
                            <option value="opcion2">Profesorado en educacion secundaria en infomática.</option>
                            <option value="opcion3">Tecnicatura Superior en Gestión de Empresas.</option>
                        </select> */}

                        <label htmlFor="registration-start">Materia</label>
                        <DropdownSelect></DropdownSelect>
                    </div>
                    <div className="form-group">
                        <label htmlFor="registration-start">Inicio de inscripción</label>
                        <input
                            type="text"
                            id="registration-start"
                            placeholder="DD/MM/AAAA"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exam-date">Fecha del Examen</label>
                        <input
                            type="text"
                            id="fecha-examen"
                            placeholder="DD/MM/AAAA"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Sede</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="Principal"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="cierre-inscripcion">Cierre de inscripción</label>
                        <input
                            type="text"
                            id="cierre-inscripcion"
                            placeholder="DD/MM/AAAA"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="head-of-departament">Jefe de cátedra</label>
                        <input type="text" id="head-of-departament" placeholder="Nombre y Apellido"
                            onChange={(e) => setUsername(e.target.value)}
                        />


                    </div>
                    <div className="form-group">
                        <label htmlFor="vocals">Vocales</label>
                        <textarea
                            className='vocals'
                            type="text"
                            id="vocals"
                            placeholder="Nombre Apellido, Nombre apellido, Nombre Apellido... "
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>


                    <MainButton text={"Crear Exámen"} />


                </form>
            </section>
        </div>
    )
}

export default MNewExamPage