import React from 'react'
import './NavBar.css'
import Menu from './Menu'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const NavBar = (props) => {
    const navigate = useNavigate();
    const [getMenu, setMenu] = useState(false);

    return (
        <>
            <div className='NavBar'>
                <div className='container'>
                    <button className='button' onClick={() => { setMenu(true) }} >
                        <img src="/icons/menu.svg" alt="" />
                    </button>
                    <h1 className='title'>
                        IES 0000
                    </h1>
                    <button className='button' onClick={() => navigate('/notifications')}>
                        <span className='notification-span'>{'9+'}</span>
                        <img src="/icons/bell.svg" alt="" />
                    </button>

                </div>
            </div>
            <Menu getMenu={getMenu} setMenu={setMenu} />
        </>
    )
}

export default NavBar