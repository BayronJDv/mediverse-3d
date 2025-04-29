import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


export default function higadoModel(props) {
  const { nodes, materials } = useGLTF('/models-3d/fatty-liver.glb');

  
  return (
    <group {...props} dispose={null}>
    <group name="Scene">
      <mesh
        name="FattyLiver"
        castShadow
        receiveShadow
        geometry={nodes.FattyLiver.geometry}
        material={materials.FattyLiver}
      />
    </group>
  </group>
  )
}

useGLTF.preload('/models-3d/fatty-liver.glb')