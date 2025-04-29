import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './CancerHigado.css';
import LiverCancerCell from './modelos-3d/LiverCancerCell.jsx';


const CancerHigado = () => {
  return (
    <div className="cancer-page">
      <div className="banner">
        <div className="banner-overlay">
          <p>Enfermedad:</p>
          <h1>Cáncer de Hígado</h1>
        </div>
      </div>


      <div className="content-section">
        <div className="text-side">
          <h2>¿Qué es el cáncer de hígado?</h2>
          <p>
            El cáncer de hígado es una enfermedad caracterizada por el crecimiento descontrolado de células malignas en el hígado.
            El tipo más común es el carcinoma hepatocelular (HCC), que suele asociarse a enfermedades crónicas como cirrosis,
            hepatitis B o C y consumo excesivo de alcohol. Los síntomas pueden incluir dolor abdominal, pérdida de peso,
            fatiga y ictericia. Detectarlo en etapas tempranas mejora significativamente el pronóstico y las opciones de tratamiento.
          </p>
          <div className="button-group">
            <button className="next-button" onClick={() => window.location.href = "#sintomas"}>
              Ver síntomas →
            </button>
          </div>
        </div>


        <div className="canvas-side">
          <figure className="canvas-figure">
            <Canvas camera={{ position: [15, 3, 1] }}>
              <OrbitControls />
              <ambientLight intensity={1.5} />
              <directionalLight
                position={[5, 5, 5]}
                intensity={2}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.5}
                shadow-camera-far={20}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />
              <LiverCancerCell scale={1.5} />
            </Canvas>
            <figcaption className="canvas-caption">
              Modelo 3D de una célula hepática cancerígena (carcinoma hepatocelular).
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};


export default CancerHigado;
