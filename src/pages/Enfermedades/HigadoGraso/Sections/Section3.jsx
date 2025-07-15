import React, { useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useKeyboardControls } from '@react-three/drei'
import './Section3.css'

import Textohtml from '../Text/Textohtml'

import { Html } from '@react-three/drei'
import CameraDebugger from '../../../../components/CameraDebugger'
import CameraDefault from '../../../../components/CameraDefault'



const Section3 = () => {
    const [tooltipVisible1, setTooltipVisible1] = useState(false)
    const [tooltipVisible2, setTooltipVisible2] = useState(false)
    const [cameraPosition, setCameraPosition] = useState([0.025, -0.193, 2.0])
    const [cameraLookAt, setCameraLookAt] = useState([0.047, -0.061, -0.997])


    return (
        <div className='Higado Graso'>
            <div className="banner">
                <div className="banner-overlay">
                    <p></p>
                    <h1>esteatosis hepática</h1>
                </div>
            </div>

            <div className="content3">
                <div className="model3">
                    <Canvas shadows={true} onPointerMissed={() => (setTooltipVisible1(false), setTooltipVisible2(false))}>
                        <CameraDefault position={cameraPosition} lookAt={cameraLookAt} />
                        <CameraDebugger />
                        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} lookAt={[0, 1, 0]} />
                        
                        <Html position={[-1.7, 0.6, 0]} className='html3d'>
                            <div className="information3">
                                <h2>Tratamiento</h2>
                            </div>
                            <p className='text3d'>
                                El tratamiento para el hígado graso (esteatosis hepática) depende de su causa: puede ser no alcohólico (NAFLD) o alcohólico (AFLD). En ambos casos, el enfoque principal es modificar el estilo de vida. 
                                <br />
                                

                            </p>
                        </Html>
                    
                        
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
                            buttontext="La pérdida de peso gradual es uno de los factores más efectivos: reducir entre un 7% y 10% del peso corporal mejora significativamente la acumulación de grasa en el hígado. Para lograrlo, se recomienda una dieta equilibrada rica en vegetales, frutas con bajo índice glucémico, grasas saludables (como el aguacate y el aceite de oliva) y proteínas magras, además de evitar el azúcar, el alcohol, las harinas refinadas y los alimentos ultraprocesados."
                            position={[1.75, 0.35, 0]}
                            distanceFactor={0.8}
                        />
                        
                        <Textohtml
                            visible={tooltipVisible1}
                            buttontext="El ejercicio regular también es clave: al menos 150 minutos semanales de actividad física, como caminar, trotar o nadar, junto con ejercicios de fuerza, ayudan a reducir la grasa hepática y mejoran la sensibilidad a la insulina."
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
                

                    </Canvas>
                </div>
            </div>
        </div>
    )
}

export default Section3
