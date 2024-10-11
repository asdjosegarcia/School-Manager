import React, { useState } from 'react'
import './NoificationCard.css'


const NoificationCard = (props) => {
    const [getOpen, setOpen] = useState(false)
    return (
        <div className={`NoificationCard ${getOpen ? 'open' : ''}`} onClick={() => { setOpen(true) }} > {/* setOpen add  "open" class opening the notification */}
            <h3 className='title'>{props.title}</h3>
            <p className='text'>
                Favor de completar la documentacion.
                DNI.
                Titulo de Secundaria.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae praesentium neque aut ex maxime, cum eum sit nisi at harum veniam facere quisquam unde itaque ratione iste quasi optio illo.
            </p>
            <img onClick={(e) => { e.stopPropagation(); setOpen(!getOpen); }} className='arrow' src="/icons/arrow-down.svg" alt="" />
            {/* stopPropagation cancel NotificationCard arrow function "nClick={() => { setOpen(true) }}"   */}
        </div>
    )
}

export default NoificationCard