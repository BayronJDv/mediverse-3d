import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function PushUpMen(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models-3d/Cirrocis/Cares-model.glb')
    const { actions, names } = useAnimations(animations, group)
    const [, get] = useKeyboardControls();
      useFrame(() => {
        const {forward,back} = get()

        if (forward) {
          group.current.scale.multiplyScalar(1.01)
        }
        if (back) {
          group.current.scale.multiplyScalar(0.99)
        }
        const pressed = get().back
    
      })

    useEffect(() => {
        if (names.length > 0 && actions[names[0]]) {
            actions[names[0]].reset().play()
        }
        // Opcional: detener la animación al desmontar
        return () => {
            if (names.length > 0 && actions[names[0]]) {
                actions[names[0]].stop()
            }
        }
    }, [actions, names])

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Push-up-men" scale={0.029}>
                    <group name="Object_4">
                        <skinnedMesh
                            name="EyeL"
                            geometry={nodes.EyeL.geometry}
                            material={materials.EyeMaterial2}
                            skeleton={nodes.EyeL.skeleton}
                        />
                        <skinnedMesh
                            name="EyeR"
                            geometry={nodes.EyeR.geometry}
                            material={materials.EyeMaterial}
                            skeleton={nodes.EyeR.skeleton}
                        />
                        <skinnedMesh
                            name="Hair"
                            geometry={nodes.Hair.geometry}
                            material={materials.HairMaterial}
                            skeleton={nodes.Hair.skeleton}
                        />
                        <skinnedMesh
                            name="Head"
                            geometry={nodes.Head.geometry}
                            material={materials.HeadMaterial}
                            skeleton={nodes.Head.skeleton}
                        />
                        <skinnedMesh
                            name="Pants"
                            geometry={nodes.Pants.geometry}
                            material={materials.PantsMaterial}
                            skeleton={nodes.Pants.skeleton}
                        />
                        <skinnedMesh
                            name="Shirt"
                            geometry={nodes.Shirt.geometry}
                            material={materials.ShirtMaterial}
                            skeleton={nodes.Shirt.skeleton}
                        />
                        <skinnedMesh
                            name="Shoes"
                            geometry={nodes.Shoes.geometry}
                            material={materials.ShoesMaterial}
                            skeleton={nodes.Shoes.skeleton}
                        />
                        <skinnedMesh
                            name="Skin"
                            geometry={nodes.Skin.geometry}
                            material={materials.SkinMaterial}
                            skeleton={nodes.Skin.skeleton}
                        />
                        <primitive object={nodes._rootJoint} />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models-3d/Cirrocis/Cares-model.glb')
