import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Sky, OrbitControls, useTexture, Text3D } from '@react-three/drei';
import * as THREE from 'three';

import { WomanStandingAfterWorkout } from '../models-3d/WomanStandingAfterWorkout';

export function PreventionScene() {
    // --- ESTADO ---
    const [sunPosition, setSunPosition] = useState(new THREE.Vector3(100, -5, -50));
    const [isNight, setIsNight] = useState(false);
    const [animationTimeOffset, setAnimationTimeOffset] = useState(0);

    // --- REFS ---
    const sound = useRef();
    const clock = useRef(new THREE.Clock());

    // --- CARGA DE ASSETS (Texturas y Sonido) ---
    const [colorMap, displacementMap, normalMap, roughnessMap] = useTexture([
        '/textures/terrain/Ground037_1K-JPG_Color.jpg',
        '/textures/terrain/Ground037_1K-JPG_Displacement.jpg',
        '/textures/terrain/Ground037_1K-JPG_NormalGL.jpg',
        '/textures/terrain/Ground037_1K-JPG_Roughness.jpg',
    ]);

    const listener = new THREE.AudioListener();
    const buffer = useLoader(THREE.AudioLoader, '/sounds/sunrise.mp3');

    // --- LÓGICA DEL SONIDO ---
    const playSound = () => {
        if (sound.current?.isPlaying) {
            sound.current.stop();
        }
        if (buffer) {
            sound.current.setBuffer(buffer);
            sound.current.setLoop(false);
            sound.current.setVolume(0.5);
            sound.current.play();
        }
    };

    // Reproducir sonido al cargar la escena Y LIMPIAR AL SALIR
    useEffect(() => {
        playSound();

        // Esta es la función de limpieza. Se ejecutará cuando el componente se desmonte.
        return () => {
            if (sound.current?.isPlaying) {
                sound.current.stop();
            }
        };
    }, [buffer]); // Se ejecuta cuando el buffer está listo y limpia al desmontar.

    useMemo(() => {
        [colorMap, displacementMap, normalMap, roughnessMap].forEach(texture => {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(20, 20);
        });
    }, [colorMap, displacementMap, normalMap, roughnessMap]);

    // --- LÓGICA DE REINICIO ---
    const handleSceneReset = () => {
        if (!isNight) return;

        setAnimationTimeOffset(clock.current.getElapsedTime());
        playSound();
        setIsNight(false);
    };

    // --- BUCLE DE ANIMACIÓN ---
    useFrame(() => {
        const time = clock.current.getElapsedTime() - animationTimeOffset;
        
        const newY = -5 + Math.sin(time * 0.08) * 20;
        const newX = 100 - Math.cos(time * 0.08) * 25;
        setSunPosition(new THREE.Vector3(newX, newY, sunPosition.z));

        if (newY < -4 && !isNight) {
            setIsNight(true);
        }
    });

    return (
        <>
            <primitive object={listener} />
            <audio ref={sound} args={[listener]} />

            <ambientLight intensity={0.2} />

            <directionalLight
                position={sunPosition}
                intensity={2.5}
                castShadow
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
                shadow-camera-far={200}
                shadow-camera-left={-100}
                shadow-camera-right={100}
                shadow-camera-top={100}
                shadow-camera-bottom={-100}
                shadow-normalBias={0.05} 
            />

            <Sky
                sunPosition={sunPosition}
                mieCoefficient={0.005}
                mieDirectionalG={0.95}
                rayleigh={0.5}
                turbidity={10}
                azimuth={0.25}
            />

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[2200, 2200, 512, 512]} />
                <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    displacementMap={displacementMap}
                    displacementScale={1.5}
                />
            </mesh>
            
            <WomanStandingAfterWorkout
                position={[0, 0.5, 0]}
                rotation={[0, 90, 0]}
                scale={0.7}
                onClick={handleSceneReset}
                onPointerOver={() => { if (isNight) document.body.style.cursor = 'pointer'; }}
                onPointerOut={() => { document.body.style.cursor = 'auto'; }}
            />

            <Text3D
                position={[-180, 4, -9]}
                rotation={[-0.54, -1.25, -0.52]}
                font="/fonts/ConsolaMono.json"
                size={10}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={1.03}
                bevelSize={0.2}
            >
                Ejercitate
                <meshStandardMaterial color="red" />
            </Text3D>

            {isNight && (
                <Text3D
                    position={[-190, 20, -9]}
                    rotation={[-0.54, -1.25, -0.52]} // Rotado para mirar hacia la cámara inicial
                    font="/fonts/ConsolaMono.json"
                    size={2.5}
                    height={0.2}
                >
                    Haz clic en la chica para reiniciar el amanecer
                    <meshStandardMaterial color="red" />
                </Text3D>
            )}

            <OrbitControls makeDefault />
        </>
    );
}