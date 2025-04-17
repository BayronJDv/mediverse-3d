import React from 'react'
import './Home.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Bounds } from '@react-three/drei'
import Man from './modelos-3d/Man'

const Home = () => {
  
  return (
    <div className='home'>

      <div className="canva">
        <Canvas camera={{ position: [0.5, 3, 1] }}>
          <OrbitControls />
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 10]} intensity={2} />
          <Man scale={1.5} />
        </Canvas>
      </div>

      <div className="seccion-bienvenida">
        <h1 className='aviso'>Anatomía y Patologías del Hígado: Una Guía 3D Interactiva </h1>
        <p>Explora el hígado humano con modelos 3D detallados y explicaciones claras. Ideal para reforzar conocimientos en anatomía, fisiología y enfermedades hepáticas.</p>
        <br />
        <button className='botongrande'>Aprende ahora </button>
      </div>
    </div>
  )
}

export default Home