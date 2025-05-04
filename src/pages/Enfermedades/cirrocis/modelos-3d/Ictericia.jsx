import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/Cirrocis/Ictericia-sintoma.glb')
  return (
    <group {...props} dispose={null}>
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

useGLTF.preload('/models-3d/Cirrocis/Ictericia-sintoma.glb')
