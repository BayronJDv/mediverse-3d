import React from 'react'
import './Hepatitis.css'
import { Canvas, useFrame } from '@react-three/fiber'
import {
    OrbitControls,
    PerspectiveCamera,
    Environment,
} from "@react-three/drei";
import HigadoG from './modelos-3d/HigadoG'

const HigadoHepatico = () => {
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
                        <h2>¿ Ques es la cirrosis ?</h2>
    
                        <p>
                            <br />
                            La cirrosis hepática es una enfermedad crónica en la que el tejido sano del hígado es reemplazado por tejido cicatricial, lo que afecta gravemente su funcionamiento. Esta alteración impide al hígado cumplir funciones vitales como la eliminación de toxinas, la producción de proteínas esenciales y la regulación de sustancias químicas en la sangre. A medida que avanza, puede provocar complicaciones graves como acumulación de líquido en el abdomen (ascitis), confusión mental (encefalopatía hepática) e incluso cáncer de hígado.
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
                            <HigadoG scale={1} position={[0, 0, 0]} />
                        </Canvas>
                    </div>
                </div>
    
            </div>
  )
}

export default HigadoHepatico