import { Environment } from '@react-three/drei'

const Clights = () => {

return (
    <>
        <ambientLight intensity={2} />
        <spotLight
            color="red"
            intensity={3}
            position={[-2, 5, 0]}
            angle={0.5}
            penumbra={0.5}
            castShadow
            target-position={[-2, 0, 0]}
        />
        <spotLight
            color="green"
            intensity={3}
            position={[2, 5, 0]}
            angle={0.5}
            penumbra={0.5}
            castShadow
            target-position={[2, 0, 0]}
        />
        {/*<Environment preset="city" />*/}
    </>
)
}

export default Clights

