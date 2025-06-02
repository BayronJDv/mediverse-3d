import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

const Controls = () => {
  const [sub, get] = useKeyboardControls();



  return (
    <OrbitControls
      maxPolarAngle={1.5}
      minPolarAngle={1}
      maxAzimuthAngle={0.75}
      minAzimuthAngle={-0.75}
      enableZoom={true}
      enablePan={true}
      target={[0, 0, 0]}
    />
  );
};

export default Controls;
