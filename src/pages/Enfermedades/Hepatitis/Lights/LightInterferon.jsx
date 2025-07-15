import React from 'react'

const LightInterferon = () => {
  return (
    <>
      {/* Luz ambiental púrpura suave */}
      <ambientLight intensity={0.4} color="#b388eb" />

      {/* Luz puntual morada intensa */}
      <pointLight
        position={[1.5, 2, 1]}
        intensity={3}
        color="#9d4edd"
        castShadow
      />

      {/* Luz direccional violeta brillante para volumen */}
      <directionalLight
        position={[-2, 4, 2]}
        intensity={2}
        color="#7b2cbf"
        castShadow
      />

      {/* Luz secundaria más clara para contraste */}
      <pointLight
        position={[-2, 2, -2]}
        intensity={1.5}
        color="#e0aaff"
      />
    </>
  )
}

export default LightInterferon


