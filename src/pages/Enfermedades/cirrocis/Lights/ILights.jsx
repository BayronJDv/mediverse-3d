import { Environment } from '@react-three/drei'
import React, { use } from 'react'
import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'
import { useHelper } from '@react-three/drei'

const ILights = () => {
  const lightDicRef = useRef()
  //useHelper(lightDicRef, DirectionalLightHelper, { color: "red" })
  return (
    
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 0, 1]}
        intensity={5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />     
      {/*<Environment preset= "city"/>*/}
    </>
  )
}

export default ILights