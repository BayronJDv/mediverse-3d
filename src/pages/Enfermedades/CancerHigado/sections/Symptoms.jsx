import { Canvas } from "@react-three/fiber";
import './Symptoms.css'
import { LiverScene } from "../scenes/LiverScene"; // Importamos nuestra nueva escena

const Symptoms = () => {
    return (
        <div className='cirrocis'>
            <div className="banner">
                <div className="banner-overlay">
                    <p></p>
                    <h1>Cáncer de Hígado</h1>
                </div>
            </div>
            <div className="content">
                <div className="information2">
                    <h2>Sintomatología</h2>
                    <p>
                        <br />El cáncer de hígado es frecuentemente silencioso en etapas tempranas, siendo indetectable sin estudios médicos. Los síntomas aparecen cuando ya está avanzado:
                        <br />
                    </p>
                    <ul>
                        <li><strong>Dolor abdominal:</strong> especialmente en la parte superior derecha.</li>
                        <li><strong>Pérdida de peso inexplicable:</strong> sin cambios en la dieta.</li>
                        <li><strong>Fatiga extrema:</strong> cansancio persistente y debilidad.</li>
                        <li><strong>Hinchazón abdominal:</strong> distensión y sensación de llenura.</li>
                        <li><strong>Ictericia:</strong> coloración amarillenta de piel y ojos.</li>
                        <li><strong>Pérdida del apetito:</strong> falta de interés en comer.</li>
                        <li><strong>Náuseas y vómitos:</strong> malestar digestivo frecuente.</li>
                        <li><strong>Fiebre:</strong> temperatura corporal elevada sin causa aparente.</li>
                    </ul>
                </div>

                <div className="model2">
                    {/* El Canvas ahora es mucho más simple y limpio */}
                    <Canvas shadows={true} camera={{ position: [0, 0.5, 1.5] }}>
                        {/* Simplemente renderizamos nuestro componente de escena */}
                        <LiverScene />
                    </Canvas>
                </div>
            </div>
        </div>
    );
}

export default Symptoms;