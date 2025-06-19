import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

/**
 * Componente HigadoCancerModel
 * Carga y muestra un modelo 3D de un hígado con foco cancerígeno (HigadoCancerP.glb).
 * El modelo realiza una oscilación suave alrededor de su eje Y.
 *
 * @param {object} props - Props pasadas al contenedor <group> (p. ej., position, scale, rotation).
 */
export default function HigadoCancerModel(props) {
  // Carga los nodos (geometrías) y materiales desde el archivo GLB
  const { nodes, materials } = useGLTF(
    '/models-3d/Cancer/HigadoCancerP.glb'
  );

  // Referencia al grupo que contiene el modelo, para animarlo
  const modeloRef = useRef();

  // Hook de animación: oscila la rotación en el eje Y
  useFrame(({ clock }) => {
    const tiempo = clock.getElapsedTime();
    if (modeloRef.current) {
      // Oscilación senoidal entre -0.25 y 0.25 radianes
      modeloRef.current.rotation.y = Math.sin(tiempo * 0.5) * 0.25;
    }
  });

  return (
    <group ref={modeloRef} {...props} dispose={null}>
      {/* Malla de la 'piel' del hígado */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skin.geometry}
        material={materials.SkinMaterial}
      />


      {/* Malla del tejido canceroso en la superficie */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HealthSkin.geometry}
        material={materials['Hea;thSkinMaterial']}
      />

      {/* Malla de lesiones o detalles específicos del cáncer */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Healtheyes.geometry}
        material={materials.HealthEyesMaterial}
      />
    </group>
  );
}

// Preload del archivo GLB para optimizar la carga
useGLTF.preload('/models-3d/Cancer/HigadoCancerP.glb');
