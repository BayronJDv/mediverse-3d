import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LiverCancer(props) {
  const { nodes, materials } = useGLTF('/models-3d/CancerHigado/HigadoCancerP.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Liver"
        castShadow
        geometry={nodes.Liver.geometry}
        material={materials.CancerLiverMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/CancerHigado/HigadoCancerP.glb')
