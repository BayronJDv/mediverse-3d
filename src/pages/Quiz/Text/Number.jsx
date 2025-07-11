import { Text3D } from '@react-three/drei'
import React from 'react'


const Number = ({ text, position = [0, 1.5, 0] }, size = 0.1) => {
    return (
        <Text3D
            position={position}
            font="/fonts/Numbers.json"
            size={size}
            height={0.05}
            curveSegments={32}
        >   
            {text}
        </Text3D>
    )
}

export default Number
