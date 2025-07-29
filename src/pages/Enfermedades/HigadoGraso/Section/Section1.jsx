import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import HigadoCirrotico from '../modelos-3d/HigadoModel'
import Clights from '../Lights/Clights'
import { PerspectiveCamera, Environment, Html } from '@react-three/drei'
import '../../FirstSection.css'
import { KeyboardControls } from "@react-three/drei";
import Controls from '../Controls/Controls'

const Section1 = () => {
    const map = useMemo(
        () => [
            { name: "forward", keys: ["ArrowUp", "KeyW"] },
            { name: "back", keys: ["ArrowDown", "KeyS"] },
        ],
        []
    );
    const [showText, setShowText] = React.useState(null);

    return (
        <div className='cirrocis'>
            <div className="banner">
                <div className="banner-overlay">
                    <p></p>
                    <h1>Higado Graso</h1>
                </div>
            </div>
            <div className="content">
                <div className="information">
                    <h2>¿ Que es el higado graso ?</h2>

                    <p>
El hígado graso es una condición en la que se acumulan lípidos en exceso en los hepatocitos, pudiendo ser de origen alcohólico o no alcohólico, y que puede evolucionar a inflamación, fibrosis o cirrosis hepática.
                    </p>
                    <p><br /><strong>Mas Informacion:</strong></p>
                    <ul>
                        <li><a href="https://www.mayoclinic.org/es" target="_blank">Mayo Clinic (2023) – Hígado graso (esteatosis hepática).</a></li>
                            <li><a href="https://medlineplus.gov/spanish" target="_blank">MedlinePlus(2022) –  Enfermedad del hígado graso no alcohólico.</a></li>
                            <li><a href="https://www.who.int/es" target="_blank">Organización Mundial de la Salud (OMS). (2023) – Trastornos hepáticos y metabólicos</a></li>
                    </ul>

                </div>
                <div className="model" style={{ position: 'relative' }}>
                    {/* Botones en el marco, centrados arriba del canvas */}
                    <div style={{
                        position: 'absolute',
                        top: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10,
                        display: 'flex',
                        gap: 16,
                        pointerEvents: 'auto'
                    }}>
                        <button
                            style={{
                                padding: 8,
                                borderRadius: 6,
                                border: '1px solid #888',
                                background: '#a32121',
                                color: '#fff',
                                cursor: 'pointer',
                                fontWeight: 600,
                                minWidth: 90
                            }}
                            onClick={() => setShowText(showText === 1 ? null : 1)}
                        >
                            ¿Qué es?
                        </button>
                        <button
                            style={{
                                padding: 8,
                                borderRadius: 6,
                                border: '1px solid #888',
                                background: '#a32121',
                                color: '#fff',
                                cursor: 'pointer',
                                fontWeight: 600,
                                minWidth: 90
                            }}
                            onClick={() => setShowText(showText === 2 ? null : 2)}
                        >
                            ¿Riesgos?
                        </button>
                        <button
                            style={{
                                padding: 8,
                                borderRadius: 6,
                                border: '1px solid #888',
                                background: '#a32121',
                                color: '#fff',
                                cursor: 'pointer',
                                fontWeight: 600,
                                minWidth: 90
                            }}
                            onClick={() => setShowText(showText === 3 ? null : 3)}
                        >
                            Prevención
                        </button>
                        <button
                            style={{
                                padding: 8,
                                borderRadius: 6,
                                border: '1px solid #888',
                                background: '#a32121',
                                color: '#fff',
                                cursor: 'pointer',
                                fontWeight: 600,
                                minWidth: 90
                            }}
                            onClick={() => setShowText(showText === 4 ? null : 4)}
                        >
                            Tratamiento
                        </button>
                    </div>
                    <KeyboardControls map={map} >
                        <Canvas shadows={true}>
                            {/* Cámara más alejada */}
                            <PerspectiveCamera makeDefault position={[1.5, 0.7, 1.5]} />
                            <Clights />
                            <Environment preset="sunset" background />
                            {/* Mostrar solo un texto, centrado */}
                            {showText === 1 && (
                                <Html position={[0, 0.3, 0]} center>
                                    <div style={{
                                        background: '#fff',
                                        color: '#a32121',
                                        padding: 10,
                                        borderRadius: 8,
                                        border: '1px solid #888',
                                        maxWidth: 260,
                                        fontWeight: 600,
                                        textAlign: 'center'
                                    }}>
                                        El hígado graso es la acumulación excesiva de grasa en las células del hígado.
                                    </div>
                                </Html>
                            )}
                            {showText === 2 && (
                                <Html position={[0, 0.3, 0]} center>
                                    <div style={{
                                        background: '#fff',
                                        color: '#a32121',
                                        padding: 10,
                                        borderRadius: 8,
                                        border: '1px solid #888',
                                        maxWidth: 260,
                                        fontWeight: 600,
                                        textAlign: 'center'
                                    }}>
                                        Puede evolucionar a inflamación, fibrosis o cirrosis si no se trata adecuadamente.
                                    </div>
                                </Html>
                            )}
                            {showText === 3 && (
                                <Html position={[0, 0.3, 0]} center>
                                    <div style={{
                                        background: '#fff',
                                        color: '#a32121',
                                        padding: 10,
                                        borderRadius: 8,
                                        border: '1px solid #888',
                                        maxWidth: 260,
                                        fontWeight: 600,
                                        textAlign: 'center'
                                    }}>
                                        Mantén una dieta equilibrada, haz ejercicio regularmente y evita el alcohol para prevenir el hígado graso.
                                    </div>
                                </Html>
                            )}
                            {showText === 4 && (
                                <Html position={[0, 0.3, 0]} center>
                                    <div style={{
                                        background: '#fff',
                                        color: '#a32121',
                                        padding: 10,
                                        borderRadius: 8,
                                        border: '1px solid #888',
                                        maxWidth: 260,
                                        fontWeight: 600,
                                        textAlign: 'center'
                                    }}>
                                        El tratamiento incluye pérdida de peso, alimentación saludable y actividad física constante.
                                    </div>
                                </Html>
                            )}
                            <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                                <planeGeometry args={[5, 5]} />
                                <meshPhongMaterial color="white" />
                            </mesh>
                            <Controls />
                        </Canvas>
                    </KeyboardControls>
                </div>
            </div>

        </div>

    )
}

export default Section1