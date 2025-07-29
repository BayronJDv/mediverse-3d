import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Pregunta3D from './Questions/Pregunta3D';
import { useState, useEffect } from 'react';
import { OrbitControls, PerspectiveCamera, Loader, Environment, Html, Text3D, Text } from '@react-three/drei'
import { useLocation } from 'react-router';
import Warning from '../../components/warning/Warning';
import { useAtom } from 'jotai';
import { userAtom } from '../../stores/userAtom';
import PREGUNTASQUIZ from './PREGUNTASQUIZ';


const PREGUNTAS = PREGUNTASQUIZ;

export default function Quiz1() {
  const location = useLocation();
  const [indiceActual, setIndiceActual] = useState(() => {
    const saved = localStorage.getItem('indice');
    return saved && saved !== 'null' ? parseInt(saved) : -1; // -1 representa la pantalla de bienvenida
  });

  const [puntaje, setPuntaje] = useState(() => {
    const saved = localStorage.getItem('puntaje');
    return saved ? parseInt(saved) : 0;
  });
  
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [procesandoCambio, setProcesandoCambio] = useState(false);
  const [user] = useAtom(userAtom);

  useEffect(() => {
    if (location.pathname === '/Quiz') {
      // Página de bienvenida: limpiar
      localStorage.removeItem('indice');
      setIndiceActual(-1);
    } else if (location.pathname === '/Quiz/Presentar') {
      // Página de presentación: restaurar
      const storedIndice = localStorage.getItem('indice');
      if (storedIndice !== null && storedIndice !== 'null') {
        setIndiceActual(parseInt(storedIndice));
      } else {
        setIndiceActual(0); // por si no había nada guardado
      }
    }
  }, [location.pathname]);
  

  useEffect(() => {
    localStorage.setItem('puntaje', String(puntaje));
  }, [puntaje]);

  const handleRespuesta = (opcion) => {
    if (procesandoCambio || !PREGUNTAS[indiceActual]) return;

    setProcesandoCambio(true);
    const correcta = PREGUNTAS[indiceActual].respuestaCorrecta;

    if (opcion === correcta) {
      setPuntaje((prev) => prev + 20);
    }

    setRespuestaSeleccionada(opcion);

    setTimeout(() => {
      const nuevoIndice = indiceActual + 1;
      if (nuevoIndice < PREGUNTAS.length) {
        setIndiceActual(nuevoIndice);
        localStorage.setItem('indice', String(nuevoIndice));
        setRespuestaSeleccionada(null);
        setProcesandoCambio(false);
      } else {
        setMostrarResultado(true);
      }
    }, 1200);
  };

  const enviarRespuestas = async () => {
    const payload = {
      userId: user?.uid || '',
      nombre: user?.displayName || '',
      puntaje: puntaje || 0,
      imgurl: user?.photoURL || '',
    };
    const backendUrl = import.meta.env.VITE_MEDIVERSERBACK || 'http://localhost:5000';
    try {
      const response = await fetch(`${backendUrl}/EnviarRespuestas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Error al enviar respuestas');
      alert('Respuestas enviadas correctamente');
    } catch (error) {
      alert('Error al enviar respuestas: ' + error.message);
    }
  };

  const reiniciarQuiz = () => {
    setIndiceActual(-1);
    localStorage.setItem('indice', '-1');
    setPuntaje(0);
    setRespuestaSeleccionada(null);
    setMostrarResultado(false);
    setProcesandoCambio(false);
  };

  if (indiceActual === -1) {
    return (
      <div className='quiz'>
        <Warning text="Te recomendamos haber leído completamente la sección de Aprende Enfermedades antes de realizar el cuestionario." />
        <div className="content">
          <div><img src="/images/quiz.png" alt="Quiz" /></div>
          <div className="seccion-bienvenida">
            <h1 className='aviso'>Bienvenido al Quiz</h1>
            <p>Este cuestionario está diseñado para evaluar tus conocimientos sobre las enfermedades del hígado que hemos estudiado. Asegúrate de leer cada pregunta cuidadosamente y seleccionar la respuesta correcta.</p>
            <p>Recuerda que puedes revisar la sección de "Aprende Enfermedades" para refrescar tus conocimientos antes de comenzar.</p>
            <p>¡Buena suerte!</p>
            <button
              className='botongrande'
              onClick={() => {
                setIndiceActual(0);
                localStorage.setItem('indice', '0');
              }}
            >
              Empezar Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

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
            onClick={() => {
              enviarRespuestas();
              reiniciarQuiz();
            }}
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
          <div style={{
            position: 'absolute',
            top: '100px',
            left: '20px',
            color: 'white',
            fontSize: '18px',
            zIndex: 1000,
            backgroundColor: 'rgba(49, 45, 45, 0.7)',
            padding: '10px',
            borderRadius: '5px'
          }}>
            Pregunta {indiceActual + 1}/{PREGUNTAS.length} | Puntaje: {puntaje}
          </div>

          <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
            <Environment files="/hdris/background1.hdr" background />
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
