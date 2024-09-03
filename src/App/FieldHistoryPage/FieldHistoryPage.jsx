import React from 'react'
import './FieldHistoryPage.css'
import NavBar from '../../Components/Layouts/NavBar'

const FieldHistoryPage = () => {
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
                <img src="/icons/help.svg" alt="" />
            </header>
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