import React, { useEffect, useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Loader, Environment, Html, Text3D, Text } from '@react-three/drei'
import Interferon from '../modelos-3d/Interferon' 


import './Section2.css'
import { useNavigate } from 'react-router-dom'
import LightInterferon from '../Lights/LightInterferon'

const Section3 = () => {
  const navigate = useNavigate()
  const [rotate, setRotate] = useState(false)
  const [positionX, setPositionX] = useState(0) // posición en X del modelo

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
          <h2>¿Cuál es el tratamiento de la Hepatitis?</h2>
          <p>El tratamiento de la hepatitis, especialmente en los casos de hepatitis B y C, ha incluido tradicionalmente el uso del interferón como una de las principales terapias. El interferón es una proteína que refuerza el sistema inmunológico del paciente para combatir la infección viral, ayudando a reducir la carga viral en el organismo y, en algunos casos, a lograr una respuesta virológica sostenida. Este tratamiento puede administrarse solo o en combinación con otros antivirales, dependiendo del tipo y la gravedad de la hepatitis. </p>
          <p><br /><strong>Más información:</strong></p>
          <ul>
            <li><a href="https://www.cdc.gov/hepatitis/abc/index.htm" target="_blank">CDC – Viral Hepatitis ABCs</a></li>
            <li><a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis" target="_blank">OMS – Hepatitis Fact Sheet</a></li>
            <li><a href="https://doi.org/10.1016/j.jhep.2018.03.024" target="_blank">EASL Clinical Guidelines</a></li>
          </ul>
        </div>

        <div className="model">
          <Suspense fallback={<Loader />}>
            <Canvas camera={{ position: [0, 0, 1] }} shadows={true}>
              <PerspectiveCamera makeDefault position={[0, 0, 1]} />
              <LightInterferon />
              <Environment
                files="/hdris/background1.hdr"
                background
              />
              <OrbitControls enableZoom enablePan enableRotate />
              <Text position={[0, -1, 2]} fontSize={0.5} color="red" maxWidth={5} anchorX="center" anchorY="middle">
                ¡Presiona el botón!
              </Text>
              <Text3D
                position={[-5.5, 2, 0]}
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
                Hepatitis siendo atacada por Interferón
                <meshStandardMaterial color="orange" />
              </Text3D>

              <Interferon
                scale={1.5}
                position={[positionX, 0, 0]} // <-- posición controlada
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

export default Section3
