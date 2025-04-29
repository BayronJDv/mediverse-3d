import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function HepatitisCell(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/models-3d/Hepatitis/HepatitisCell.glb')

  // Añadir rotación animada
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hepatitis.geometry}
        material={materials.Hepatitis}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Hepatitis/HepatitisCell.glb')
