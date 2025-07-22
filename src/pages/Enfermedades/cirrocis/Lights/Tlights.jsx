import { Environment } from '@react-three/drei'

const Clights = () => {

return (
    <>
        <ambientLight intensity={0.5} />
              <directionalLight
        position={[1, 1, -1]}
        intensity={2}
        color={"#ffae42"}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      /> 
        <spotLight
            color={'red'}
            position={[0.2, 0.5, 0.6]}
            angle={Math.PI / 4}
            penumbra={1}
            intensity={5}
            castShadow
            />
           <spotLight
            color={'white'}
            position={[3, 0.5, 0.6]}
            angle={Math.PI / 4}
            penumbra={1}
            intensity={3}
            castShadow
            />

        <Environment preset= "city"/>
    </>
)
}

export default Clights

