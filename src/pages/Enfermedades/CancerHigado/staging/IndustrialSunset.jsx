import { Environment } from "@react-three/drei";

export default function IndustrialSunset() {
  return (
    <Environment
      files={"/hdris/industrial_sunset.exr"}
      background
    />
  );
}
