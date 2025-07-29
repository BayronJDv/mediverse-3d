import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
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
        geometry={nodes.Skin.geometry}
        material={materials.SkinMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyes.geometry}
        material={materials.EyesMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HealthSkin.geometry}
        material={materials['Hea;thSkinMaterial']}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.Healtheyes.geometry}
        material={materials.HealthEyesMaterial}
      />
    </group>
  )
} 

useGLTF.preload('/models-3d/Higadograso/DistensionAbdominal.glb')