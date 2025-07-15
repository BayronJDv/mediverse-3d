import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ElectronicScale(props) {
  const { nodes, materials } = useGLTF('/models-3d/CancerHigado/ElectronicScale.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          name="Object_2"
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.baseScale}
        />
        <mesh
          name="Object_3"
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.darkScale}
        />
        <mesh
          name="Object_4"
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.darkSupport}
        />
        <mesh
          name="Object_5"
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.topScale}
        />
        <mesh
          name="Object_6"
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.whiteSupport}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/ElectronicScale.glb')