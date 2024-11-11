import React from 'react'
import './StudentCard.css'
import PersonSVG from '../../SVG/PersonSVG'

const StudentCard = () => {
  return (
    <div className='StudentCard'>
        {/* <PersonSVG fill={"#696969"}/> */}
        <PersonSVG fill={"#17C500"}/>
        <p className='name'>Juan Redondo Ormeño</p>
        <p className='dni'>DNI: 123456789</p>
    </div>
  )
}

export default StudentCard