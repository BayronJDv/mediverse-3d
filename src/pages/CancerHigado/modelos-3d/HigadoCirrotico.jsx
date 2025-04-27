import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


export default function HigadoCirrotico(props) {
  const { nodes, materials } = useGLTF('/models-3d/cirrotic-liver.glb');
  const higref = useRef();


  
  return (
    <group {...props} dispose={null} >
        
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HeapticVein.geometry}
        material={materials.HeapticVeinMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeftLobe.geometry}
        material={materials.LeftLobeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RightLobe.geometry}
        material={materials.RightLobeMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/cirrotic-liver.glb')