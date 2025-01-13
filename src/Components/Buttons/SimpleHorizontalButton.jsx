import React from 'react'
import './SimpleHorizontalButton.css'
import ArrowRightSVG from '../../SVG/ArrowRightSVG'
import { useNavigate } from 'react-router-dom';



const SimpleHorizontalButton = (props) => {
    const navigate = useNavigate();

    return (
        <button className={`SimpleHorizontalButton selectableOne ${props.className}`} onClick={() => navigate(props.link)} >
            {props.text}
            <ArrowRightSVG height={30} fill={"#696969"} />

        </button>
    )
}

export default SimpleHorizontalButton