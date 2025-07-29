import React, { useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { useKeyboardControls } from '@react-three/drei'
import ILights from '../Lights/ILights'
import './Section2.css'
import Tittle from '../Text/Tittle'
import Textohtml from '../Text/Textohtml'
import CameraDebugger from '../../../../components/CameraDebugger'
import CameraDefault from '../../../../components/CameraDefault'
import { Text3D } from '@react-three/drei'

const Section2 = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false)

  return (
    <div className='cirrocis'>
      <div className="banner">
        <div className="banner-overlay">
          <p></p>
          <h1>Cirrocis Hepatica</h1>
        </div>
      </div>
      <div className="content">
        <div className="model2">
          <Canvas shadows={true} onPointerMissed={() => setTooltipVisible(false)}>
            {/* Cámara más alejada */}
            <CameraDefault
              position={[0.29, 0.2, 2]}
              lookAt={[-0.21 - 0.04 - 0.98]}
            />
            <ILights />
            <Environment preset="city" background />
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} lookAt={[0, 1, 0]} />

            {/* Texto 3D para distencion abdominal */}
            <Text3D
              position={[-0.3, 0.5, 0]}
              font="/fonts/ConsolaMono.json"
              size={0.05}
              height={0.03}
              curveSegments={32}
            >distensión abdominal
              <meshStandardMaterial color="black" />
            </Text3D>


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
              buttontext="sintomas"
              position={[0.45, 0.35, 0]}
              distanceFactor={0.8}
            />

            <Tittle tittle={"sintomas"} position={[0.25, -0.25, 0]} />
            <Tittle tittle={"sintomas"} position={[-0.25, -0.25, 0]} />

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
            <br />La distensión abdominal se refiere a la sensación de tener el abdomen hinchado o con exceso de gas, lo que puede causar incomodidad o incluso dolor.
            <br />
          </p>
          <ul>
            <li><strong>Distensión Abdominal:</strong> La distensión abdominal causada por hígado graso, también conocida como ascitis, es la acumulación de líquido en el abdomen, que puede ser una complicación de la enfermedad hepática, incluyendo el hígado graso no alcohólico (EHGNA) o la enfermedad hepática alcohólica. Esta acumulación de líquido puede causar hinchazón y malestar en el abdomen, y en algunos casos, también puede causar hinchazón en los tobillos y dificultad para respirar.</li>
            <li><strong>Fatiga:</strong> Sensación de cansancio y debilidad.</li>
            <li><strong>Dolor o molestia en la parte superior derecha del abdomen:</strong> Donde se encuentra el higado.</li>
            <li><strong>Pérdida de apetito:</strong> Falta de ganas de comer.</li>
            <li><strong>Náuseas:</strong> Sensación de malestar en el estómago.</li>
            <li><strong>Orina oscura y heces pálidas:</strong> Posible en etapas más graves.</li>
            <li><strong>Confusión o dificultad para concentrarse:</strong> En casos avanzados, por acumulación de toxinas.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Section2
