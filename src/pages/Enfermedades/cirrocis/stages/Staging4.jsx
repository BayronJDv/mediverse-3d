import {
  Cloud,
  Environment,
  Sky,
  Sparkles,
  Stars,
} from "@react-three/drei";
import { Color } from "three";

const Staging4 = () => {
  return (
    <Environment
      files={[
      "px.png",
      "nx.png",
      "py.png",
      "ny.png",
      "pz.png",
      "nz.png",
      ]}
      path="/staging/cubemaps/park/"
      ground={{
      height: 20,
      radius: 100,
      scale: 5,
      }}
      background
    />

  );
};

export default Staging4;
