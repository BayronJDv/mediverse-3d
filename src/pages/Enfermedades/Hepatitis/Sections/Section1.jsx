import React, { useMemo, Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import HepatitisCell from '../modelos-3d/HepatitisCell'
import LightHepatitisCell from '../Lights/LightHepatitisCell'

import '../../FirstSection.css'
import Staging from '../stages/Staging'
import { KeyboardControls, Text, Text3D } from "@react-three/drei"
import Controls from '../Controls/Controls'
import { OrbitControls, PerspectiveCamera, Loader, Environment, Html } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

const Section1 = () => {
  const [rotate, setRotate] = useState(false)
  const [positionX, setPositionX] = useState(0) // Estado para mover el modelo

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'w' || e.key === 'W') {
        setPositionX((prev) => prev + 0.1)
      } else if (e.key === 's' || e.key === 'S') {
        setPositionX((prev) => prev - 0.1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div>
      <div className="banner">
        <div className="banner-overlay">
          <p>Enfermedad:</p>
          <h1>Hepatitis</h1>
        </div>
      </div>
      <div className="content">
        <div className="information">
          <h2>¿Qué es la Hepatitis?</h2>
          <p><br />
            La hepatitis es una enfermedad caracterizada por la inflamación del hígado, comúnmente causada por infecciones virales (como los virus de hepatitis A, B y C), aunque también puede deberse al consumo de alcohol, medicamentos o enfermedades autoinmunes. Esta condición puede ser aguda o crónica y, en casos avanzados, derivar en cirrosis o cáncer de hígado. Los síntomas pueden variar, incluyendo fatiga, pérdida de apetito, náuseas, dolor abdominal y coloración amarillenta de la piel o los ojos (ictericia) <a href="https://www.cdc.gov/hepatitis/abc/index.htm" target="_blank">(CDC, 2023)</a>. La detección temprana y el tratamiento adecuado son clave para prevenir complicaciones <a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis" target="_blank">(OMS, 2024)</a>.
          </p>

          <p><br /><strong>Más información:</strong></p>
          <ul>
            <li><a href="https://www.cdc.gov/hepatitis/abc/index.htm" target="_blank">Centers for Disease Control and Prevention (2023) – Viral Hepatitis ABCs</a></li>
            <li><a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis" target="_blank">World Health Organization (2024) – Hepatitis Fact Sheet</a></li>
            <li><a href="https://doi.org/10.1016/j.jhep.2018.03.024" target="_blank">European Association for the Study of the Liver (2018) – EASL Clinical Practice Guidelines</a></li>
          </ul>
        </div>

        <div className="model">
          <Suspense fallback={<Loader />}>
            <Canvas camera={{ position: [0, 0, 1] }} shadows={true}>
              <PerspectiveCamera makeDefault position={[0, 0, 1]} />

              <LightHepatitisCell />
              <Environment
                files="/hdris/background1.hdr"
                background
              />
              <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

              <Text
                position={[0, -1, 2]}
                fontSize={0.5}
                color="red"
                maxWidth={2}
                anchorX="center"
                anchorY="middle"
              >
                ¡Presiona el botón!
              </Text>

              <Text3D
                position={[-2.5, 2, 0]}
                font="/fonts/ConsolaMono.json"
                size={0.4}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.03}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
              >
                Celula Hepatitis
                <meshStandardMaterial color="orange" />
              </Text3D>

              <HepatitisCell
                scale={1.5}
                position={[positionX, 0, 0]} // Aplicamos el movimiento aquí
                rotation={[0, -Math.PI / 2, 0]}
                animate={rotate}
              />

              <Html position={[1, 0, 1.5]} transform occlude>
                <button
                  onClick={() => setRotate(prev => !prev)}
                  style={{
                    padding: "1px 1px",
                    borderRadius: "8px",
                    background: rotate ? "green" : "crimson",
                    color: "white",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  {rotate ? "⏸️" : "▶️"}
                </button>
              </Html>

              <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial color="#f0f0f0" roughness={9} metalness={0} />
              </mesh>
            </Canvas>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Section1
