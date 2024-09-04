import React from 'react'
import './ExtraHelp.css'

const ExtraHelp = (props) => {
  return (
      <div className='ExtraHelpBackground'>
        <div className='ExtraHelp'>
          <h3>{props.subTitle1}</h3>
          {props.img1&&
          <img src={props.img} alt="" />
          }
          <p>{props.text1}</p>
          <h3>{props.subTitle2}</h3>
          <p>{props.text2}</p>


        </div>
      </div>
  )
}

export default ExtraHelp