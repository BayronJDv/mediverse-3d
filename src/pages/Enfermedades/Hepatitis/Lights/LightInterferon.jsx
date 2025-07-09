import React from 'react'

const LightInterferon = () => {
  return (
    <>
      <ambientLight intensity={0.15} color={"#ffffff"} />
      <spotLight
        position={[3, 5, 3]}
        angle={0.3}
        penumbra={0.4}
        intensity={2}
        color={"#ffffff"}
        castShadow
      />
    </>
  )
}

export default LightInterferon
