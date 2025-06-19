import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import LiverCancerCell from '../modelos-3d/LiverCancerCell';
import Clights from '../Lights/Clights';
import { PerspectiveCamera } from '@react-three/drei';
import '../../FirstSection.css';
import Staging from '../stages/Staging';
import { KeyboardControls } from '@react-three/drei';
import Controls from '../Controls/Controls';

/**
 * Componente principal de la sección sobre el cáncer de hígado.
 * Incluye un banner informativo y una visualización 3D interactiva.
 */
const Section1 = () => {
  /**
   * Mapeo de controles de teclado para interacción con el modelo 3D.
   */
  const map = useMemo(
    () => [
      { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
      { name: 'back', keys: ['ArrowDown', 'KeyS'] },
    ],
    []
  );

  return (
    <div className='cancer-higado'>
      {/* Sección superior con banner y título */}
      <div className="banner">
        <div className="banner-overlay">
          <p></p>
          <h1>Cáncer de Hígado</h1>
        </div>
      </div>

      <div className="content">
        {/* Sección informativa textual */}
        <div className="information">
          <h2>¿Qué es el cáncer de hígado?</h2>
          <p>
            El cáncer de hígado es una enfermedad en la cual las células hepáticas crecen de forma descontrolada,
            formando tumores que afectan la función normal del órgano. Puede originarse en el propio hígado
            (cáncer primario) o propagarse desde otras partes del cuerpo (metástasis).
          </p>
          <p><strong>Más Información:</strong></p>
          <ul>
            <li>
              <a href="https://www.who.int/news-room/fact-sheets/detail/hepatocellular-carcinoma" target="_blank" rel="noopener noreferrer">
                World Health Organization – Hepatocellular Carcinoma
              </a>
            </li>
            <li>
              <a href="https://www.cancer.org/cancer/liver-cancer.html" target="_blank" rel="noopener noreferrer">
                American Cancer Society – Liver Cancer
              </a>
            </li>
          </ul>
         
        </div>

        {/* Sección de visualización del modelo 3D */}
                <div className="model">
                    <KeyboardControls map={map} >
                    <Canvas shadows={true}>
                        <PerspectiveCamera makeDefault position={[1, 0.4, 0.4]} />
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




  );
};

export default Section1;
