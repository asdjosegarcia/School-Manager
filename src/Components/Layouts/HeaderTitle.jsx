import React, { useState } from 'react'
import ExtraHelp from '../Modals/ExtraHelp'
import './HeaderTitle.css'




const HeaderTitle = (props) => {
    const [getExtraHelp, setExtraHelp] = useState(false)
    return (
        <div className='HeaderTitle'>
            <header>
                <h2 className='title'>{props.title}</h2>
                {(getExtraHelp) ?
                    <img src="/icons/exit.svg" alt="" onClick={() => { setExtraHelp(false) }} />
                    :
                    <img src="/icons/help.svg" alt="" onClick={() => { setExtraHelp(true) }} />
                }
            </header>
            {getExtraHelp &&
                <ExtraHelp
                    subTitle1={props.helpTitle1} img1="" text1={props.helpText1}
                    subTitle2={props.helpTitle2} img2="" text2={props.helpText2}
                    subTitle3={props.helpTitle3} img3="" text3={props.helpText3}

                />
            }
        </div>
    )
}

export default HeaderTitle
//////////////////////////How to use?
//import HeaderTitle from '../../../Components/Layouts/HeaderTitle' 
{/* 
    <HeaderTitle title={"Alumnos"}
helpTitle1={"¿Que maneja esta seccion?"} helpText1={<>Aquí encontraras a todos los alumnos registrados en la carrera.</>}
helpTitle2={"¿Como busco un Alumno?"} helpText2={<>Solo debes dar click en el cuadro "DNI o Nombre de Alumno" y escribir el nombre o DNI del alumno que buscas.</>}
helpTitle3={""} helpText3={<></>}
/> 
*/}