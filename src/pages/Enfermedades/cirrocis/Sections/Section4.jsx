import React, { useMemo,useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import PLights from '../Lights/PLights'
import { PerspectiveCamera } from '@react-three/drei'
import './Section4.css'
import Staging4 from '../stages/Staging4'
import { KeyboardControls } from "@react-three/drei";
import Controls from '../Controls/Controls'
import PushUpMen from '../modelos-3d/PushUpMen'
import CameraDebugger from '../../../../components/CameraDebugger'
import CameraDefault from '../../../../components/CameraDefault'


const Section4 = () => {
    const map = useMemo(
        () => [
            { name: "forward", keys: ["ArrowUp", "KeyW"] },
            { name: "back", keys: ["ArrowDown", "KeyS"] },
            { name: "action", keys: ["KeyE"] },
        ],
        []
    );
    const [cameraPosition, setCameraPosition] = useState([1.241, 0.7, 1.770])
    const [cameraLookAt, setCameraLookAt] = useState([-0.570, 0.5, -0.816])


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
                        Prevenir la cirrosis es posible adoptando hábitos de vida saludables. A continuación, te mostramos cómo cuidar tu hígado de forma sencilla y efectiva.
                    </p>
                    <div className="tarjetas">

                        <div className="tarjeta">
                            <h3> Alimentación saludable</h3>
                            <p>Incluye frutas, verduras y proteínas magras. Evita alimentos ultraprocesados y azúcares en exceso.</p>
                        </div>

                        <div className="tarjeta">
                            <h3> Evita el alcohol</h3>
                            <p>El consumo frecuente de alcohol es una de las principales causas de cirrosis. Reducirlo o eliminarlo es clave.</p>
                        </div>

                        <div className="tarjeta">
                            <h3> Medicamentos con precaución</h3>
                            <p>Consulta siempre con un médico antes de tomar medicamentos, incluso si son de venta libre.</p>
                        </div>

                        <div className="tarjeta">
                            <h3> Actividad física</h3>
                            <p>Haz ejercicio regularmente para mantener un peso saludable y reducir el riesgo de daño hepático.</p>
                        </div>

                    </div>

                </div>

                <div className="model">
                    <KeyboardControls map={map} >
                        <Canvas shadows={true}>
                            <CameraDefault position={cameraPosition} lookAt={cameraLookAt} />
                            <CameraDebugger />
                            <PLights />
                            {/* Piso circular verde */}
                            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow={true}>
                                <circleGeometry args={[10, 64]} />
                                <meshPhongMaterial color="white" />
                            </mesh>
                            <PushUpMen />
                            <Staging4 />
                            <Controls enableZoom={false} />
                        </Canvas>
                    </KeyboardControls>
                </div>
            </div>

        </div>

    )
}

export default Section4