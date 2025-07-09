import './Patologias.css'
import { Link } from 'react-router-dom'

const Patologias = () => {
  return (
    <div className="patologias">
      <h1>El hígado y sus patologías más comunes</h1>
      <div className="descripcion">
        <img src="/images/higado.png" alt="Hígado" className="higado-imagen" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>

      <h2>Selecciona una patología para aprender más</h2>
      <div className="opciones">
        <Link to="/Learn/Cirrocis" className="patologia">
          <img src="/images/higadocirrosis.png" alt="Cirrosis" />
          <p>Cirrosis hepática</p>
        </Link>

        <Link to="/Learn/HigadoGraso" className="patologia">
          <img src="/images/higadograso.png" alt="Hígado graso" />
          <p>Hígado graso</p>
        </Link>

        <Link to="/Learn/Hepatitis" className="patologia">
          <img src="/images/hepatitis.png" alt="Hepatitis" />
          <p>Hepatitis</p>
        </Link>

        <Link to="/Learn/CancerHigado" className="patologia">
          <img src="/images/higadocancer.png" alt="Cáncer de hígado" />
          <p>Cáncer de hígado</p>
        </Link>
      </div>
    </div>
  )
}

export default Patologias
