import React, { useState, useEffect } from 'react'

const Question2 = ({ indice }) => {
  const [respuesta, setRespuesta] = useState('')

  useEffect(() => {
    if (respuesta !== '') {
      let respuestas = JSON.parse(localStorage.getItem('respuestasQuiz')) || []
      respuestas[indice] = respuesta
      localStorage.setItem('respuestasQuiz', JSON.stringify(respuestas))
    }
  }, [respuesta, indice])

  return (
    <div>
      <div>Question2</div>
      <div>
        <label>
          <input
            type="radio"
            name={`respuesta-${indice}`}
            value="A"
            checked={respuesta === 'A'}
            onChange={() => setRespuesta('A')}
          />
          Respuesta A
        </label>
        <label>
          <input
            type="radio"
            name={`respuesta-${indice}`}
            value="B"
            checked={respuesta === 'B'}
            onChange={() => setRespuesta('B')}
          />
          Respuesta B
        </label>
        <label>
          <input
            type="radio"
            name={`respuesta-${indice}`}
            value="C"
            checked={respuesta === 'C'}
            onChange={() => setRespuesta('C')}
          />
          Respuesta C
        </label>
      </div>
    </div>
  )
}

export default Question2