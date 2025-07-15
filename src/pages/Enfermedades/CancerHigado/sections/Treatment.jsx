import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import './Symptoms.css'; // Asegúrate de que este CSS existe y lo actualizamos abajo
import { InteractiveSurgeryScene } from "../scenes/InteractiveSurgeryScene";

const Treatment = () => {
    const [activeView, setActiveView] = useState(0); // 0 es la vista inicial

    useEffect(() => {
        const handleKeyDown = (event) => {
            const keyNumber = parseInt(event.key, 10);
            
            // Permitimos navegar a la vista 0 (inicial) y a las vistas 1-6
            if (!isNaN(keyNumber) && keyNumber >= 0 && keyNumber <= 6) {
                setActiveView(keyNumber);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='cirrocis'>
            <div className="banner">
                <div className="banner-overlay">
                    <p></p>
                    <h1>Cáncer de Hígado</h1>
                </div>
            </div>
            
            <div className="content">
                <div className="model2">
                    {/* Quitamos onPointerMissed del Canvas */}
                    <Canvas shadows={true} camera={{ position: [3, 2, 6], fov: 60 }}>
                        <InteractiveSurgeryScene activeView={activeView} />
                    </Canvas>
                </div>

                <div className="information2">
                    <h2>Tratamientos</h2>
                    <p>
                        El tratamiento del cáncer de hígado depende de la etapa, el tamaño y la cantidad de tumores, así como de la salud general del paciente. Algunos de los tratamientos más comunes incluyen:
                    </p>
                    <ul>
                        <li><strong>Cirugía:</strong> Extirpación del tumor y parte del tejido hepático sano.</li>
                        <li><strong>Trasplante de hígado:</strong> Reemplazo del hígado enfermo por uno sano de un donante.</li>
                        <li><strong>Ablación:</strong> Destrucción del tumor con calor, frío o alcohol.</li>
                        <li><strong>Quimioembolización:</strong> Bloqueo del suministro de sangre al tumor y administración de quimioterapia directamente.</li>
                        <li><strong>Radioembolización:</strong> Uso de partículas radiactivas para destruir las células cancerosas.</li>
                        <li><strong>Radioterapia:</strong> Uso de radiación de alta energía para eliminar las células cancerosas.</li>
                        <li><strong>Terapias dirigidas:</strong> Medicamentos que atacan específicamente las células cancerosas.</li>
                        <li><strong>Inmunoterapia:</strong> Ayuda al sistema inmunitario a combatir el cáncer.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Treatment;