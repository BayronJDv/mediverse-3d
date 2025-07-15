import React, { useMemo, useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Loader, Environment, Html } from '@react-three/drei'
import { useKeyboardControls } from '@react-three/drei'
import Interferon from '../modelos-3d/Interferon'

import './Section2.css'
import Tittle from '../Text/Tittle'
import Textohtml from '../Text/Textohtml'
import Staging from '../stages/Staging'
import { useNavigate, } from 'react-router-dom'; 
import LightInterferon from '../Lights/LightInterferon'





const Section3 = () => {
    const navigate = useNavigate(); 
      const liverRef = useRef(); // Define liverRef
      const [rotate, setRotate] = useState(false); // Estado para controlar la animación
      return (
                <div>
                    
                    <div className="content">
                    <div className="information">
                        <h2>¿Qué es la Hepatitis?</h2>
    
                        <p> Los síntomas de la hepatitis no siempre aparecen de inmediato, pero cuando lo hacen, suelen incluir cansancio extremo, fiebre leve, pérdida del apetito, náuseas, vómito y dolor en la zona del hígado (parte superior derecha del abdomen). También pueden presentarse cambios visibles como la piel y los ojos amarillos (ictericia), orina muy oscura y heces claras. En algunos casos, sobre todo al inicio, la persona puede no notar ningún síntoma. </p>
    
                        <p><br /><strong>Más información:</strong></p>
                        <ul>
                            <li><a href="https://www.cdc.gov/hepatitis/abc/index.htm" target="_blank">Centers for Disease Control and Prevention (2023) – Viral Hepatitis ABCs</a></li>
                            <li><a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis" target="_blank">World Health Organization (2024) – Hepatitis Fact Sheet</a></li>
                            <li><a href="https://doi.org/10.1016/j.jhep.2018.03.024" target="_blank">European Association for the Study of the Liver (2018) – EASL Clinical Practice Guidelines</a></li>
                        </ul>
    
                        <button onClick={() => navigate('/Learn/Hepatitis/Sintomas')}>
                                Ver síntomas →
                         </button>
                    </div>
    
        
                    <div className="model">
                        <Suspense fallback={<Loader />}>
                            <Canvas camera={{ position: [0, 0, 1] }} shadows={true}>
                            <PerspectiveCamera makeDefault position={[0, 0, 1]} />
    
                            <LightInterferon />
                            <Environment
                            files="/hdris/background1.hdr" // ruta dentro de /public
                            background // esto hace que el fondo también sea visible, no solo de iluminación
                            />
                            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
                            <Interferon scale={1.5} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} animate={rotate} />
                            <Html position={[1, 0, 1.5]} transform occlude>
                            <button
                            onClick={() => setRotate(prev => !prev)}
                            style={{
                                padding: "1px 1px",
                                borderRadius: "8px",
                                background: rotate ? "green" : "crimson",
                                color: "white",
                                border: "none",
                                cursor: "pointer"
                            }}
                            >
                            {rotate ? "⏸️" : "▶️"}
                            </button>
                            </Html>
                            <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2,0]}>
                                <planeGeometry args={[5, 5]} />
                                <meshStandardMaterial color="#f0f0f0" roughness={9} metalness={0} />
                            </mesh>
                            </Canvas>
                        </Suspense>
                    </div>
    
                    </div>
        
                </div>
      )
}

export default Section3