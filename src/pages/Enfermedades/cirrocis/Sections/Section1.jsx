import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import HigadoCirrotico from '../modelos-3d/HigadoCirrotico'
import Clights from '../Lights/Clights'
import { PerspectiveCamera } from '@react-three/drei'
import '../../FirstSection.css'
import Staging from '../stages/Staging'
import { KeyboardControls } from "@react-three/drei";
import Controls from '../Controls/Controls'

const Section1 = () => {
    const map = useMemo(
        () => [
            { name: "forward", keys: ["ArrowUp", "KeyW"] },
            { name: "back", keys: ["ArrowDown", "KeyS"] },
        ],
        []
    );
    return (
        <div className='cirrocis'>
            <div className="banner">
                <div className="banner-overlay">
                    <p></p>
                    <h1>Cirrocis Hepatica</h1>
                </div>
            </div>
            <div className="content">
                <div className="information">
                    <h2>¿ Ques es la cirrosis ?</h2>

                    <p>
                        <br />
                        La cirrosis hepática es una enfermedad crónica en la que el tejido sano del hígado es reemplazado por tejido cicatricial, lo que afecta gravemente su funcionamiento. Esta alteración impide al hígado cumplir funciones vitales como la eliminación de toxinas, la producción de proteínas esenciales y la regulación de sustancias químicas en la sangre.
                    </p>
                    <p><br /><strong>Mas Informacion:</strong></p>
                    <ul>
                        <li><a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis" target="_blank">World Health Organization (2022) – Hepatitis</a></li>
                        <li><a href="https://doi.org/10.1016/j.jhep.2018.03.024" target="_blank">European Association for the Study of the Liver (2018) – EASL Clinical Practice Guidelines</a></li>
                    </ul>
                    <button>Ver Sintomatologia </button>

                </div>

                <div className="model">
                    <KeyboardControls map={map} >
                    <Canvas shadows={true}>
                        <PerspectiveCamera makeDefault position={[0, 0, 1]} />
                        <Clights />
                        <HigadoCirrotico scale={1} position={[0, 0, 0]} />
                        <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                            <planeGeometry args={[5, 5]} />
                            <meshPhongMaterial color="white" />
                        </mesh>
                        <Staging />
                        <Controls />
                    </Canvas>
                    </KeyboardControls>
                </div>
            </div>

        </div>

    )
}

export default Section1