import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Ictericia from '../modelos-3d/Ictericia'
import ILights from '../Lights/ILights'
import { PerspectiveCamera } from '@react-three/drei'
import './Section2.css'

const Section2 = () => {

    return (
        <div className='cirrocis'>

            <div className="content">
                <div className="model2">
                    <Canvas camera={{ position: [0, 0, 1] }} shadows={true}>
                        <PerspectiveCamera makeDefault position={[0, 0, 1]} />
                        <ILights />
                        <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
                        <Ictericia scale={1} position={[0, 0, 0]} />
                        <mesh receiveShadow={true} rotation={[-Math.PI / 4, 0, 0]} position={[0, -0.2, 0]}>
                            <planeGeometry args={[50, 50]} />
                            <meshPhongMaterial color="white" />
                        </mesh>
                    </Canvas>
                </div>
                <div className="information2">
                    <h2>Sintomatologia</h2>

                    <p>
                        <br />Los síntomas de la cirrosis pueden ser inespecíficos o ausentes en etapas tempranas, pero en etapas avanzadas pueden incluir:
                        <br />
                    </p>

                    <ul>
                        <li><strong>Fatiga:</strong> Sensación de cansancio y debilidad.</li>
                        <li><strong>Ictericia:</strong> Amarillamiento de la piel y los ojos .</li>
                        <li><strong>Hinchazón en las piernas y abdomen:</strong> Acumulación de líquido </li>
                        <li><strong>Pérdida de apetito:</strong> Falta de ganas de comer.</li>
                        <li><strong>Náuseas:</strong> Sensación de malestar en el estómago.</li>
                        <li><strong>Picazón:</strong> Sensación de comezón en la piel, que puede ser intensa.</li>
                        <li><strong>Facilidad para el sangrado:</strong> Hemorragias fáciles, hematomas y sangrado de encías.</li>
                        <li><strong>Dolor abdominal:</strong> En la parte superior derecha, a veces.</li>
                    </ul>


                </div>


            </div>

        </div>
    )
}

export default Section2