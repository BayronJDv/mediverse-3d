
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TratamientoRed(props) {
  const { nodes, materials } = useGLTF('/models-3d/Cirrocis/Tratamiento-red.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SaltShaker.geometry}
        material={materials.SaltShakerMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HotDog.geometry}
        material={materials.HotDogMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Botella.geometry}
        material={materials.BotellaMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cap.geometry}
        material={materials['CapMaterial.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Label1.geometry}
        material={materials.LabelMaterial1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Labelmaterial.geometry}
        material={materials['LabelMaterial1.001']}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Cirrocis/Tratamiento-red.glb')