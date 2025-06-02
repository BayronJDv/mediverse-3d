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
import TratamientoRed from '../modelos-3d/TratamientoRed'
import TratamientoLiver from '../modelos-3d/TratamientoLiver'

const Section3 = () => {
    const [tooltipVisible1, setTooltipVisible1] = useState(false)
    const [tooltipVisible2, setTooltipVisible2] = useState(false)
    const [cameraPosition, setCameraPosition] = useState([0.025, -0.193, 2.0])
    const [cameraLookAt, setCameraLookAt] = useState([0.047, -0.061, -0.997])


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
                    <Canvas shadows={true} onPointerMissed={() => (setTooltipVisible1(false), setTooltipVisible2(false))}>
                        <CameraDefault position={cameraPosition} lookAt={cameraLookAt} />
                        <CameraDebugger />
                        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} lookAt={[0, 1, 0]} />
                        <Staging  />
                        <Html position={[-1.7, 0.6, 0]} className='html3d'>
                            <div className="information3">
                                <h2>Tratamiento</h2>
                            </div>
                            <p className='text3d'>
                                La cirrosis hepática es una enfermedad crónica e irreversible del hígado, lo que significa que el daño causado generalmente no se puede revertir. Sin embargo, el tratamiento se centra en detener o retrasar su progresión, manejar los síntomas y prevenir complicaciones.
                                <br />
                                

                            </p>
                        </Html>
                        <TratamientoRed position={[0.2, -0.45, 0]} scale={1.5} 
                        onClick={(e) => {
                               e.stopPropagation()
                            }}                                
                        />
                        <TratamientoLiver position={[1.35, -0.1, 0]} scale={1.5}/>
                        <Staging position={[0, -0.8, 0]} />
                        <mesh
                            position={[0.2, 0.3, 0]}
                            onClick={(e) => {
                                e.stopPropagation();
                                setTooltipVisible1(!tooltipVisible1);
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

                            <mesh
                            position={[1.7, 0.3, 0]}
                            onClick={(e) => {
                                e.stopPropagation();
                                setTooltipVisible2(!tooltipVisible2);
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

                      <Textohtml
                            visible={tooltipVisible2}
                            buttontext="En los casos mas graves el transaplante de hígado es la única opción de tratamiento. Este procedimiento implica reemplazar el hígado dañado por un hígado sano de un donante."
                            position={[1.75, 0.35, 0]}
                            distanceFactor={0.8}
                        />
                        <Tlights />

                        <Textohtml
                            visible={tooltipVisible1}
                            buttontext="Para pacientes con cirrosis, es crucial evitar el alcohol, principal causa de daño hepático, y limitar estrictamente el sodio presente en alimentos procesados y sal, ya que contribuye a la retención de líquidos.."
                            position={[0.25, 0.35, 0]}
                            distanceFactor={0.8}
                        />

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
