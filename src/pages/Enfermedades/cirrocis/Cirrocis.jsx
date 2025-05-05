import React, { use } from 'react'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import './Cirrocis.css'

const Cirrocis = () => {

    return (
        <div className="cirrocis">
        <Section1  className="primera-section"/>
        <Section2 className="segunda-section"/>
        </div>
    )
}

export default Cirrocis