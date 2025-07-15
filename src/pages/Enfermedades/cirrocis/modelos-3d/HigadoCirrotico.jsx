import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'


export default function HigadoCirrotico(props) {
  const { nodes, materials } = useGLTF('/models-3d/Cirrocis/cirrotic-liver.glb')
  const higref = useRef()
  const [hovered, setHovered] = useState(false)
  const [, get] = useKeyboardControls();

  useFrame(() => {
    const {forward,back} = get()
    if (higref.current && !hovered) {
      higref.current.rotation.y += 0.01
      
    }
    if (forward) {
      higref.current.scale.multiplyScalar(1.01)
    }
    if (back) {
      higref.current.scale.multiplyScalar(0.99)
    }
    const pressed = get().back

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
