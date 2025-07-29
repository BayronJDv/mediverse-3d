import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import HigadoCirrotico from '../modelos-3d/HigadoModel'
import Clights from '../Lights/Clights'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import './Section4.css'
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
    return (

        <div className='cirrocis'>
            <div className="banner">
                <div className="banner-overlay">
                    <p></p>
                    <h1>Cirrocis Hepatica</h1>
                </div>
            </div>
            <div className="content">
                <div className="information">
                    <h2>Prevencion y cuidados</h2>

                    <p>
                        <br />
                        Estos son los 4 tips principales para la prevención y cuidado del hígado graso:
                    </p>
                    <div className="tarjetas">

                        <div className="tarjeta">
                            <h3>Alimentación balanceada
</h3>
                            <p>Evita azúcares, harinas, ultraprocesados. Prioriza vegetales, frutas, integrales, pescado, legumbres.
</p>
                        </div>

                        <div className="tarjeta">
                            <h3> Ejercicio regularmente
</h3>
                            <p>Mínimo 30 minutos de actividad física diaria. Aeróbicos y fuerza reducen grasa hepática y mejoran salud.</p>
                        </div>

                        <div className="tarjeta">
                            <h3> Evita el alcohol</h3>
                            <p>El alcohol daña directamente el hígado, incluso en pequeñas cantidades.</p>
                        </div>

                        <div className="tarjeta">
                            <h3> Chequeos médicos de rutina
</h3>
                            <p>Controla tu peso, azúcar en sangre, colesterol y triglicéridos con exámenes regulares.</p>
                        </div>

                    </div>

                </div>

                <div className="model">
                    <KeyboardControls map={map} >
                    <Canvas shadows={true}>
                        {/* Cámara más alejada y fondo diferente */}
                        <PerspectiveCamera makeDefault position={[1.5, 0.7, 1.5]} />
                        <Clights />
                        <Environment preset="forest" background />
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