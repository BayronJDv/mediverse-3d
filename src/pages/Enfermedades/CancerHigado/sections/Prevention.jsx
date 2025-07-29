import { Canvas } from '@react-three/fiber';
import './Symptoms.css';
import { PreventionScene } from '../scenes/PreventionScene'; // Importaremos la nueva escena

import { useThree, useFrame } from '@react-three/fiber'
import { useEffect } from 'react';

export function CameraLogger() {
  const { camera } = useThree()

  useFrame(() => {
    const pos = camera.position
    const rot = camera.rotation
    console.log(
      `[Camera Position] x: ${pos.x.toFixed(2)}, y: ${pos.y.toFixed(2)}, z: ${pos.z.toFixed(2)}`
    )
    console.log(
      `[Camera Rotation] x: ${rot.x.toFixed(2)}, y: ${rot.y.toFixed(2)}, z: ${rot.z.toFixed(2)}`
    )
  })

  return null
}

function SetCameraRotation({ rotation }) {
  const { camera } = useThree()

  useEffect(() => {
    camera.rotation.set(...rotation)
  }, [camera, rotation])

  return null
}


const Prevention = () => {
    return (
        <div className='cirrocis'>
            <div className="banner">
                <div className="banner-overlay">
                    <p></p>
                    {/* Texto actualizado */}
                    <h1>Cáncer de Hígado</h1>
                </div>
            </div>
            <div className="content">
                <div className="information">
                    {/* Texto actualizado */}
                    <h2>Prevención y Cuidados</h2>
                    <p>
                        <br />
                        Aunque no todos los casos de cáncer de hígado se pueden prevenir, reducir los factores de riesgo es el paso más importante. Adoptar hábitos saludables protege tu hígado y disminuye significativamente las probabilidades de desarrollar la enfermedad.
                    </p>
                    <div className="tarjetas">
                        <div className="tarjeta">
                            <h3>Alimentación Saludable</h3>
                            <p>Una dieta rica en frutas, verduras y fibra ayuda a prevenir la enfermedad del hígado graso, un factor de riesgo clave.</p>
                        </div>
                        <div className="tarjeta">
                            <h3>Evita el Alcohol</h3>
                            <p>El consumo excesivo de alcohol puede dañar el hígado seriamente y aumentar el riesgo de desarrollar cáncer de hígado.</p>
                        </div>
                        <div className="tarjeta">
                            <h3>Actividad Física Regular</h3>
                            <p>Hacer ejercicio ayuda a mantener un peso saludable, combatiendo la obesidad y el hígado graso, ambos factores de riesgo.</p>
                        </div>
                        <div className="tarjeta">
                            <h3>Vacunación y Precaución</h3>
                            <p>Vacúnate contra la hepatitis B y toma precauciones para evitar la hepatitis C, ya que ambas pueden causar cáncer de hígado.</p>
                        </div>
                    </div>
                </div>

                {/* El Canvas ahora es un contenedor para nuestra escena */}
                <div className="model">
                    <Canvas shadows camera={{ position: [-266.84, 45.19, 75.66], fov: 50 }}>
                        <PreventionScene />
                        <CameraLogger />
                    </Canvas>
                </div>
            </div>
        </div>
    );
};

export default Prevention;