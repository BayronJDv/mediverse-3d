
import './Cirrocis.css'
import React from 'react'
import { useRef } from 'react';
import { Canvas,useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import HigadoCirrotico from './modelos-3d/HigadoCirrotico'
const Cirrocis = () => {

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
                    <h2>¿ Ques es la cirrocis ?</h2>
                    
                    <p>
                        <br />
                        La cirrosis hepática es una enfermedad crónica e irreversible caracterizada por la sustitución del tejido hepático sano por tejido cicatricial (fibrosis), lo que impide el funcionamiento normal del hígado. Esta condición se desarrolla como resultado de un daño hepático prolongado y puede ser causada por diversas etiologías, entre las que destacan el consumo excesivo y prolongado de alcohol, la infección crónica por los virus de la hepatitis B o C, la enfermedad del hígado graso no alcohólico, y trastornos hereditarios como la hemocromatosis o la enfermedad de Wilson. A medida que la cirrosis progresa, el tejido cicatricial bloquea el flujo sanguíneo a través del hígado y limita su capacidad para procesar nutrientes, hormonas, medicamentos y toxinas. Además, afecta la producción de proteínas esenciales como la albúmina y factores de coagulación. Esto puede conducir a complicaciones graves como hipertensión portal, ascitis, encefalopatía hepática y un mayor riesgo de carcinoma hepatocelular. El deterioro de la función hepática compromete múltiples sistemas del organismo, afectando de forma sistémica la salud del paciente.
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
                        <PerspectiveCamera makeDefault position={[0, 0, 0.8]} />
                        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 5]} intensity={1} />
                        <Environment preset="city" />
                        <HigadoCirrotico scale={1} position={[0, 0, 0]} />
                    </Canvas>
                </div>
            </div>

        </div>
    )
}

export default Cirrocis