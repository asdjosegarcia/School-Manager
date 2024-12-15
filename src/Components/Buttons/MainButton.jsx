import React from 'react'
import './MainButton.css'

const MainButton = (props) => {
  let styles = {
    "backgroundColor": `${props.background}`, /* in react Styles defined by variables uses backgroundColor intead of background-color */
    "color": `${props.color}`,
  }
  return (
    <button className={`MainButton ${props.className}`} style={styles} onClick={props.funct}>
      <span>{props.text}</span> {props.icon} {/* {props.icon && <img src={props.icon} />} */}
    </button>
  )
}

export default MainButton
/* 
//how to use

import MainButton from '../../../../Components/Buttons/MainButton'


   <MainButton 
    text={"Registrar"}
    className={"button-register"} 
    funct={()=>{setBigGenericModal(true)}} 
    backgroud={"#696969"}
    color={"#fff"}
    />


*/