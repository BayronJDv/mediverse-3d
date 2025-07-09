import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Interferon({ animate = false, ...props }) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/models-3d/Hepatitis/Interferon1.glb')


  // Animación de rotación
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
        geometry={nodes.Hepatitis.geometry}
        material={materials.Hepatitis}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Interferon0.geometry}
        material={materials.Interferon0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Interferon2.geometry}
        material={materials.Interferon2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Interferon3.geometry}
        material={materials.Interferon3}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Hepatitis/Interferon1.glb')

