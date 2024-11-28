import React from 'react'
import NavBar from '../../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../../Components/Layouts/HeaderTitle'
import GenericHorizontalCard from '../../../../Components/Cards/GenericHorizontalCard'
import FieldSVG from '../../../../SVG/FieldSVG'
import ExamSVG from '../../../../SVG/ExamSVG'
import './MExamPageById.css'
import MainButton from '../../../../Components/Buttons/MainButton'
import EditSVG from '../../../../SVG/EditSVG'


const MExamPageById = () => {
    return (
        <div className='MExamPageById'>
            <NavBar></NavBar>
            <HeaderTitle title={"Exámenes"}></HeaderTitle>
            <GenericHorizontalCard title={"Prof. ed sec en Biologia"} data={"ID:43432"} image={<FieldSVG fill="#17C500" className={"image"} />} />
            <GenericHorizontalCard title={"Prof. ed sec en Biologia"} data={"ID:43432"} image={<ExamSVG fill="#17C500" className={"image"} width="50" height="50" />} />

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
            <section className='results'>
                
            </section>
            <section  className='bottom'>
                <MainButton text={`Editar Exámen ㅤ `} background={"#17C500"} icon={<EditSVG width="22" height="22"  fill={"#fff"}/>}/>
            </section>
        </div>
    )
}

export default MExamPageById