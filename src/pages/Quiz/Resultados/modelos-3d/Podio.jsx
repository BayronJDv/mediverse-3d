
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'



export default function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/Quiz/podio.glb')
  const medalRef = useRef()

    useFrame((state) => {
    if (medalRef.current) {
      const t = state.clock.getElapsedTime()
      medalRef.current.position.y = 1 + Math.sin(t * 2) * 0.05 // Flotación suave
      medalRef.current.rotation.y = -0.055 + Math.sin(t) * 0.1 // Rotación leve
    }
  })
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={medalRef}
        castShadow
        receiveShadow
        geometry={nodes.GoldMedal.geometry}
        material={materials.MedalMaterial}
        position={[0.003, 0.945, -0.041]}
        rotation={[-1.092, -0.055, -0.061]}
        scale={3.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Podio.geometry}
        material={materials.PodioMaterial}
        position={[-0.001, 0.265, 0.006]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Quiz/podio.glb')
