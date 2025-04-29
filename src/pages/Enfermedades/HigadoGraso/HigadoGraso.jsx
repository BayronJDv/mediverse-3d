import React from 'react'
import './HigadoGraso.css'
import { Canvas} from '@react-three/fiber'
import {
    OrbitControls,
} from "@react-three/drei";
import HigadoModel from './modelos-3d/HigadoModel';


const HigadoGraso = () => {
  return (
            <div>
                <div className="banner">
                    <div className="banner-overlay">
                        <p>Enfermedad:</p>
                        <h1>Higado Graso</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="information">
                        <h2>¿ Ques es el Higado graso?</h2>
    
                        <p>
                            <br />
                            El hígado graso es una condición en la que se acumulan lípidos en exceso en los hepatocitos, pudiendo ser de origen alcohólico o no alcohólico, y que puede evolucionar a inflamación, fibrosis o cirrosis hepática.
                        </p>
                        <p><br /><strong>Referencias:</strong></p>
                        <ul>
                            <li><a href="https://www.mayoclinic.org/es" target="_blank">Mayo Clinic (2023) – Hígado graso (esteatosis hepática).</a></li>
                            <li><a href="https://medlineplus.gov/spanish" target="_blank">MedlinePlus(2022) –  Enfermedad del hígado graso no alcohólico.</a></li>
                            <li><a href="https://www.who.int/es" target="_blank">Organización Mundial de la Salud (OMS). (2023) – Trastornos hepáticos y metabólicos</a></li>
                        </ul>
    
                    </div>
    
                    <div className="model">
                        <Canvas camera={{ position: [1, 2, 0] }}>
                            <HigadoModel scale={0.8}/>
                            <ambientLight intensity={2} />
                            <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
                        </Canvas>
                    </div>
                </div>
    
            </div>
  )
}

export default HigadoGraso