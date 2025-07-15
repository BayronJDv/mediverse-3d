import React from 'react'
import { Html } from '@react-three/drei'
import './Nombres.css'
const Nombres = ({ buttontext, position, distanceFactor, imgurl }) => {
    return (
        <Html
            distanceFactor={distanceFactor}
            position={position}
            wrapperClass="Textohtml"
        >
            <div className="cardn">
                <img 
                className="avatar"
                src={imgurl ? imgurl : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}  alt="Avatar"/>
                <p className="h1canvas">{buttontext}</p>
            </div>
        </Html>
    )
}

export default Nombres