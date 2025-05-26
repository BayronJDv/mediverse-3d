import React, { Suspense, useState } from 'react';
import Section1 from './Sections/Section1';
const Section2 = React.lazy(() => import('./Sections/Section2'));
const Section3 = React.lazy(() => import('./Sections/Section3'));
import './Cirrocis.css';
import Loader from '../../../components/Loader'

const Cirrocis = () => {
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
      default:
        return null;
    }
  };

  return (
    <div className="cirrocis">

      {renderSection()}


      
      {(activeSection > 1 && activeSection < 4) && (
        <div className="navegacion">
          {activeSection > 1 && (
            <button onClick={() => setActiveSection(activeSection - 1)}>
              Anterior
            </button>
          )}
          {activeSection < 3 && (
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
            <p>Usa las teclas W y S para cambiar el tamaño de los modelos</p>
          </div>
        </div>

    </div>
  );
};

export default Cirrocis;
