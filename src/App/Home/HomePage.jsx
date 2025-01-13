import React, { useState } from 'react'
import NavBar from '../../Components/Layouts/NavBar'
import ExtraHelp from '../../Components/Modals/ExtraHelp'
import Menu from '../../Components/Layouts/Menu'
import "./HomePage.css"


const HomePage = () => {
  const [getExtraHelp, setExtraHelp] = useState(false)


  return (
    <>
      <NavBar />
      <div className='HomePage'>
        <Menu />
        <div className='container'>
          <header>
            <h2 className='title'>Inicio</h2>
            {(getExtraHelp) ?
              <img src="/icons/exit.svg" alt="" onClick={() => { setExtraHelp(false); console.log('click') }} />
              :
              <img src="/icons/help.svg" alt="" onClick={() => { setExtraHelp(true); console.log('click') }} />
            }
          </header>
        </div>
      </div>
    </>
  )
}

export default HomePage