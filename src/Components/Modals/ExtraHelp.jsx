import React from 'react'
import './ExtraHelp.css'

const ExtraHelp = (props) => {
  return (
      <div className='ExtraHelpBackground'>
        <div className='ExtraHelp'>
          <h3>{props.subTitle1}</h3>
          {props.img1&&<img src={props.img1} alt="" />}
          <p>{props.text1}</p>

          <h3>{props.subTitle2}</h3>
          {props.img2&&<img src={props.img2} alt="" />}
          <p>{props.text2}</p>

          <h3>{props.subTitle3}</h3>
          {props.img3&&<img src={props.img3} alt="" />}
          <p>{props.text3}</p>

        </div>
      </div>
  )
}

export default ExtraHelp