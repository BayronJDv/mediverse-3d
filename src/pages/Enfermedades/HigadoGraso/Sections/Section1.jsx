import React, { useRef, useEffect } from 'react';  
import { useGLTF, useAnimations, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame, Canvas } from '@react-three/fiber';
import '../../FirstSection.css';

// Componente del modelo 3D
function HigadoGrasoModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models-3d/fatty-liver.glb');
  const { actions } = useAnimations(animations, group);

  // Animación de rotación continua
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  // Reproducir animación al montar el componente
  useEffect(() => {
    if (actions && actions.Rotacion) {
      actions.Rotacion.play();
    }
    return () => {
      if (actions && actions.Rotacion) {
        actions.Rotacion.stop();
      }
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

// Precargar el modelo
useGLTF.preload('/models-3d/fatty-liver.glb');

// Componente principal
const HigadoGraso = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-overlay">
          <p>Enfermedad:</p>
          <h1>Hígado Graso</h1>
        </div>
      </div>
      <div className="content">
        <div className="information">
          <h2>¿Qué es el Hígado graso?</h2>
          <p>
            <br />
            El hígado graso es una condición en la que se acumulan lípidos en exceso en los hepatocitos, pudiendo ser de origen alcohólico o no alcohólico, y que puede evolucionar a inflamación, fibrosis o cirrosis hepática.
          </p>
          <p><br /><strong>Más información:</strong></p>
          <ul>
            <li><a href="https://www.mayoclinic.org/es" target="_blank" rel="noopener noreferrer">Mayo Clinic (2023) – Hígado graso (esteatosis hepática).</a></li>
            <li><a href="https://medlineplus.gov/spanish" target="_blank" rel="noopener noreferrer">MedlinePlus(2022) – Enfermedad del hígado graso no alcohólico.</a></li>
            <li><a href="https://www.who.int/es" target="_blank" rel="noopener noreferrer">Organización Mundial de la Salud (OMS). (2023) – Trastornos hepáticos y metabólicos</a></li>
          </ul>
          <button>Ver síntomas →</button>
        </div>

        <div className="model">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={2} />
            <pointLight position={[10, 10, 10]} />
            <HigadoGrasoModel />
            <OrbitControls 
              enableZoom={true} 
              enablePan={true} 
              enableRotate={true}
              minDistance={3}
              maxDistance={10}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default HigadoGraso;