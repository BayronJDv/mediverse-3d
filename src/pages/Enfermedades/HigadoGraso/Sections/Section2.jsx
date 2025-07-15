import React, { useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useKeyboardControls } from '@react-three/drei'
import DistensionAbdominal from '../modelos-3d/DistensionAbdominal'
import ILights from '../Lights/ILights'
import  { useRef, useEffect } from 'react';  
import { useGLTF, useAnimations} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import './SintomasHigadoG.css'

import Textohtml from '../Text/Textohtml'

import CameraDebugger from '../../../../components/CameraDebugger'
import CameraDefault from '../../../../components/CameraDefault'


const Section2 = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false)

    return (
        <div className='HigadoG'>
            <div className="banner">
                <div className="banner-overlay">
                    <p></p>
                    <h1>Higado Graso</h1>
                </div>
            </div>
            <div className="content">
                <div className="model2">
                    <Canvas shadows={true} onPointerMissed={() => setTooltipVisible(false)}>
                        <CameraDebugger />
                        <CameraDefault
                            position={[0.29, 0.06, 1.35]}
                            lookAt={[-0.21 -0.04 -0.98]}
                        />
                        <ILights />
                        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} lookAt={[0, 1, 0]} />
                       
                       
                        <DistensionAbdominal scale={1} position={[0, 0, 0]} />

                        {/* Zona clickeable para mostrar tooltip */}
                        <mesh
                            position={[0.40, 0.3, 0]}
                            onClick={(e) => {
                                e.stopPropagation();
                                setTooltipVisible(!tooltipVisible);
                            }}
                            onPointerOver={(e) => {
                                document.body.style.cursor = 'pointer';
                            }}
                            onPointerOut={(e) => {
                                document.body.style.cursor = 'default';
                            }}
                        >
                            <sphereGeometry args={[0.03, 10, 10]} />
                            <meshStandardMaterial color="rgb(127, 27, 27)" />

                        </mesh>
                       
                        {/* Tooltip condicional */}
                        <Textohtml
                            visible={tooltipVisible}
                            buttontext="La distensión abdominal se refiere a la sensación de tener el abdomen hinchado o con exceso de gas, lo que puede causar incomodidad o incluso dolor."
                            position={[0.45, 0.35, 0]}
                            distanceFactor={0.8}
                        />



                        {/* Suelo */}
                        <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                            <planeGeometry args={[50, 50]} />
                            <meshPhongMaterial color="white" />
                        </mesh>
                    </Canvas>
                </div>

                <div className="information2">
                    <h2>Sintomatología</h2>
                    <p>
                        <br />El hígado graso (esteatosis hepática) puede ser asintomático en sus primeras etapas, pero a medida que progresa, pueden aparecer varios síntomas. Aquí te presento los más comunes:
                        <br />
                    </p>
                    <ul>
                        <li><strong>Distensión Abdominal:</strong> La distensión abdominal causada por hígado graso, también conocida como ascitis, es la acumulación de líquido en el abdomen, que puede ser una complicación de la enfermedad hepática, incluyendo el hígado graso no alcohólico (EHGNA) o la enfermedad hepática alcohólica. Esta acumulación de líquido puede causar hinchazón y malestar en el abdomen, y en algunos casos, también puede causar hinchazón en los tobillos y dificultad para respirar.</li>
                        <li><strong>Fatiga:</strong> Sensación de cansancio y debilidad.</li>
                        <li><strong>Dolor o molestia en la parte superior derecha del abdomen:</strong> Donde se encuentra el higado.</li>
                        <li><strong>Pérdida de apetito:</strong> Falta de ganas de comer.</li>
                        <li><strong>Náuseas:</strong> Sensación de malestar en el estómago.</li>
                        <li><strong>Orina oscura y heces pálidas:</strong> Posible en etapas más graves.</li>
                        <li><strong>Confusión o dificultad para concentrarse:</strong> En casos avanzados, por acumulación de toxinas.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Section2
