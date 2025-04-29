import React, { useRef, useState } from 'react'
import './Home.css'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";import Man from './modelos-3d/Man'

const Home = () => {
  const [hovered, setHovered] = useState(false) // <-- ESTADO NUEVO
  const cameraRef = useRef()
  const handleHoverEnter = () => {
    setHovered(true)
    if (cameraRef.current) {
      cameraRef.current.position.set(-0.08067293145609158, 0.33362512386645166,  0.4116972324675976)
      cameraRef.current.lookAt(0, 0, 0)
    }
  }

  const handleHoverLeave = () => {
    setHovered(false)
    if (cameraRef.current) {
      cameraRef.current.position.set(1.6781618761622565, 0.30770260321047405, 1.7243970878182067)
      cameraRef.current.lookAt(0, 0, 0)
    }
  }


  return (
    <div className='home'>

      <div className="canva">
        <Canvas >
          <PerspectiveCamera makeDefault position={[1.6781618761622565, 0.30770260321047405, 1.7243970878182067]} ref={cameraRef}/>
          <OrbitControls />
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 10]} intensity={2} />
          <Man scale={1} hovered={hovered} />
        </Canvas>
      </div>

      <div className="seccion-bienvenida">
        <h1 className='aviso'>Patologías del Hígado: Una Guía 3D Interactiva </h1>
        <p>Explora el hígado humano con modelos 3D detallados y explicaciones claras. Ideal para reforzar conocimientos en anatomía, fisiología y enfermedades hepáticas.</p>
        <br />
        <button 
          className='botongrande'
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
          
        > Aprende Ahora </button>
      </div>
    </div>
  )
}

export default Home