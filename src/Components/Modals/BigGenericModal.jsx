import React from 'react'
import './BigGenericModal.css'
import MainButton from '../Buttons/MainButton'

const BigGenericModal = (props) => {
    return (
        <div className={`BigGenericModal ${props.className}`}>
            {props.icon}
            <h1 className='title'>{props.title}</h1>
            <p className='text'>{props.text}</p>
            {props.user &&
                <>
                    <h4 className='subtitle'>Usuario</h4>
                    <p className='data'>{props.user}</p>

                </>
            }
            {props.password &&
                <>
                    <h4 className='subtitle'>Contraseña</h4>
                    <p className='data'>{props.password}</p>
                </>
            }
        
            <MainButton text={"Cerrar"} funct={props.close}/>


        </div>
    )
}

export default BigGenericModal