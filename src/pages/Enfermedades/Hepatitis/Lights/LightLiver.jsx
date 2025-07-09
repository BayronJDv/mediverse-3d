import React from 'react'

const LightLiver = () => {
  return (
    <>
      {/* Luz ambiental fría suave pero visible */}
      <ambientLight intensity={0.4} color={"#b3e5fc"} />

      {/* Luz puntual azul intensa para resaltar partes específicas */}
      <pointLight
        position={[1.5, 2, 1]}
        intensity={3}
        color={"#4fc3f7"}
        castShadow
      />

      {/* Luz direccional con un tono azul brillante para profundidad */}
      <directionalLight
        position={[-2, 4, 2]}
        intensity={2}
        color={"#00bcd4"}
        castShadow
      />

      {/* Luz puntual secundaria para contraste (luz fría blanca) */}
      <pointLight
        position={[-2, 2, -2]}
        intensity={1.5}
        color={"#e1f5fe"}
      />
    </>
  )
}

export default LightLiver
