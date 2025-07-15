import { Text } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const TextBasic = ({ 
  text, 
  position = [0, 0, 0], 
  size = 1, 
  color = "#ffffff",
  outlineColor = "#000000",
  outlineWidth = 0.05,
  lookAtCamera = true 
}) => {
  const textRef = useRef()

  // Hacer que el texto siempre mire hacia la cámara
  useFrame(({ camera }) => {
    if (lookAtCamera && textRef.current) {
      textRef.current.lookAt(camera.position)
    }
  })

  return (
    <Text
      ref={textRef}
      position={position}
      color={color}
      anchorX="center"
      anchorY="center"
      fontSize={size}
      outlineColor={outlineColor}
      outlineWidth={outlineWidth}
      font="/fonts/RobotoFlex.ttf"
      letterSpacing={0.02}
      lineHeight={1.2}
    >
      {text}
    </Text>
  )
}

export default TextBasic