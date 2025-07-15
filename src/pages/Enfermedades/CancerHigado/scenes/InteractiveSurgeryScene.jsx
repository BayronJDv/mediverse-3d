import { Html } from '@react-three/drei';
import { SurgeryRoom } from "../models-3d/SurgeryRoom";
import { CameraRig } from '../camera/CameraRig';
import { views } from '../utils/views';
import IndustrialSunset from '../staging/IndustrialSunset';

// Eliminamos onPointerMissed de los props, ya no lo necesitamos.
export function InteractiveSurgeryScene({ activeView }) { 
    const activeViewData = views.find(v => v.id === activeView);

    return (
        <>
            <ambientLight intensity={0.8} />
            {/* Optimizamos la luz direccional para un mejor rendimiento de las sombras */}
            <directionalLight 
              position={[5, 10, 5]} 
              intensity={1.5} 
              castShadow 
              shadow-mapSize-width={2048} 
              shadow-mapSize-height={2048} 
              shadow-camera-far={50}
            />


            <SurgeryRoom />
            <CameraRig activeViewData={activeViewData} />
            <IndustrialSunset />

            {views.map(view => (
                <Html
                    key={view.id}
                    position={view.tooltipPos}
                    className={`html-tooltip ${activeView === view.id ? 'visible' : ''}`}

                >
                    <div className="tooltip-content">
                        <h3>{view.title}</h3>
                        <p>{view.description}</p>
                    </div>
                </Html>
            ))}
        </>
    );
}