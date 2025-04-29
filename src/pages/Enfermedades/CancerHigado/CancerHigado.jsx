import React from 'react'
import '../FirstSection.css'
import { Canvas} from '@react-three/fiber'
import {
    OrbitControls,
} from "@react-three/drei";
import LiverCancerCell from './modelos-3d/LiverCancerCell'

const CancerHigado = () => {
  return (
            <div className='cancer-higado'>
                <div className="banner">
                    <div className="banner-overlay">
                        <p>Enfermedad:</p>
                        <h1>Cancer Higado</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="information">
                        <h2>¿ Ques es el Cancer de Higado?</h2>
    
                        <p>
                            <br />
                            El cáncer de hígado es una enfermedad caracterizada por el crecimiento descontrolado de células malignas en el hígado.
                            El tipo más común es el carcinoma hepatocelular (HCC), que suele asociarse a enfermedades crónicas como cirrosis,
                            hepatitis B o C y consumo excesivo de alcohol. Los síntomas pueden incluir dolor abdominal, pérdida de peso,
                            fatiga y ictericia. Detectarlo en etapas tempranas mejora significativamente el pronóstico y las opciones de tratamiento.                        </p>

                        <button> Ver síntomas → </button>
                        
                    </div>
    
                    <div className="model">
                        <Canvas camera={{ position: [15, 3, 1] }}>
                        <OrbitControls />
                        <ambientLight intensity={1.5} />
                        <directionalLight
                            position={[5, 5, 5]}
                            intensity={2}
                            castShadow
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                            shadow-camera-near={0.5}
                            shadow-camera-far={20}
                            shadow-camera-left={-10}
                            shadow-camera-right={10}
                            shadow-camera-top={10}
                            shadow-camera-bottom={-10}
                        />
                        <LiverCancerCell scale={1.5} />
                        </Canvas>
                    </div>
                </div>
                
            </div>
  )
}

export default CancerHigado;