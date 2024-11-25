import React, { useState } from 'react'
import './DropdownSelect.css'


const DropdownSelect = (props) => {
    const [getDropDown, setDropdown] = useState(false)

    return (
        <div className='DropdownSelect'>
            <button className='select' onClick={() => { setDropdown(!getDropDown) }}>
                Materia
                {getDropDown ?
                    <img src='/icons/arrow-down.svg'></img>
                    :
                    <img className="rotate" src='/icons/arrow-down.svg'></img>

                }
                {/* <img src='/icons/arrow-down.svg'></img> */}
            </button>
            {getDropDown &&
                <div className="options-list" >
                    <button className='option' onClick={() => { setDropdown(!getDropDown) }} >Pedagogia orientada a la educación.</button>
                    <button className='option' onClick={() => { setDropdown(!getDropDown) }} >Profesorado en educacion secundaria en infomática.</button>
                    <button className='option' onClick={() => { setDropdown(!getDropDown) }} >Tecnicatura Superior en Gestión de Empresas.</button>
                </div>
            }
        </div>
    )
}

export default DropdownSelect