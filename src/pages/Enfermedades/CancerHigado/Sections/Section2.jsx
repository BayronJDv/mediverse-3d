import React, { useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useKeyboardControls } from '@react-three/drei'
import Ictericia from '../modelos-3d/HigadoCancerP'
import ILights from '../Lights/Ilights'
import './Section2.css'
import Tittle from '../Text/Tittle'
import Textohtml from '../Text/Textohtml'
import Staging from '../stages/Staging'
import CameraDebugger from '../../../../components/CameraDebugger'
import CameraDefault from '../../../../components/CameraDefault'


const Section2 = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false)


    return (
        <div className='cancer-higado'>
            <div className="banner">
                <div className="banner-overlay">
                    <p></p>
                    <h1>Cáncer de Hígado</h1>
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
                        <Staging position={[0, -0.8, 0]} />
                        <Tittle tittle={"Cancer de higado"} position={[0, 0.6, 0]} />
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
                            buttontext="El cáncer hace que el hígado se agrande, desarrolle nódulos o masas visibles, cambie de color, presente superficie irregular y textura endurecida por el crecimiento descontrolado de células malignas."
                            position={[0.45, 0.35, 0]}
                            distanceFactor={0.8}
                        />


                        <Tittle tittle={"Higado cancerigeno"} position={[0.25, -0.25, 0]} />


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
                        <br />El cáncer de hígado es frecuentemente silencioso en etapas tempranas, siendo indetectable sin estudios médicos. Los síntomas aparecen cuando ya está avanzado:
                        <br />
                    </p>
                    <ul>
                        <li><strong>Dolor abdominal:</strong> especialmente en la parte superior derecha.</li>
                        <li><strong>Pérdida de peso inexplicable:</strong> sin cambios en la dieta.</li>
                        <li><strong>Fatiga extrema:</strong> cansancio persistente y debilidad.</li>
                        <li><strong>Hinchazón abdominal:</strong> distensión y sensación de llenura.</li>
                        <li><strong>Ictericia:</strong> coloración amarillenta de piel y ojos.</li>
                        <li><strong>Pérdida del apetito:</strong> falta de interés en comer.</li>
                        <li><strong>Náuseas y vómitos:</strong> malestar digestivo frecuente.</li>
                        <li><strong>Fiebre:</strong> temperatura corporal elevada sin causa aparente.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Section2





