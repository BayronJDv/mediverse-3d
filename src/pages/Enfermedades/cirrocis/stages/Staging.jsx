import {
    Cloud,
    // Environment,
    Sky,
    Sparkles,
    Stars,
} from "@react-three/drei";
import { Color } from "three";

const Staging = () => {
    return (
        <>

            <Sky
                sunPosition={[0, 1, -1]}  // Sol bajo y al frente
                inclination={0.6}         // ángulo vertical (0 = zenit, 1 = horizonte)
                azimuth={0.1}             // dirección horizontal (0 a 1)
            />
        </>

    );
};

export default Staging;
