import React from 'react'
import './HigadoGraso.css'
import { Canvas, useFrame } from '@react-three/fiber'
import {
    OrbitControls,
    PerspectiveCamera,
    Environment,
} from "@react-three/drei";
import higadoModel from "./modelos-3d/HigadoG"


const HigadoGraso = () => {
  return (
            <div>
                <div className="banner">
                    <div className="banner-overlay">
                        <p>Enfermedad:</p>
                        <h1>Cirrocis Hepatica</h1>
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
                            <li><a href="https://www.mayoclinic.org/diseases-conditions/cirrhosis/symptoms-causes/syc-20351487" target="_blank">Mayo Clinic (2023) – Cirrosis</a></li>
                            <li><a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis" target="_blank">World Health Organization (2022) – Hepatitis</a></li>
                            <li><a href="https://doi.org/10.1016/j.jhep.2018.03.024" target="_blank">European Association for the Study of the Liver (2018) – EASL Clinical Practice Guidelines</a></li>
                        </ul>
    
                    </div>
    
                    <div className="model">
                        <Canvas camera={{ position: [0, 0, 1] }}>
                            <HigadoGraso scale={1} position={[0,0,0]}/>
                            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
                        </Canvas>
                    </div>
                </div>
    
            </div>
  )
}

export default HigadoGraso