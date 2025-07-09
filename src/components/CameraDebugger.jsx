import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from 'react'

function CameraDebugger() {
  const { camera } = useThree()
  const lastPrintTime = useRef(0)

  useFrame(({ clock }) => {
    const currentTime = clock.getElapsedTime()

    if (currentTime - lastPrintTime.current >= 5) {
      const pos = camera.position
      const dir = new THREE.Vector3()
      camera.getWorldDirection(dir)

      console.log('📍 Cámara posición:', pos.x.toFixed(3), pos.y.toFixed(3), pos.z.toFixed(3))
      console.log('👁️ Cámara dirección:', dir.x.toFixed(3), dir.y.toFixed(3), dir.z.toFixed(3))

      lastPrintTime.current = currentTime
    }
  })

  return null
}
export default CameraDebugger