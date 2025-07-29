import React from 'react';
import './Nosotros.css'; // Importa el archivo CSS

const integrantes = [
  {
    nombre: 'Bayron Jojoa',
    rol: 'Estudiante de Ingeniería de Sistemas',
    foto: '/images/usuario1.png', // Placeholder para la foto
  },
  {
    nombre: 'Zammir Andrade',
    rol: 'Estudiante de Ingeniería de Sistemas',
    foto: '/images/usuario2.png', // Placeholder para la foto
  },
  {
    nombre: 'Venus Paipilla',
    rol: 'Estudiante de Ingeniería de Sistemas',
    foto: '/images/usuario3.png', // Placeholder para la foto
  },
  {
    nombre: 'David Enciso',
    rol: 'Estudiante de Ingeniería de Sistemas',
    foto: '/images/usuario4.png', // Placeholder para la foto
  },
  // Agrega más integrantes si es necesario
];

export default function Nosotros() {
  return (
    <div className="nosotros-container">
      {/* Título principal */}
      <h1 className="nosotros-titulo">
        Nosotros
      </h1>

      {/* Sección "¿Quiénes somos?" */}
      <section className="nosotros-seccion">
        <h2 className="nosotros-subtitulo">
          ¿Quiénes somos?
        </h2>
        <p className="nosotros-parrafo">
          Somos un grupo de estudiantes de la Universidad del Valle apasionados por la tecnología, el diseño y la educación en salud. Este proyecto surge como una propuesta interdisciplinaria para facilitar la comprensión de enfermedades y temas médicos usando experiencias visuales interactivas.
        </p> 
        <div className="imagenes-container2">
            <img
            src="/images/univalle.png"
            alt="Imagen de tecnologías utilizadas"
            className="section-image2"
            /> 
            <img
            src="/images/eisc.png"
            alt="Imagen de tecnologías utilizadas"
            className="section-image2"
            />
        </div>
      </section>

      {/* Sección "¿Cuál es nuestro enfoque?" */}
      <section className="nosotros-seccion">
        <h2 className="nosotros-subtitulo">
          ¿Cuál es nuestro enfoque?
        </h2>
        <p className="nosotros-parrafo">
          Nuestro enfoque es educativo. Buscamos reducir barreras de entendimiento mediante el uso de tecnologías interactivas como modelos 3D, minijuegos y explicaciones visuales accesibles para personas sin formación médica. Queremos que cualquier persona, sin importar su nivel educativo, pueda aprender sobre salud de forma clara y amigable.
        </p> 
        <div className="imagenes-container">
            <img
            src="/images/capturablender.png"
            alt="Imagen de tecnologías utilizadas"
            className="section-image"
            /> 
            <img
            src="/images/capturablender2.png"
            alt="Imagen de tecnologías utilizadas"
            className="section-image"
            />
        </div>
        
      </section>

      {/* Sección "¿Qué tecnologías utilizamos?" */}
      <section className="nosotros-seccion">
        <h2 className="nosotros-subtitulo">
          ¿Qué tecnologías utilizamos?
        </h2>
        <p className="nosotros-parrafo">
          El proyecto fue desarrollado con tecnologías modernas como React, Three.js y React Three Fiber para la visualización en 3D. Utilizamos Django MongoDB para el backend y almacenamiento de datos, y desplegamos los servicios usando Vercel.
        </p>
        <div className="imagenes-container">
            <img
            src="/images/figma.png"
            alt="Imagen de tecnologías utilizadas"
            className="section-image1"
            /> 
            <img
            src="/images/blender.png"
            alt="Imagen de tecnologías utilizadas"
            className="section-image1"
            /> 
            <img
            src="/images/threejs.png"
            alt="Imagen de tecnologías utilizadas"
            className="section-image1"
            /> 
            <img
            src="/images/react.png"
            alt="Imagen de tecnologías utilizadas"
            className="section-image1"
            />
        </div>
      </section>

      {/* Sección "Nuestro equipo" */}
      <section className="nosotros-seccion equipo-seccion">
        <h2 className="nosotros-subtitulo equipo-titulo">
          Nuestro equipo
        </h2>
        <div className="equipo-grid">
          {integrantes.map((miembro, index) => (
            <div
              key={index}
              className="miembro-card"
            >
              <img
                src={miembro.foto}
                alt={miembro.nombre}
                className="miembro-foto"
              />
              <h3 className="miembro-nombre">
                {miembro.nombre}
              </h3>
              <p className="miembro-rol">{miembro.rol}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}