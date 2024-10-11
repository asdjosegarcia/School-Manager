import React from 'react'
import './JoinFieldPage.css'
import JoinFieldCard from '../../Components/Cards/JoinFieldCard'
import MainButton from '../../Components/Buttons/MainButton'

const JoinFieldPage = () => {
    return (
        <div className='JoinFieldPage'>
            <header>
                Únete a una carrera
            </header>
            <main>
                <JoinFieldCard/>
                <JoinFieldCard/>
                <MainButton text="Unirse"/>
            </main>

        </div>
    )
}

export default JoinFieldPage