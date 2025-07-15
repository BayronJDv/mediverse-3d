import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import LiverCancerCell from '../models-3d/LiverCancerCell';
import IndustrialSunset from '../staging/IndustrialSunset';
import Floor from '../staging/Floor';
import TextBasic from '../texts/TextBasic';
import NormalLight from '../lights/NormalLight';


/**
 * Componente React que muestra una sección informativa
 * sobre el cáncer de hígado e incluye un lienzo 3D interactivo.
 *
 * Estructura del componente:
 * - Banner con título de la enfermedad.
 * - Información descriptiva y lista de referencias externas.
 * - Botón de navegación para ver síntomas.
 * - Canvas 3D con controles y modelo de célula de cáncer hepático.
 *
 * @returns {JSX.Element} Sección completa de Cáncer de Hígado.
 */
const Definition = () => {
  return (
    <div className="cancer-higado">


      {/* Banner superior con imagen y overlay de texto */}
      <div className="banner">
        <div className="banner-overlay">
          <p>Enfermedad:</p>
          <h1>Cáncer de Hígado</h1>
        </div>
      </div>


      {/* Contenedor principal: información y modelo 3D */}
      <div className="content">


        {/* Sección de información textual */}
        <div className="information">
          <h2>¿Qué es el Cáncer de Hígado?</h2>
          <p>
            El cáncer de hígado, principalmente carcinoma hepatocelular, ocurre cuando las células hepáticas desarrollan mutaciones que provocan un crecimiento descontrolado y formación de tumores. Entre sus factores de riesgo destacan la cirrosis, la infección crónica por hepatitis B o C, y el consumo excesivo de alcohol.
          </p>
          <p><strong>Más información:</strong></p>
          <ul>
            <li>
              <a href="https://www.cancer.gov/espanol/tipos/higado/que-es-cancer-de-higado" target="_blank" rel="noopener noreferrer">
                Instituto Nacional del Cáncer – ¿Qué es el cáncer de hígado?
              </a>
            </li>
            <li>
              <a href="https://www.cancer.org/es/cancer/tipos/cancer-de-higado/acerca/que-es-cancer-de-higado.html" target="_blank" rel="noopener noreferrer">
                American Cancer Society – ¿Qué es el cáncer de hígado?
              </a>
            </li>
          </ul>
        </div>


        {/* Sección del lienzo 3D */}
        <div className="model">
            <Canvas camera={{ position: [12, 3, 0] }}>
                {/* Controles de órbita para interacción del usuario */}
                <OrbitControls />
                {/* Iluminación ambiental para uniformidad */}
                <ambientLight intensity={1.5} />
                {/* Iluminación direccional para sombras y profundidad */}
                <NormalLight />

                <IndustrialSunset />
                <TextBasic 
                    text="Célula Cancerosa" 
                    position={[5, -1.5, 0]} 
                    size={1.2}
                    color="#ffffff"
                    outlineColor="#000000"
                    outlineWidth={0.08}
                />
                
                {/* Texto secundario opcional */}
                <TextBasic 
                    text="Hígado" 
                    position={[5, -3, 0]} 
                    size={0.8}
                    color="#ffcc00"
                    outlineColor="#330000"
                    outlineWidth={0.05}
                />
                {/* Piso con reflexión y posición configurable */}
                <Floor position={[0, -8, 0]} size={[25, 65]} />
                {/* Modelo 3D de célula de cáncer hepático con escala ajustada */}
                <LiverCancerCell scale={1.5} />
            </Canvas>
        </div>
      </div>
    </div>
  );
};


export default Definition;