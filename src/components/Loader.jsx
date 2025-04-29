import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Html } from '@react-three/drei'

export default function Loader() {
  return (
    <Html center>
      <div style={{ fontSize: '24px', color: 'white' }}>
        Cargando...
      </div>
    </Html>
  )
}