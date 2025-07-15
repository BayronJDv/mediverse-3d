import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export default function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/Higadograso/DistensionAbdominal.glb')
  const headref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (headref.current) {
      headref.current.rotation.y = Math.sin(t * 0.5) * 0.25; // entre ~-0.2 y 0.2 radianes
    }
  });
  return (
    <group {...props} dispose={null} ref={headref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_8dfeb299-79f3-4d28-9479-6fb094407514'].geometry}
        material={materials['tripo_material_8dfeb299-79f3-4d28-9479-6fb094407514']}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Higadograso/DistensionAbdominal.glb')