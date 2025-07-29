import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import HigadoCirrotico from '../modelos-3d/HigadoModel'
import Clights from '../Lights/Clights'
import { PerspectiveCamera, Environment, Text3D } from '@react-three/drei'
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
          <h2>Tratamiento</h2>

          <p>
            <br />
            El tratamiento para el hígado graso (esteatosis hepática) depende de su causa: puede ser no alcohólico (NAFLD) o alcohólico (AFLD). En ambos casos, el enfoque principal es modificar el estilo de vida.

          </p>
          <p><br /><strong>Mas Informacion:</strong></p>
          <ul>
            <li>La pérdida de peso gradual es uno de los factores más efectivos: reducir entre un 7% y 10% del peso corporal mejora significativamente la acumulación de grasa en el hígado. Para lograrlo, se recomienda una dieta equilibrada rica en vegetales, frutas con bajo índice glucémico, grasas saludables (como el aguacate y el aceite de oliva) y proteínas magras, además de evitar el azúcar, el alcohol, las harinas refinadas y los alimentos ultraprocesados."
            </li>
            <li>El ejercicio regular también es clave: al menos 150 minutos semanales de actividad física, como caminar, trotar o nadar, junto con ejercicios de fuerza, ayudan a reducir la grasa hepática y mejoran la sensibilidad a la insulina.</li>
          </ul>

        </div>

        <div className="model">
          <KeyboardControls map={map} >
            <Canvas shadows={true}>
              {/* Cámara más alejada */}
              <PerspectiveCamera makeDefault position={[1.5, 0.7, 1.5]} />
              <Clights />
              <Environment preset="warehouse" background />
              {/* Texto 3D para distencion abdominal */}
              <Text3D
                position={[-0.5, 0.5, 0]}
                font="/fonts/ConsolaMono.json"
                size={0.10}
                height={0.03}
                curveSegments={32}
              >Tratamiento
                <meshStandardMaterial color="black" />
              </Text3D>

              

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