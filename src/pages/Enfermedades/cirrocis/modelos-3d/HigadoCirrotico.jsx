import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function HigadoCirrotico(props) {
  const { nodes, materials } = useGLTF('/models-3d/Cirrocis/cirrotic-liver.glb')
  const higref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (higref.current && !hovered) {
      higref.current.rotation.y += 0.01
      
    }
  })

  return (
    <group
      {...props}
      dispose={null}
      ref={higref}
      castShadow
      onPointerOver={() => setHovered(true)}   // 👈 activa hover
      onPointerOut={() => setHovered(false)}   // 👈 desactiva hover
      scale={1}
    >
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

useGLTF.preload('/models-3d/Cirrocis/cirrotic-liver.glb')
