import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

const Controls = () => {
  const [sub, get] = useKeyboardControls();

  useEffect(() => {
    return sub(
      (state) => state.jump,
      (pressed) => console.log("jump", pressed)
    );
  }, [sub]);

  useFrame(() => {
    const { forward, back, left, right } = get();
    if (forward || back || left || right) {
      console.log("moving");
    }

    // eslint-disable-next-line no-unused-vars
    const pressed = get().back;
  });

  return (
    <OrbitControls
      maxPolarAngle={1.75}
      minPolarAngle={1}
      maxAzimuthAngle={0.75}
      minAzimuthAngle={-0.75}
      enableZoom={true}
      enablePan={false}
      target={[0, 0, 0]}
    />
  );
};

export default Controls;
