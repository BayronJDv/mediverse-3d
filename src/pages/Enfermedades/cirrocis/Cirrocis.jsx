import React, { use } from 'react'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import './Cirrocis.css'

const Cirrocis = () => {

    return (
        
        <div className="cirrocis">

        <Section1  className="primera-section"/>
        <div className="consejos">
            <h1> ¡ Consejos !</h1>
            <div className="click">
            <img src="/images/click.png" alt="" />
            <p>presiona las esferas rojas para mas informacion !</p>   
            </div>
            <div>
            <p>Usa las teclas W y S para cambiar el tamaño de los modelos</p>
            </div>
        </div>
        <Section2 className="segunda-section"/>

        </div>
    )
}

export default Cirrocis