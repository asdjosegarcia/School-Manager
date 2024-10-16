import React from 'react'
import './ExamsPage.css'
import NavBar from '../../Components/Layouts/NavBar'
import ExamCard from '../../Components/Cards/ExamCard'

const ExamsPage = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className='ExamsPage'>
                <section className='header'>
                    <h2 className='title'>Examenes</h2>
                    <img src="/icons/help.svg" alt="" />
                </section>
                <section className='Exams'>
                    <ExamCard />
                    <ExamCard />

                </section>
            </div>
        </>
    )
}

export default ExamsPage