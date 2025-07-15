import React, { useState, useEffect } from 'react'
import './Quiz.css'
import Warning from '../../components/warning/Warning'
import Qustion from './Questions/Qustion'
import Question2 from './Questions/Question2'
import { useAtom } from 'jotai'
import { userAtom } from '../../stores/userAtom'



const Quiz = () => {
  const Questions = [Qustion, Question2];
  const [indice, setIndice] = useState(null);
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const storedIndice = localStorage.getItem('indice');
    if (storedIndice !== null) {
      setIndice(Number(storedIndice));
    }
  }, []);

  if (indice !== null && Questions[indice]) {
    const QuestionComponent = Questions[indice];

    const handleNext = async () => {
      if (indice < Questions.length - 1) {
        localStorage.setItem('indice', String(indice + 1));
        setIndice(indice + 1);
      } else {
        await enviarRespuestas();
        localStorage.removeItem('indice');
        localStorage.removeItem('respuestasQuiz');
        setIndice(null);
      }
    };
    const handlePrev = () => {
      if (indice > 0) {
        localStorage.setItem('indice', String(indice - 1));
        setIndice(indice - 1);
      }
    };

    async function enviarRespuestas() {
      const respuestas = JSON.parse(localStorage.getItem('respuestasQuiz')) || [];
      const payload = {
        userId: user?.uid || '',
        nombre: user?.displayName || '',
        respuestas,
        imgurl: user?.photoURL || '',
      };
      const backendUrl = import.meta.env.VITE_MEDIVERSERBACK || 'http://localhost:5000';
      try {
        const response = await fetch(`${backendUrl}/EnviarRespuestas`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error('Error al enviar respuestas');
        alert('Respuestas enviadas correctamente');
      } catch (error) {
        alert('Error al enviar respuestas: ' + error.message);
      }
    }

    return (
      <div className="quiz-pregunta">
        <QuestionComponent indice={indice} />
        <div className="navegacion-quiz">
          <button className="boton-nav" onClick={handlePrev} disabled={indice === 0}>Anterior</button>
          <button
            className="boton-nav"
            onClick={handleNext}
          >
            {indice === Questions.length - 1 ? 'Finalizar' : 'Siguiente'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='quiz'>
      <Warning text="Te recomendamos haber leido completamente la sección de Aprende Enfermedades antes de realizar el cuestionario." />
      <div className="content">
        <div>
          <img src="/images/quiz.png" alt="Quiz" />
        </div>
        <div className="seccion-bienvenida">
          <h1 className='aviso'>Bienvenido al Quiz </h1>
          <p>Este cuestionario está diseñado para evaluar tus conocimientos sobre las enfermedades del hígado que hemos estudiado. Asegúrate de leer cada pregunta cuidadosamente y seleccionar la respuesta correcta.</p>
          <p>Recuerda que puedes revisar la sección de "Aprende Enfermedades" para refrescar tus conocimientos antes de comenzar.</p>
          <p>¡Buena suerte!</p>
          <button
            className='botongrande'
            onClick={() => {
              localStorage.setItem('indice', '0');
              localStorage.setItem('respuestasQuiz', JSON.stringify([]));
              setIndice(0);
            }}
          > Empezar Quiz </button>
        </div>
      </div>
    </div>
  )
}

export default Quiz