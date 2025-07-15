import React, { useEffect, useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Loader, Environment, Html, Text3D, Text } from '@react-three/drei'
import Liver from '../modelos-3d/Liver'

import './Section2.css'
import { useNavigate } from 'react-router-dom'
import LightLiver from '../Lights/LightLiver'

const Section2 = () => {
  const navigate = useNavigate()
  const liverRef = useRef()
  const [rotate, setRotate] = useState(false)
  const [positionX, setPositionX] = useState(0) // NUEVO estado para mover el hígado

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
      <div className="content">
        <div className="information">
          <h2>¿Cuáles son los síntomas de la Hepatitis?</h2>
          <p>Los síntomas de la hepatitis no siempre aparecen de inmediato, pero cuando lo hacen, suelen incluir cansancio extremo, fiebre leve, pérdida del apetito, náuseas, vómito y dolor en la zona del hígado (parte superior derecha del abdomen). También pueden presentarse cambios visibles como la piel y los ojos amarillos (ictericia), orina muy oscura y heces claras. En algunos casos, sobre todo al inicio, la persona puede no notar ningún síntoma.</p>
          <p><br /><strong>Más información:</strong></p>
          <ul>
            <li><a href="https://www.mayoclinic.org/es/diseases-conditions/hepatitis-a/symptoms-causes/syc-20367007" target="_blank">Mayo Clinic (2024) – Hepatitis A</a></li>
            <li><a href="https://medlineplus.gov/spanish/hepatitis.html" target="_blank">MedlinePlus (2024) – Hepatitis</a></li>
            <li><a href="https://www.cun.es/enfermedades-tratamientos/enfermedades/hepatitis-virales" target="_blank">Clínica Universidad de Navarra – Hepatitis Virales</a></li>
          </ul>
        </div>

        <div className="model">
          <Suspense fallback={<Loader />}>
            <Canvas camera={{ position: [0, 0, 1] }} shadows={true}>
              <PerspectiveCamera makeDefault position={[0, 0, 1]} />
              <LightLiver />
              <Environment files="/hdris/background1.hdr" background />
              <OrbitControls enableZoom enablePan enableRotate />

              <Text position={[0, -1, 2]} fontSize={0.5} color="red" maxWidth={2} anchorX="center" anchorY="middle">
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
                Hígado Inflamado
                <meshStandardMaterial color="orange" />
              </Text3D>

              <Liver
                scale={1.5}
                position={[positionX, 0, 0]} // APLICA MOVIMIENTO EN X
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

              <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
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

export default Section2
