import React from 'react'
import '../FirstSection.css'
import { Canvas, useFrame } from '@react-three/fiber'
import {
    OrbitControls,
    PerspectiveCamera,
    Environment,
} from "@react-three/drei";
import HepatitisCell from './modelos-3d/HepatitisCell'

const Hepatitis = () => {
  return (
            <div>
                <div className="banner">
                    <div className="banner-overlay">
                        <p>Enfermedad:</p>
                        <h1>Hepatitis</h1>
                    </div>
                </div>
                <div className="content">
                <div className="information">
                    <h2>¿Qué es la Hepatitis?</h2>

                        <p>
                            <br />
                                La hepatitis es una enfermedad caracterizada por la inflamación del hígado, comúnmente causada por infecciones virales (como los virus de hepatitis A, B y C), aunque también puede deberse al consumo de alcohol, medicamentos o enfermedades autoinmunes. Esta condición puede ser aguda o crónica y, en casos avanzados, derivar en cirrosis o cáncer de hígado. Los síntomas pueden variar, incluyendo fatiga, pérdida de apetito, náuseas, dolor abdominal y coloración amarillenta de la piel o los ojos (ictericia) <a href="https://www.cdc.gov/hepatitis/abc/index.htm" target="_blank">(CDC, 2023)</a>. La detección temprana y el tratamiento adecuado son clave para prevenir complicaciones <a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis" target="_blank">(OMS, 2024)</a>.
                        </p>

                    <p><br /><strong>Más información:</strong></p>
                    <ul>
                        <li><a href="https://www.cdc.gov/hepatitis/abc/index.htm" target="_blank">Centers for Disease Control and Prevention (2023) – Viral Hepatitis ABCs</a></li>
                        <li><a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis" target="_blank">World Health Organization (2024) – Hepatitis Fact Sheet</a></li>
                        <li><a href="https://doi.org/10.1016/j.jhep.2018.03.024" target="_blank">European Association for the Study of the Liver (2018) – EASL Clinical Practice Guidelines</a></li>
                    </ul>

                    <button> Ver síntomas → </button>
                </div>

    
                    <div className="model">
                    <Canvas camera={{ position: [0.5, 3, 1] }}>
            
                        <OrbitControls />
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[5, 5, 5]} intensity={2}
                            castShadow 
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                            shadow-camera-near={0.5}
                            shadow-camera-far={20}
                            shadow-camera-left={-10}
                            shadow-camera-right={10}
                            shadow-camera-top={10}
                            shadow-camera-bottom={-10}
                        />
                        <HepatitisCell scale={1.5} />
                    </Canvas>
                    </div>
                </div>
    
            </div>
  )
}

export default Hepatitis