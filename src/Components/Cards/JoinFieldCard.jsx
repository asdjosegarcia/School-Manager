import React from 'react'
import './JoinFieldCard.css'

let fieldStatus = false
const JoinFieldCard = (props) => {
  if(props.status){
    fieldStatus=true
  }else{
    fieldStatus=false
  }

  return (
    <div className='JoinFieldCard'>
      <p>
        Profesorado en educación secundaria en biologia.
      </p>
      <span className='field-number'>
        N°-510/14-2024
      </span>
      {(fieldStatus) ?
        <span className='fiel-status open'>ABIERTA 🟢</span>
        :
        <span className='fiel-status close'>CERRADA 🔴</span>

    }


    </div>
  )
}

export default JoinFieldCard