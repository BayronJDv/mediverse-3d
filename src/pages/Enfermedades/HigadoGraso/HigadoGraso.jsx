import React, { Suspense, useState } from 'react';
import Section1 from './Sections/Section1';
const Section2 = React.lazy(() => import('./Sections/Section2'));
const Section3 = React.lazy(() => import('./Sections/Section3'));
import '../FirstSection.css';
import Loader from '../../../components/Loader'
import Warning from '../../../components/warning/Warning';


const HigadoGraso = () => {
  const [activeSection, setActiveSection] = useState(1);

  const renderSection = () => {
    switch (activeSection) {
      case 1:
        return (
          <>
            <Suspense fallback={<Loader />}>
              <Section1 />
              <button onClick={() => setActiveSection(activeSection + 1)}>
                Siguiente (sintomas)
              </button>
            </Suspense>
          </>
        );
      case 2:
        return (
          <Suspense fallback={<Loader />}>
            <Section2 />
          </Suspense>
        );
      case 3:
        return (
          <Suspense fallback={<Loader />}>
            <Section3 />
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
    <div className="Higado Graso">

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

export default HigadoGraso;
