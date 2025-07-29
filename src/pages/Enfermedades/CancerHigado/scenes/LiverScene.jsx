import React, { useState, useRef } from 'react';
import { Stage, OrbitControls, Text3D } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { LiverCancer } from '../models-3d/LiverCancer';
import { Thermometer } from '../models-3d/Thermometer';
import { PolychromeDish } from '../models-3d/PolychromeDish';
import { ElectronicScale } from '../models-3d/ElectronicScale';
import Textohtml from '../../cirrocis/Text/Textohtml';

export const LiverScene = () => {
    // Estado para controlar la visibilidad del tooltip
    const [tooltipVisible, setTooltipVisible] = useState(false);
    
    // Ref para el grupo que contiene el modelo, para poder rotarlo
    const modelRef = useRef();

    // useFrame para animar el modelo en cada fotograma
    useFrame((state, delta) => {
        // Rotación suave y continua para mostrar el modelo
        if (modelRef.current) {
            modelRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <>
            <Stage environment="apartment" intensity={0.8} shadows={{ type: 'contact', opacity: 0.5, blur: 2 }}>
                
                {/* Grupo que rota con el hígado y su hotspot */}
                <group ref={modelRef}>
                    <LiverCancer scale={1.2} />
                    <mesh
                        position={[0.4, 3.5, 0.2]}
                        onClick={(e) => {
                            e.stopPropagation();
                            setTooltipVisible(!tooltipVisible);
                        }}
                        onPointerOver={() => (document.body.style.cursor = 'pointer')}
                        onPointerOut={() => (document.body.style.cursor = 'default')}
                    >
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color="#c0392b" roughness={0.4} metalness={0.2} emissive="#7f1b1b" />
                    </mesh>
                    <Textohtml
                        visible={tooltipVisible}
                        buttontext="Un hígado con cáncer pierde su superficie lisa. Se caracteriza por nódulos (masas irregulares), un color pálido o moteado y una textura endurecida, alterando su función vital."
                        position={[0.5, 4, 0.2]}
                        distanceFactor={5.5}
                    />
                </group>

                {/* --- Modelos Decorativos en el Suelo --- */}               
                
                <Text3D
                    position={[1, -2.4, -9]}
                    font="/fonts/ConsolaMono.json"
                    size={2}
                    height={0.2} // profundidad del texto
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.03}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    Sintomas
                    <meshStandardMaterial color="red" />
                </Text3D>
                
                {/* Termómetro: Simboliza la fiebre */}
                <Thermometer 
                    position={[1.1, -2.4, 0.5]} 
                    rotation-y={-Math.PI / 6} 
                    scale={0.3} // Ajusta la escala
                />

                {/* Báscula: Simboliza la pérdida de peso */}
                <ElectronicScale 
                    position={[-4, -2, -2]} 
                    rotation-y={Math.PI / 8} 
                    scale={0.2} // Ajusta la escala
                />
                
                {/* Plato vacío: Simboliza la pérdida de apetito */}
                <PolychromeDish 
                    position={[4, -2, -5]} 
                    rotation-y={-Math.PI / 3} 
                    scale={14} // Ajusta la escala
                />

            </Stage>

            <OrbitControls makeDefault autoRotate={false} minDistance={1.5} maxDistance={5} />
        </>
    );
};