import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { PositionalAudio } from '@react-three/drei'


export default function PushUpMen(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models-3d/Cirrocis/Cares-model.glb')
    const { actions, names } = useAnimations(animations, group)
    const [, get] = useKeyboardControls();
    const [paused, setPaused] = useState(true)
    const AudioRef = useRef()


    useFrame(() => {
        const { forward, back } = get()
        if (forward) {
            group.current.scale.multiplyScalar(1.01)
        }
        if (back) {
            group.current.scale.multiplyScalar(0.99)
        }
    })

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key.toLowerCase() === 'e') {
                setPaused(prev => !prev)
                if (AudioRef.current) {
                    if (paused) {
                        AudioRef.current.play(); // Si estaba pausado, reproduce
                    } else {
                        AudioRef.current.pause(); // Si estaba reproduciendo, pausa
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [paused])

    useEffect(() => {
        if (names.length > 0 && actions[names[0]]) {
            if (paused) {
                actions[names[0]].paused = true
                if (group.current) {
                    group.current.position.y += 0.85 // Baja el modelo al pausar
                }
            } else {
                actions[names[0]].reset().play()
                actions[names[0]].paused = false
                if (group.current) {
                    group.current.position.y = 0 // Vuelve a la posición normal
                }
            }
        }
        return () => {
            if (names.length > 0 && actions[names[0]]) {
                actions[names[0]].stop()
            }
        }
    }, [actions, names, paused])

    return (
        <group ref={group} {...props} dispose={null} castShadow={true} receiveShadow={true}>
            <group name="Scene">
                <group name="Push-up-men" scale={0.029}>
                    <group name="Object_4">
                        <skinnedMesh
                            name="EyeL"
                            castShadow
                            receiveShadow
                            geometry={nodes.EyeL.geometry}
                            material={materials.EyeMaterial2}
                            skeleton={nodes.EyeL.skeleton}
                        />
                        <skinnedMesh
                            name="EyeR"
                            castShadow
                            receiveShadow
                            geometry={nodes.EyeR.geometry}
                            material={materials.EyeMaterial}
                            skeleton={nodes.EyeR.skeleton}
                        />
                        <skinnedMesh
                            name="Hair"
                            castShadow
                            receiveShadow
                            geometry={nodes.Hair.geometry}
                            material={materials.HairMaterial}
                            skeleton={nodes.Hair.skeleton}
                        />
                        <skinnedMesh
                            name="Head"
                            castShadow
                            receiveShadow
                            geometry={nodes.Head.geometry}
                            material={materials.HeadMaterial}
                            skeleton={nodes.Head.skeleton}
                        />
                        <skinnedMesh
                            name="Pants"
                            castShadow
                            receiveShadow
                            geometry={nodes.Pants.geometry}
                            material={materials.PantsMaterial}
                            skeleton={nodes.Pants.skeleton}
                        />
                        <skinnedMesh
                            name="Shirt"
                            castShadow
                            receiveShadow
                            geometry={nodes.Shirt.geometry}
                            material={materials.ShirtMaterial}
                            skeleton={nodes.Shirt.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            receiveShadow
                            name="Shoes"
                            geometry={nodes.Shoes.geometry}
                            material={materials.ShoesMaterial}
                            skeleton={nodes.Shoes.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            receiveShadow
                            name="Skin"
                            geometry={nodes.Skin.geometry}
                            material={materials.SkinMaterial}
                            skeleton={nodes.Skin.skeleton}
                        />
                        <primitive object={nodes._rootJoint} />
                    </group>
                </group>
                <group>
                    <PositionalAudio
                    ref={AudioRef}
                    loop
                    url="/sounds/Breath.mp3"
                    distance={5}
                />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models-3d/Cirrocis/Cares-model.glb')
