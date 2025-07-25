import React, { useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useKeyboardControls } from '@react-three/drei'
import Ictericia from '../modelos-3d/Ictericia'
import ILights from '../Lights/ILights'
import './Section2.css'
import Tittle from '../Text/Tittle'
import Textohtml from '../Text/Textohtml'
import Staging from '../stages/Staging'
import CameraDebugger from '../../../../components/CameraDebugger'
import CameraDefault from '../../../../components/CameraDefault'
import { Text3D } from '@react-three/drei'

const Section2 = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false)

    return (
        <div className='cirrocis'>
            <div className="banner">
                <div className="banner-overlay">
                    <p></p>
                    <h1>Cirrocis Hepatica</h1>
                </div>
            </div>
            <div className="content">
                <div className="model2">
                    <Canvas shadows={true} onPointerMissed={() => setTooltipVisible(false)}>
                        <CameraDefault
                            position={[0.29, 0.06, 1.35]}
                            lookAt={[-0.21 -0.04 -0.98]}
                        />
                        <ILights />
                        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} lookAt={[0, 1, 0]} />
                        <Staging position={[0, -0.8, 0]} />

                        {/* Texto 3D para Ictericia */}
                        <Text3D
                            position={[-0.3, 0.5, 0]}
                            font="/fonts/ConsolaMono.json"
                            size={0.08}
                            height={0.03}
                            curveSegments={32}
                        >ICTERICIA
                            <meshStandardMaterial color="black" />
                        </Text3D>
                        <Ictericia scale={1} position={[0, 0, 0]} />

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
                            buttontext="La ictericia se produce por la acumulación de bilirrubina en la sangre, una sustancia amarilla que proviene de la descomposición de los glóbulos rojos. Esto ocurre cuando el hígado no puede procesarla adecuadamente."
                            position={[0.45, 0.35, 0]}
                            distanceFactor={0.8}
                        />

                        <Tittle tittle={"cirrocis"} position={[0.25, -0.25, 0]} />
                        <Tittle tittle={"Normal"} position={[-0.25, -0.25, 0]} />

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
                        <br />Los síntomas de la cirrosis pueden ser inespecíficos o ausentes en etapas tempranas, pero en etapas avanzadas pueden incluir:
                        <br />
                    </p>
                    <ul>
                        <li><strong>Fatiga:</strong> Sensación de cansancio y debilidad.</li>
                        <li><strong>Ictericia:</strong> Amarillamiento de la piel y los ojos.</li>
                        <li><strong>Hinchazón en las piernas y abdomen:</strong> Acumulación de líquido.</li>
                        <li><strong>Pérdida de apetito:</strong> Falta de ganas de comer.</li>
                        <li><strong>Náuseas:</strong> Sensación de malestar en el estómago.</li>
                        <li><strong>Picazón:</strong> Sensación de comezón en la piel.</li>
                        <li><strong>Facilidad para el sangrado:</strong> Hemorragias fáciles, hematomas, sangrado de encías.</li>
                        <li><strong>Dolor abdominal:</strong> En la parte superior derecha, a veces.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Section2
