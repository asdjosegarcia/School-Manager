import React from 'react'
import './GenericHorizontalCard.css'

const GenericHorizontalCard = (props) => {
  return (
    <div className='GenericHorizontalCard'>
        {props.image}
        <p className='name'>{props.title}</p>
        <p className='dni'>{props.data}</p>
    </div>
  )
}

export default GenericHorizontalCard

/* 
how to use:
import GenericHorizontalCard from '../../../Components/Cards/GenericHorizontalCard'

        <GenericHorizontalCard
          image={<FieldSVG fill="#696969" className={"image"} />}
          title={"Pedagogia orientada a la educacion"}
          data={"ID:4543232"}
        />


*/