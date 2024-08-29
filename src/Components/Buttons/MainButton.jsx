/* This component can take  text, color and icons sending in props
    Example of use (in father component):
    
*/
import React from 'react'
import './MainButton.css'

const MainButton = (props) => {
    let styles={
        "backgroundColor":`${props.background}`, /* in react Styles defined by variables uses backgroundColor intead of background-color */
        "color":`${props.color}`,
    }
  return (
    <button className='MainButton' style={styles} onClick={props.funct}>
       <span>{props.text}</span> {props.icon} {/* {props.icon && <img src={props.icon} />} */}
    </button>
  )
}

export default MainButton