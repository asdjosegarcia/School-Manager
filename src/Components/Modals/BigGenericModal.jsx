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

            <MainButton text={"Cerrar"} funct={props.close} />
        </div>
    )
}

export default BigGenericModal

/* 
//how to use
                    <BigGenericModal
                         icon={<CircleCheckSVG height={100} className={"image"} fill="#17C500"/>}
                        title={"Registro Exitoso"}
                        text={<>Dale estos datos a<br />{"nombre Apellido"}</>}
                        user={"123456789"}
                        password={"123456789"}
                        close={()=>setBigGenericModal()}
                    />

 */