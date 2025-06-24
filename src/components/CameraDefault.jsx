import { useRef, useEffect } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function CameraDefault({ position = [0, 0, 5], lookAt = [0, 0, 0] }) {
  const camRef = useRef()

  useEffect(() => {
    if (camRef.current) {
      camRef.current.lookAt(new THREE.Vector3(...lookAt))
    }
  }, [lookAt])

  return (
    <PerspectiveCamera
      ref={camRef}
      makeDefault
      position={position}
      
    />
  )
}

export default CameraDefault
