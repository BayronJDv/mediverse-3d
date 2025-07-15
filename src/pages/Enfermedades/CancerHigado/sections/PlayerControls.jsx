import { useFrame, useThree } from '@react-three/fiber'
import { useState, useEffect } from 'react'
import * as THREE from 'three'

export default function PlayerControls() {
  const { camera } = useThree()
  const [keysPressed, setKeysPressed] = useState({})

  useEffect(() => {
    const handleKeyDown = (e) => setKeysPressed((s) => ({ ...s, [e.key]: true }))
    const handleKeyUp = (e) => setKeysPressed((s) => ({ ...s, [e.key]: false }))

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useFrame((_, delta) => {
    const speed = 5 * delta
    const direction = new THREE.Vector3()

    if (keysPressed['w']) direction.z -= 1
    if (keysPressed['s']) direction.z += 1
    if (keysPressed['a']) direction.x -= 1
    if (keysPressed['d']) direction.x += 1

    direction.normalize().applyEuler(camera.rotation)
    camera.position.addScaledVector(direction, speed)
  })

  return null
}
