import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function TratamientoLiver(props) {
  const { nodes, materials } = useGLTF('/models-3d/Cirrocis/Tratamiento-liver.glb')
  const meshRef = useRef()
  const groupRef = useRef()
  const [isSick, setIsSick] = useState(true)

  const textures = useTexture({
    healthyColor: '/models-3d/Cirrocis/textures/HealthColor.jpg',
    sickColor: '/models-3d/Cirrocis/textures/SickColor.png',
    healthyNormal: '/models-3d/Cirrocis/textures/HealtNormal.png',
    sickNormal: '/models-3d/Cirrocis/textures/SickNormal.png', 
    roughness: '/models-3d/Cirrocis/textures/Roughness.jpg',
  })

  useEffect(() => {
    Object.entries(textures).forEach(([key, tex]) => {
      if (tex) {
        tex.flipY = false
        tex.encoding = key.includes('Color') ? THREE.sRGBEncoding : THREE.LinearEncoding
      }
    })
  }, [textures])

  // Evento de teclado para alternar textura con 'E'
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'e') {
        setIsSick(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (meshRef.current) {
      const material = meshRef.current.material
      material.map = isSick ? textures.sickColor : textures.healthyColor
      material.normalMap = isSick ? textures.sickNormal : textures.healthyNormal
      material.roughnessMap = textures.roughness
      material.needsUpdate = true
    }
  }, [isSick, textures])

  // Animación de flotación
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.06
    }
  })

  const handlePointerEnter = () => setIsSick(false)
  const handlePointerLeave = () => setIsSick(true)

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Liver.geometry}
        material={materials.Livermaterial}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Cirrocis/Tratamiento-liver.glb')
