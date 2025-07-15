import React, { useEffect, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Podio from './modelos-3d/Podio'
import { PerspectiveCamera } from '@react-three/drei'
import { KeyboardControls } from "@react-three/drei";
import Controls from '../../Enfermedades/cirrocis/Controls/Controls.jsx'
import './Resultados.css'
import PodioLight from './Lights/PodioLight.jsx'
import Number from '../Text/Number.jsx'
import Nombres from '../Text/Nombres.jsx'
import { useAtom } from 'jotai'
import { userAtom } from '../../../stores/userAtom.js'
import Staging from '../../Enfermedades/cirrocis/stages/Staging.jsx';
import { Environment } from '@react-three/drei';

const Resultados = () => {
  const [topResultados, setTopResultados] = useState([]);
  const [mejorResultado, setMejorResultado] = useState(null);
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_MEDIVERSERBACK || 'http://localhost:5000';

    const fetchResultados = async () => {
      try {
        const response = await fetch(`${backendUrl}/TopResultados`);
        if (!response.ok) throw new Error('Error al obtener resultados');
        const data = await response.json();
        setTopResultados(data);
      } catch (error) {
        setTopResultados([]);
      }
    };

    const fetchMejorResultado = async () => {
      if (!user?.uid) return;
      try {
        const response = await fetch(`${backendUrl}/MejorResultado`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user.uid })
        });
        if (!response.ok) throw new Error('Error al obtener mejor resultado');
        const data = await response.json();
        setMejorResultado(data);
      } catch (error) {
        setMejorResultado(null);
      }
    };

    fetchResultados();
    fetchMejorResultado();
  }, [user]);

  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "back", keys: ["ArrowDown", "KeyS"] },
    ],
    []
  );

  return (
    <div className='Resultados'>
      <div className="bannerquiz">
        <div className="banner-overlay">
          <p></p>
          <h1>Resultados Quiz</h1>
        </div>
      </div>
      <div className="ResultadosContent">
        <div className="model">
          <KeyboardControls map={map} >
            <Canvas shadows={true}>
              <PerspectiveCamera makeDefault position={[1, 0.4, 0.4]} />
              <Podio scale={1} position={[0, 0, 0]} />
              <Number text="1" position={[-0.1, 0.45, 0.2]} />
              <Nombres buttontext={topResultados[0]?.nombre || "Primer Lugar"} position={[-0.3, 1.1, -0.1]} distanceFactor={1} imgurl={topResultados[0]?.imgurl} />
              <Number text="2" position={[-0.45, 0.25, 0.2]} />
              <Nombres buttontext={topResultados[1]?.nombre || "Segundo Lugar"} position={[-0.85, 0.6, -0.1]} distanceFactor={1} imgurl={topResultados[1]?.imgurl} />
              <Number text="3" position={[0.25, 0.05, 0.2]} />
              <Nombres buttontext={topResultados[2]?.nombre || "Tercer Lugar"} position={[0.23, 0.4, -0.1]} distanceFactor={1} imgurl={topResultados[2]?.imgurl} />
              <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <circleGeometry args={[2, 32]} />
                <meshPhongMaterial color="white" />
              </mesh>
              <Controls />
              <PodioLight />
            </Canvas>
          </KeyboardControls>
        </div>
        <div className="tabla">
          <h2>Top 10 Resultados</h2>
          <table>
            <thead>
              <tr>
                <th>Posición</th>
                <th>Nombre</th>
                <th>Puntaje</th>
              </tr>
            </thead>
            <tbody>
              {topResultados.map((res, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{res.nombre}</td>
                  <td>{res.puntaje}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {mejorResultado && (
            <div className="mejor-resultado">
              <h3>Tu Mejor Intento</h3>
              <p><strong>Puntaje:</strong> {mejorResultado.puntaje}</p>
              {mejorResultado.fecha && <p><strong>Fecha:</strong> {mejorResultado.fecha}</p>}
              <p><strong>Posición:</strong> {mejorResultado.position}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Resultados;