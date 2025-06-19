import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


// Pre-cargar el modelo GLTF de cáncer de hígado
useGLTF.preload('/models-3d/Cancer/LiverCancerCell.glb');


export default function LiverCancerCell(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models-3d/Cancer/LiverCancerCell.glb');
  const { actions } = useAnimations(animations, group);


  // Animación de rotación continua
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });


  // Reproducir animación al montar el componente
  useEffect(() => {
    if (actions) {
      actions['Rotacion']?.play();
    }
  }, [actions]);


  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}
