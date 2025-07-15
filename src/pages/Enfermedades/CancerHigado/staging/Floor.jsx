export default function Floor({ position = [0, -8, 0], size = [15, 15] }) {
  return (
    <mesh 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={position} 
      receiveShadow
    >
      <planeGeometry args={size} />
      <meshStandardMaterial 
        color="#404040"
        metalness={0.3}
        roughness={0.1}
        envMapIntensity={1}
      />
    </mesh>
  );
}