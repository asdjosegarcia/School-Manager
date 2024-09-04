import React, { useState } from 'react'
import './FieldHistoryPage.css'
import NavBar from '../../Components/Layouts/NavBar'
import ExtraHelp from '../../Components/Modals/ExtraHelp'


const FieldHistoryPage = () => {
    const [getExtraHelp, setExtraHelp] = useState(false)
    ///////////////////////field subjects map generator
    //Then we will make the code to sort 'field-map-subject_card'

    //////////////////////field progress calculator
    const completedFields = 55;
    const totalFields = 100;
    const fieldProgress = (completedFields * 100) / totalFields;//total progres on % of the fields 

    return (
        <div className='FieldHistoryPage'>
            <NavBar />
            <header>
                <h2 className='title'>Historial</h2>
                {(getExtraHelp) ?
                    <img src="/icons/exit.svg" alt="" onClick={() => { setExtraHelp(false); console.log('click') }} />
                    :
                    <img src="/icons/help.svg" alt="" onClick={() => { setExtraHelp(true); console.log('click') }} />
                }
            </header>
            {getExtraHelp &&
                <ExtraHelp
                    subTitle1="¿Qué es? " img1="" text1="Aquí encontrarás las notas que obtuviste durante toda la carrera."
                    subTitle2="¿Como se divide?" img2="" text2={<>Las notas se muestran divididas por año y materia. <br /> Cada año contiene las notas de las materias que cursaste y su calificación correspondiente.</>}
                />
            }
            <main>
                <section className='field-progress'>
                    <progress className="field-progress-bar" value={fieldProgress} max={100}></progress>
                    <p className='field-progress-text' style={{ backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 1) ${fieldProgress}%, rgba(105, 105, 105, 1) ${fieldProgress}%)` }}>{/* this style is for two colors text */}
                        Tecnicatura Superior en Gestión de Empresas. Nº-510/14
                    </p>
                    <p className=' field-progress-number' style={{ backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 1) ${fieldProgress}%, rgba(105, 105, 105, 1) ${fieldProgress}%)` }}>
                        {completedFields}/{totalFields}
                    </p>
                </section>
                <section className='field-map'>
                    <div className='field-map-header'>
                        <span>MATERIA</span>
                        <span>NOTA</span>
                        <span>ORIGEN</span>
                    </div>
                    <div className='field-map-year'>{1}ER AÑO</div>

                    <div className='field-map-subject_card'>
                        <span className='field-map-subject'>Didactica general</span>
                        <span className='field-map-score'>6</span>
                        <span className='field-map-date'>JULIO <br /> 2024</span>
                    </div>
                    <div className='field-map-subject_card' style={{ backgroundColor: "#696969", color: "white" }}>
                        <span className='field-map-subject'>Didactica general</span>
                        <span className='field-map-score'>10</span>
                        <span className='field-map-date'>JULIO <br /> 2025</span>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default FieldHistoryPage