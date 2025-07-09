import React from 'react'
import './Quiz.css'
import Warning
  from '../../components/warning/Warning'
const Quiz = () => {
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
          > Empezar Quiz </button>
        </div>
      </div>

    </div>

  )
}

export default Quiz