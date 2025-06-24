import './Patologias.css'

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
        <div className="patologia">
          <img src="/images/higadocirrosis.png" alt="Cirrosis" />
          <p>Cirrosis hepática</p>
        </div>
        <div className="patologia">
          <img src="/images/higadograso.png" alt="Hígado graso" />
          <p>Hígado graso</p>
        </div>
        <div className="patologia">
          <img src="/images/hepatitis.png" alt="Hepatitis" />
          <p>Hepatitis</p>
        </div>
        <div className="patologia">
          <img src="/images/higadocancer.png" alt="Cáncer de hígado" />
          <p>Cáncer de hígado</p>
        </div>
      </div>
    </div>
  )
}

export default Patologias
