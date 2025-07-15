import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Thermometer(props) {
  const { nodes, materials } = useGLTF('/models-3d/CancerHigado/Thermometer.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Termometerfbx" scale={0.01}>
        <group
          name="Prop_Termometer"
          position={[175.455, 46.487, 0]}
          rotation={[-1.571, 0, 0]}
          scale={100}>
          <mesh
            name="Prop_Termometer_Material002_0"
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer_Material002_0.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Prop_Termometer_Material001_0"
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="Prop_Termometer_Material006_0"
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer_Material006_0.geometry}
            material={materials['Material.006']}
          />
          <mesh
            name="Prop_Termometer_Material003_0"
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer_Material003_0.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Prop_Termometer_Material004_0"
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Prop_Termometer002__0"
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer002__0.geometry}
            material={materials['Prop_Termometer.002__0']}
            position={[2.763, 0, 0.414]}
          />
          <mesh
            name="Prop_Termometer004_Material005_0"
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer004_Material005_0.geometry}
            material={materials['Material.005']}
            position={[1.144, 0, 0.228]}
          />
          <mesh
            name="Prop_Termometer003_Display_0"
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer003_Display_0.geometry}
            material={materials.Display}
            position={[0.549, 0, 0.255]}
          />
          <mesh
            name="Prop_Termometer001__0"
            castShadow
            receiveShadow
            geometry={nodes.Prop_Termometer001__0.geometry}
            material={materials['Prop_Termometer.002__0']}
            position={[2.763, 0, 0.328]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[-1.041, 1.041, 1]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/CancerHigado/Thermometer.glb')