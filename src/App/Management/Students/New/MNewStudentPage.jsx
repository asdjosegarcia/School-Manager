import React, { useState } from 'react'
import './MNewStudentPage.css'
import NavBar from '../../../../Components/Layouts/NavBar'
import HeaderTitle from '../../../../Components/Layouts/HeaderTitle'
import DropdownSelect from '../../../../Components/Inputs/DropdownSelect'
import MainButton from '../../../../Components/Buttons/MainButton'
import BigGenericModal from '../../../../Components/Modals/BigGenericModal'
import CircleCheckSVG from '../../../../SVG/CircleCheckSVG'

const MNewStudentPage = () => {
    const [getBigGenericModal, setBigGenericModal] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        // here we can use form data
    };
    return (
        <div className='MNewStudentPage'>
            <NavBar  role={"management"}/>
            <HeaderTitle title={"Registrar Alumno"}
                helpTitle1={"¿Qué maneja esta seccion?"} helpText1={<>Aquí ingresaras los datos de los alumos que ingresen a la carrera uno a uno.</>}
                helpTitle2={"¿Como relleno el formulario?"} helpText2={<>Solo debes ingresar los datos de el nuevo alumno segun lo requiera cada casilla. <br />En caso de ingresar algún dato de manera incorrecta, la aplicación te lo hará saber. </>}
                helpTitle3={""} helpText3={<></>}
            />
            <section className='main'>
                {getBigGenericModal &&
                    <BigGenericModal
                         icon={<CircleCheckSVG height={100} className={"image"} fill="#17C500"/>}
                        title={"Registro Exitoso"}
                        text={<>Dale estos datos a<br />{"nombre Apellido"}</>}
                        user={"123456789"}
                        password={"123456789"}
                        close={()=>setBigGenericModal()}
                    />
                }

                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="registration-start">Carrera</label>
                        <DropdownSelect />

                    </div>
                    <div className="form-group">
                        <label htmlFor="registration-start">Nombre</label>
                        {/* <DropdownSelect></DropdownSelect> */}
                        <input
                            type="text"
                            id="registration-start"
                            placeholder="Julian"
                        // onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="registration-start">Apellido</label>
                        <input
                            type="text"
                            id="registration-start"
                            placeholder="Aguirrez"
                        // onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="registration-start">DNI</label>
                        <input
                            type="text"
                            id="registration-start"
                            placeholder="987654321"
                        // onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="registration-start">Fecha de Nacimiento</label>
                        <input
                            type="text"
                            id="registration-start"
                            placeholder="DD/MM/AAAA"
                        // onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='buttons-container'>
                        <MainButton text={"Cancelar"} className={"button-cancel"} />
                        <MainButton text={"Registrar"} className={"button-register"} funct={()=>{setBigGenericModal(true)}} />
                    </div>
                </form>
            </section>


        </div>
    )
}

export default MNewStudentPage