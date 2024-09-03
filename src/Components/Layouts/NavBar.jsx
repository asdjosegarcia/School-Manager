import React from 'react'
import './NavBar.css'
import Menu from './Menu'
import { useState } from 'react'


const NavBar = (props) => {
    const [getMenu, setMenu] = useState(false);

    return (
        <>
            <div className='NavBar'>
                <button className='button' onClick={()=>{setMenu(true)}} >
                    <img src="/icons/menu.svg" alt="" />
                </button>
                <h1 className='title'>
                    IES 0000
                </h1>
                <button className='button'>
                    <span className='notification-span'>{'9+'}</span>
                    <img src="/icons/bell.svg" alt="" />
                </button>

            </div>
             <Menu getMenu={getMenu} setMenu={setMenu}/> 
        </>
    )
}

export default NavBar