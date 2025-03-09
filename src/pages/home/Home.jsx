import React from 'react'
import './Home.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Bounds } from '@react-three/drei'
import Man from './modelos-3d/Man'

const Home = () => {
  return (
    <div className='home'>
      <div className="canva">
        <Canvas camera={{ position: [2, 2, 2] }}>
          <OrbitControls />
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 10]} intensity={2} />
          <Man scale={1.3} />
        </Canvas>
      </div>
      <div className="elboton">
        <h1 className='aviso'>Mas alla de los <br></br> lbros: sumergete <br></br> en la realidad 3D <br></br>  de tu cuerpo </h1>
        <br />
        <button className='botongrande'>Aprende ahora </button>
      </div>
    </div>
  )
}

export default Home