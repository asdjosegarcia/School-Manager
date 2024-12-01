import React, { useState } from 'react'
import NavBar from '../../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../../Components/Layouts/HeaderTitle'
import GenericHorizontalCard from '../../../../Components/Cards/GenericHorizontalCard'
import FieldSVG from '../../../../SVG/FieldSVG'
import ExamSVG from '../../../../SVG/ExamSVG'
import './MExamPageById.css'
import MainButton from '../../../../Components/Buttons/MainButton'
import EditSVG from '../../../../SVG/EditSVG'


const MExamPageById = () => {
    const [getCompleted, setCompleted] = useState(true);/* if getCompleted is true, exam can't edit  */

    return (
        <div className='MExamPageById'>
            <NavBar></NavBar>
            <HeaderTitle title={"Exámenes"}></HeaderTitle>
            <GenericHorizontalCard title={"Prof. ed sec en Biologia"} data={"ID:43432"} image={<FieldSVG fill="#17C500" className={"image"} />} />
            <GenericHorizontalCard title={"Biologia orientada a la educación"} data={"ID:53212"} image={<ExamSVG fill="#17C500" className={"image"} width="50" height="50" />} />

            <section className='main'>
                <div className='info-box'>
                    <div className='info-row'>
                        <span>Apertura Inscripción:</span>
                        <span>16/07/2025</span>
                    </div>
                    <div className='info-row'>
                        <span>Cierre Inscripción:</span>
                        <span>24/07/2025</span>
                    </div>
                    <div className='info-row'>
                        <span>Fecha exámen:</span>
                        <span>25/07/2025</span>
                    </div>
                    <div className='info-row'>
                        <span>Jefe catedra:  </span>
                        <span>Ignacio Aguirrez</span>
                    </div>
                </div>
            </section>
            {getCompleted &&
                <section className='results'>
                    <p className='title'>
                        RESULTADOS:
                    </p>
                    <div className='header'>
                        <span>ALUMNO</span>
                        <span>NOTA</span>
                    </div>
                    <div className='result_card' >
                        <span className='student'>IVARRAS JULIAN</span>
                        <span className='result'>6</span>
                    </div>
                    <div className='result_card' style={{ backgroundColor: "#69696920", }}>
                        <span className='student'>IVARRAS JULIAN</span>
                        <span className='result'>6</span>
                    </div>
                    <div className='result_card' >
                        <span className='student'>LOPEZ DARIO</span>
                        <span className='result'>6</span>
                    </div>
                    <div className='result_card' style={{ backgroundColor: "#69696920", }}>
                        <span className='student'>SOTOS LISANDRO</span>
                        <span className='result'>6</span>
                    </div>
                </section>
            }
            {!getCompleted &&
            
            <section className='bottom'>
                <MainButton text={`Editar Exámen ㅤ `} background={"#17C500"} icon={<EditSVG width="22" height="22" fill={"#fff"} />} />
            </section>
            }

        </div>
    )
}

export default MExamPageById