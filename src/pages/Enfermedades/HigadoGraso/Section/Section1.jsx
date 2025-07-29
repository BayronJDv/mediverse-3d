import React, { useMemo, useRef } from 'react'
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
    const [showInstructions, setShowInstructions] = React.useState(false);
    const [keyboardEvent, setKeyboardEvent] = React.useState(null);
    const higadoRef = useRef();

    // Estados para rotación del modelo
    const [rotation, setRotation] = React.useState([0, 0, 0]);
    // Estado para la escala del modelo
    const [scale, setScale] = React.useState(1);

    // Manejo de teclas para el modelo
    const handleKeyDown = (e) => {
        if (e.code === "KeyA") {
            setRotation(([x, y, z]) => [x, y + 0.3, z]);
            setKeyboardEvent("a");
        } else if (e.code === "KeyS") {
            setRotation([0, 0, 0]);
            setKeyboardEvent("s");
        } else if (e.code === "KeyD") {
            setRotation(([x, y, z]) => [x, y - 0.3, z]);
            setKeyboardEvent("d");
        }
    };
    const handleKeyUp = () => setKeyboardEvent(null);

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
                            onClick={() => { setShowText(showText === 1 ? null : 1); setShowInstructions(false); }}
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
                            onClick={() => { setShowText(showText === 2 ? null : 2); setShowInstructions(false); }}
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
                            onClick={() => { setShowText(showText === 3 ? null : 3); setShowInstructions(false); }}
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
                            onClick={() => { setShowText(showText === 4 ? null : 4); setShowInstructions(false); }}
                        >
                            Tratamiento
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
                                minWidth: 110
                            }}
                            onClick={() => { setShowInstructions(!showInstructions); setShowText(null); }}
                        >
                            Instrucciones
                        </button>
                    </div>
                    <KeyboardControls map={map} >
                        <Canvas
                            shadows={true}
                            tabIndex={0}
                            onKeyDown={handleKeyDown}
                            onKeyUp={handleKeyUp}
                            style={{ outline: 'none' }}
                            // Solo escala el modelo con Ctrl+rueda, sin mover la cámara ni el fondo
                            onWheel={e => {
                                if (e.ctrlKey) {
                                    e.preventDefault();
                                    setScale(prev =>
                                        Math.max(0.3, Math.min(2, prev + (e.deltaY < 0 ? 0.1 : -0.1)))
                                    );
                                }
                            }}
                            camera={{ position: [1.5, 0.7, 1.5] }} // Fija la cámara para evitar zoom del fondo
                        >
                            {/* Cámara más alejada */}
                            <PerspectiveCamera makeDefault position={[1.5, 0.7, 1.5]} />
                            {/* Iluminación principal */}
                            <ambientLight intensity={0.5} />
                            <directionalLight
                                position={[2, 4, 2]}
                                intensity={1.2}
                                castShadow
                                shadow-mapSize-width={1024}
                                shadow-mapSize-height={1024}
                                shadow-bias={-0.0001}
                            />
                            {/* Modelo 3D centrado con rotación, escala y sombra */}
                            <group position={[0, 0, 0]}>
                                <HigadoCirrotico
                                    ref={higadoRef}
                                    position={[0, 0, 0]}
                                    rotation={rotation}
                                    scale={scale}
                                    castShadow
                                    receiveShadow
                                />
                            </group>
                            {/* Sombra en el suelo */}
                            <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                                <planeGeometry args={[5, 5]} />
                                <meshPhongMaterial color="white" />
                            </mesh>
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
                            {/* Instrucciones resumidas */}
                            {showInstructions && (
                                <Html position={[0, 0.3, 0]} center>
                                    <div style={{
                                        background: '#fff',
                                        color: '#a32121',
                                        padding: 10,
                                        borderRadius: 8,
                                        border: '1px solid #888',
                                        maxWidth: 320,
                                        fontWeight: 600,
                                        textAlign: 'center'
                                    }}>
                                        Usa A/S/D para rotar o centrar el hígado.<br />
                                        Haz clic en los botones para ver información.
                                    </div>
                                </Html>
                            )}
                            {/* Eventos de teclado sobre el modelo */}
                            {keyboardEvent === "a" && (
                                <Html position={[0, 0.6, 0]} center>
                                    <div style={{
                                        background: '#fff',
                                        color: '#a32121',
                                        padding: 10,
                                        borderRadius: 8,
                                        border: '1px solid #888',
                                        maxWidth: 220,
                                        fontWeight: 600,
                                        textAlign: 'center'
                                    }}>
                                        Tecla A: Rotar hígado a la izquierda.
                                    </div>
                                </Html>
                            )}
                            {keyboardEvent === "s" && (
                                <Html position={[0, 0.6, 0]} center>
                                    <div style={{
                                        background: '#fff',
                                        color: '#a32121',
                                        padding: 10,
                                        borderRadius: 8,
                                        border: '1px solid #888',
                                        maxWidth: 220,
                                        fontWeight: 600,
                                        textAlign: 'center'
                                    }}>
                                        Tecla S: Centrar hígado.
                                    </div>
                                </Html>
                            )}
                            {keyboardEvent === "d" && (
                                <Html position={[0, 0.6, 0]} center>
                                    <div style={{
                                        background: '#fff',
                                        color: '#a32121',
                                        padding: 10,
                                        borderRadius: 8,
                                        border: '1px solid #888',
                                        maxWidth: 220,
                                        fontWeight: 600,
                                        textAlign: 'center'
                                    }}>
                                        Tecla D: Rotar hígado a la derecha.
                                    </div>
                                </Html>
                            )}
                            <Controls
                                enableZoom={false} // Desactiva zoom de cámara para que solo el modelo cambie de escala
                            />
                        </Canvas>
                    </KeyboardControls>
                </div>
            </div>

        </div>

    )
}

export default Section1