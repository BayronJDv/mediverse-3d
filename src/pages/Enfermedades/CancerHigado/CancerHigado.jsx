import React, { Suspense, useState } from 'react';
import Definition from './sections/Definition';
const Symptoms = React.lazy(() => import('./sections/Symptoms'));
const Treatment = React.lazy(() => import('./sections/Treatment'));
// const Section4 = React.lazy(() => import('./Sections/Section4'));
import './CancerHigado.css';
import Loader from '../../../components/Loader'


const CancerHigado = () => {
  const [activeSection, setActiveSection] = useState(1);

  const renderSection = () => {
    switch (activeSection) {
      case 1:
        return (
          <>
            <Suspense fallback={<Loader />}>
              <Definition />
              <button onClick={() => setActiveSection(activeSection + 1)}>
                Siguiente (sintomas)
              </button>
            </Suspense>
          </>
        );
      case 2:
        return (
          <Suspense fallback={<Loader />}>
            <Symptoms />
          </Suspense>
        );
      case 3:
        return (
          <Suspense fallback={<Loader />}>
            <Treatment />
          </Suspense>
        );
      case 4:
        return (
          <Suspense fallback={<Loader />}>
            <Section4 />
            <button onClick={() => setActiveSection(activeSection - 1)}>
              Anterior (tratamiento)
            </button>
          </Suspense>
        );
      default:
        return null;
    }
  };

  return (
    <div className="cancerHigado">

      {renderSection()}



      {(activeSection > 1 && activeSection < 4) && (
        <div className="navegacion">
          {activeSection > 1 && (
            <button onClick={() => setActiveSection(activeSection - 1)}>
              Anterior
            </button>
          )}
          {activeSection < 4 && (
            <button onClick={() => setActiveSection(activeSection + 1)}>
              Siguiente
            </button>
          )}
        </div>
      )}

      <div className="consejos">
        <h1>¡Consejos!</h1>
        <div className="click">
          <img src="/images/click.png" alt="" />
          <p>Presiona las esferas rojas para más información!</p>
        </div>
        <div>
          <p>Usa las teclas W,S y E para interactuar con los modelos</p>
        </div>
      </div>

    </div>
  );
};

export default CancerHigado;