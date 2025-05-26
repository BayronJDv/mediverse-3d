import React, { useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useKeyboardControls } from '@react-three/drei'
import Tlights from '../Lights/Tlights'
import './Section3.css'
import Tittle from '../Text/Tittle'
import Textohtml from '../Text/Textohtml'
import Staging from '../stages/Staging'
import { Html } from '@react-three/drei'
import CameraDebugger from '../../../../components/CameraDebugger'
import CameraDefault from '../../../../components/CameraDefault'

const Section3 = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false)

    return (
        <div className='cirrocis'>
            <div className="banner">
                <div className="banner-overlay">
                    <p></p>
                    <h1>Cirrocis Hepatica</h1>
                </div>
            </div>

            <div className="content3">
                <div className="model3">
                    <Canvas shadows={true} onPointerMissed={() => setTooltipVisible(false)}>
                        <CameraDefault
                            position={[0.03, 0.35, 1.79]}
                            lookAt={[0.03, -0.24, -0.97]}
                        />
                        <CameraDebugger />
                        <Tlights />
                        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} lookAt={[0, 1, 0]} />
                        <Staging position={[0, -0.8, 0]} />
                        <Html position={[-1.7, 0.5, 0]} className='html3d'>
                            <div className="information3">
                                <h2>Tratamiento</h2>
                            </div>
                            <p>
                                La cirrosis hepática es una enfermedad crónica e irreversible del hígado, lo que significa que el daño causado generalmente no se puede revertir. Sin embargo, el tratamiento se centra en detener o retrasar su progresión, manejar los síntomas y prevenir complicaciones.
                                <br />
                                Los tratamientos más comunes para la cirrosis hepática incluyen:

                            </p>
                        </Html>

                        {/* Suelo rectangular */}
                        <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                            <planeGeometry args={[6, 3]} />
                            <meshPhongMaterial color="white" />
                        </mesh>
                        <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0.2, -0.45, 0]}>
                            <circleGeometry args={[0.5, 32]} />
                            <meshPhongMaterial color="#e0e0e0" />
                        </mesh>
                             <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[1.4, -0.45, 0]}>
                            <circleGeometry args={[0.5, 32]} />
                            <meshPhongMaterial color="#e0e0e0" />
                        </mesh>
                        <Staging />

                    </Canvas>
                </div>
            </div>
        </div>
    )
}

export default Section3
