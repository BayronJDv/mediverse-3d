import { useGLTF } from '@react-three/drei'

export function SurgeryRoom(props) {
  const { nodes, materials } = useGLTF('/models-3d/CancerHigado/SurgeryRoom.glb')
  return (
    <group {...props} dispose={null}>
      <group name="OP_Mittefbx" scale={0.01}>
        <group
          name="OP_Mitte"
          position={[1.187, 270.993, 7.919]}
          rotation={[-0.419, 0.731, 0.285]}
          scale={33.906}>
          <mesh
            name="OP_Mitte_Mitte_OP_Tex3_0"
            castShadow
            geometry={nodes.OP_Mitte_Mitte_OP_Tex3_0.geometry}
            material={materials.Mitte_OP_Tex3}
          />
          <mesh
            name="OP_Mitte_Mitte_OP_Tex2_0"
            castShadow
            geometry={nodes.OP_Mitte_Mitte_OP_Tex2_0.geometry}
            material={materials.Mitte_OP_Tex2}
          />
          <mesh
            name="OP_Mitte_Mitte_OP_Tex1_0"
            castShadow
            geometry={nodes.OP_Mitte_Mitte_OP_Tex1_0.geometry}
            material={materials.Mitte_OP_Tex1}
          />
          <mesh
            name="OP_Mitte_Mitte_OP_Tex4_0"
            castShadow
            geometry={nodes.OP_Mitte_Mitte_OP_Tex4_0.geometry}
            material={materials.Mitte_OP_Tex4}
          />
          <mesh
            name="OP_Mitte_Mitte_OP_Tex4_0_1"
            castShadow
            geometry={nodes.OP_Mitte_Mitte_OP_Tex4_0_1.geometry}
            material={materials.Mitte_OP_Tex4}
          />
        </group>
        <mesh
          name="Window_Door__0"
          castShadow
          geometry={nodes.Window_Door__0.geometry}
          material={materials.Window_Door__0}
          position={[-613.708, 302.808, -19.805]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.957, 105.416, 75.399]}
        />
        <mesh
          name="Window1__0"
          castShadow
          geometry={nodes.Window1__0.geometry}
          material={materials.Window_Door__0}
          position={[573.561, 328.377, 65.911]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.914, 100.708, 95.375]}
        />
        <mesh
          name="Window2__0"
          castShadow
          geometry={nodes.Window2__0.geometry}
          material={materials.Window_Door__0}
          position={[573.561, 325.814, -161.278]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.914, 100.708, 95.375]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/CancerHigado/SurgeryRoom.glb')
