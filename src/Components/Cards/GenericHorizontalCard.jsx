import React from 'react'
import './GenericHorizontalCard.css'

const GenericHorizontalCard = (props) => {
  return (
    <div className={`GenericHorizontalCard ${props.className}`}>
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
          className={"selectableOne"}  //if you want add a class
          image={<FieldSVG fill="#696969" className={"image"} />} //if you want add a image
          title={"Pedagogia orientada a la educacion"} //if you want add a title
          data={"ID:4543232"} //if you want add a extra data
        />


*/