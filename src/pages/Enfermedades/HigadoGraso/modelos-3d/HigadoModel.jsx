import React from 'react'
import { useGLTF } from '@react-three/drei'


export default function HigadoModel(props) {
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
