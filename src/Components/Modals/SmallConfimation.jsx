import React from 'react'
import './SmallConfimation.css'
import MainButton from '../Buttons/MainButton'

const SmallConfimation = (props) => {
  return (
    <div className={`SmallConfimation ${props.className}`}>
      <p>{props.text}</p>
      <div className='buttons-container'>
        <MainButton
          text={"Aceptar"}
          // className={"button-register"}
          funct={props.accept}
        // backgroud={"#696969"}
        // color={"#fff"}
        />
        <MainButton
          text={"Cancelar"}
          // className={"button-register"}
          funct={props.cancel}
          background={"#C4FFF9"}
          color={"#696969"}
        />
      </div>
    </div>
  )
}

export default SmallConfimation
/* 
//how to use
                    <SmallConfimation
                        text={"Esta seguro de Reestablecer a la contraseña por defecto?"}
                        accept={() => { resetPasword() }}
                        cancel={() => { setSmallConfirmation(false) }}
                    />

 */
