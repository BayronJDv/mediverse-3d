
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TratamientoRed(props) {
  const { nodes, materials } = useGLTF('/models-3d/Cirrocis/Tratamiento-red.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.019, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SaltShaker_SaltShaker.geometry}
          material={materials.SaltShakerMaterial}
          position={[0, -0.008, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Label.geometry}
        material={materials.labelMaterial}
        position={[-0.027, 0.002, 0]}
        scale={0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bottle.geometry}
        material={materials.Bottlematerial}
        position={[-0.027, 0.002, 0]}
        scale={0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cap.geometry}
        material={materials.CapMaterial}
        position={[-0.027, 0.113, 0]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.005}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Cirrocis/Tratamiento-red.glb')
