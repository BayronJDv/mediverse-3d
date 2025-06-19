import { Environment } from '@react-three/drei'


const Clights = () => {


return (
    <>
        <ambientLight intensity={1} />
        <spotLight
            color={'red'}
            position={[0.2, 0.5, 0.6]}
            angle={Math.PI / 4}
            penumbra={1}
            intensity={8}
            castShadow
            />
           <spotLight
            color={'white'}
            position={[3, 0.5, 0.6]}
            angle={Math.PI / 4}
            penumbra={1}
            intensity={8}
            castShadow
            />


        {/*<Environment preset="city" />*/}
    </>
)
}


export default Clights




