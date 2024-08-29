import React from 'react'
import './ExamsPage.css'
import NavBar from '../../Components/Layouts/NavBar'
import ExamCard from '../../Components/Cards/ExamCard'

const ExamsPage = () => {
    return (
        <div className='ExamsPage'>
            <NavBar></NavBar>
            <section className='header'>
                <h2 className='title'>Examenes</h2>
                <img src="/icons/help.svg" alt="" />
            </section>
            <section className='Exams'>
            <ExamCard/>
            <ExamCard/>

            </section>
        </div>
    )
}

export default ExamsPage