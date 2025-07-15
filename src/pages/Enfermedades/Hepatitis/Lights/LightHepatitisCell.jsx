import React from 'react'

const LightHepatitisCell = () => {
  return (
    <>
      <ambientLight intensity={0.2} color={"#ffd89b"} />
      <directionalLight
        position={[2, 3, 5]}
        intensity={1.5}
        color={"#ff7e5f"}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  )
}

export default LightHepatitisCell
