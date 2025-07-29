import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function WomanStandingAfterWorkout(props) {
  const { nodes, materials } = useGLTF('/models-3d/CancerHigado/WomanStandingAfterWorkout.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['10781_w_Juliette_2k']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['10781_w_Juliette_2k']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/CancerHigado/WomanStandingAfterWorkout.glb')