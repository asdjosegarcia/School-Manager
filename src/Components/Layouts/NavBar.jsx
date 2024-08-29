import React from 'react'
import './NavBar.css'

const NavBar = (props) => {
    return (
        <div className='NavBar'>
            <button className='button'>
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
    )
}

export default NavBar