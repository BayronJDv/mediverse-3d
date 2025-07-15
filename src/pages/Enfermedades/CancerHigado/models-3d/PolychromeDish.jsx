import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PolychromeDish(props) {
  const { nodes, materials } = useGLTF('/models-3d/CancerHigado/PolychromeDish.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.016}>
        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
          <group name="Circle_0" rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Reverse}
            />
            <mesh
              name="Object_5"
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.Obverse}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/CancerHigado/PolychromeDish.glb')