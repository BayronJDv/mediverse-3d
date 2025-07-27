import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Pregunta3D from './Pregunta3D';
import { useState } from 'react'; 
import { OrbitControls, PerspectiveCamera, Loader, Environment, Html, Text3D, Text } from '@react-three/drei'

const PREGUNTAS = [
  {
    pregunta: '¿Cuáles son los síntomas más comunes en las etapas tempranas del cáncer de hígado?',
    opciones: {
      A: 'Fatiga, pérdida de apetito y sensación de plenitud en el hipocondrio derecho',
      B: 'Dolor torácico, taquicardia y sudoración nocturna',
      C: 'Ictericia, fiebre alta y vómitos',
      D: 'Edema pulmonar, tos y disnea'
    },
    respuestaCorrecta: 'A'
  },
  {
    pregunta: '¿Cómo puede diferenciarse el dolor abdominal por cáncer de hígado de otras causas de dolor en el área hepática?',
    opciones: {
      A: 'Dolor sordo o sensación de presión con hepatomegalia palpable',
      B: 'Dolor punzante tras ingesta de grasas, irradiado a la espalda',
      C: 'Dolor intermitente al presionar la fosa ilíaca derecha',
      D: 'Dolor asociado a fiebre alta y escalofríos'
    },
    respuestaCorrecta: 'A'
  },
 
];

export default function Quiz1() {
  const [indiceActual, setIndiceActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [procesandoCambio, setProcesandoCambio] = useState(false);

  const handleRespuesta = (opcion) => {
    if (procesandoCambio) return; // Evitar múltiples llamadas
    
    setProcesandoCambio(true);
    const correcta = PREGUNTAS[indiceActual].respuestaCorrecta;
    
    if (opcion === correcta) {
      setPuntaje((prev) => prev + 20); // 20 puntos por pregunta correcta
    }

    setRespuestaSeleccionada(opcion);

    // Tiempo de espera para mostrar el resultado
    setTimeout(() => {
      if (indiceActual < PREGUNTAS.length - 1) {
        setIndiceActual((prev) => prev + 1);
        setRespuestaSeleccionada(null);
        setProcesandoCambio(false);
      } else {
        setMostrarResultado(true);
      }
    }, 1200); // Tiempo ligeramente mayor que la animación del cubo
  };

  const reiniciarQuiz = () => {
    setIndiceActual(0);
    setPuntaje(0);
    setRespuestaSeleccionada(null);
    setMostrarResultado(false);
    setProcesandoCambio(false);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#1a1a1a' }}>
      {mostrarResultado ? (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '24px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2>¡Quiz completado!</h2>
          <p>Tu puntaje final: {puntaje}/{PREGUNTAS.length * 20} puntos</p>
          <p>Porcentaje: {Math.round((puntaje / (PREGUNTAS.length * 20)) * 100)}%</p>
          <button 
            onClick={reiniciarQuiz}
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Reiniciar Quiz
          </button>
        </div>
      ) : (
        <>
          {/* Indicador de progreso */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'white',
            fontSize: '18px',
            zIndex: 1000,
            backgroundColor: 'rgba(241, 24, 24, 0.7)',
            padding: '10px',
            borderRadius: '5px'
          }}>
            Pregunta {indiceActual + 1}/{PREGUNTAS.length} | Puntaje: {puntaje}
          </div>

          <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
            <Environment
                files="/hdris/background1.hdr"
                background
            />
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} castShadow />
            <Physics gravity={[0, -9.81, 0]}>
              <Pregunta3D
                key={indiceActual}
                pregunta={PREGUNTAS[indiceActual]}
                onImpacto={handleRespuesta}
                respuestaSeleccionada={respuestaSeleccionada}
                indice={indiceActual}
              />
            </Physics>
          </Canvas>
        </>
      )}
    </div>
  );
}