// Liver.jsx
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei' 
import { useFrame } from '@react-three/fiber'

export default function Liver({ animate = false, ...props }) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/models-3d/Hepatitis/HepatitisLiver.glb')

  useFrame(() => {
    if (animate && groupRef.current) {
      groupRef.current.rotation.y += 0.05
    }
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LiverVein.geometry}
        material={materials.VenaHigado}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Liver.geometry}
        material={materials.Liver}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Hepatitis/HepatitisLiver.glb')
