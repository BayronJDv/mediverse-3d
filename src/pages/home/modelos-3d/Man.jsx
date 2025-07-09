import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ scale, hovered }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/Man.glb');
  const { actions } = useAnimations(animations, group);

  // Inicia la animación y la pausa cuando es necesario
  useEffect(() => {
    const animationName = Object.keys(actions)[0];
    if (!animationName) return;

    // Inicia la animación por defecto
    if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    }

    return () => {
      if (actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    };
  }, [actions]);

  // Efecto para cuando el hover cambia
  useEffect(() => {
    const animationName = Object.keys(actions)[0];
    if (!animationName) return;

    if (hovered) {
      // Pausar la animación cuando hay hover
      if (actions[animationName]) {
        actions[animationName].paused = true;
      }

    } else {
      // Reanudar la animación cuando el hover se quita
      if (actions[animationName]) {
        actions[animationName].paused = false;
      }

    }
  }, [hovered, actions, materials]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group
          name="Abs&Animation"
          position={[0.005, 1.064, 0.107]}
          rotation={[3.065, -0.807, 1.491]}
          scale={1.042}>
          <mesh
            name="Abdomen"
            castShadow
            receiveShadow
            geometry={nodes.Abdomen.geometry}
            material={materials.AbdomenMaterial}
          />
        </group>
        <mesh
          name="Muscle"
          castShadow
          receiveShadow
          geometry={nodes.Muscle.geometry}
          material={materials.MuscleDetailsMaterial}
        />
        <mesh
          name="MuscleDetails"
          castShadow
          receiveShadow
          geometry={nodes.MuscleDetails.geometry}
          material={materials.MuscleDetailsMaterial}
        />
        <mesh
          name="LiverAndBiliary"
          castShadow
          receiveShadow
          geometry={nodes.LiverAndBiliary.geometry}
          material={materials.LiverAndBiliaryMaterial}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models-3d/Man.glb');
