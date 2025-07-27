import React, { useRef, useState, useEffect } from 'react';
import { Text } from '@react-three/drei';
import { useBox, useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Pregunta3D = ({ pregunta, indice, onImpacto, respuestaSeleccionada }) => {
  const [respuestaLocal, setRespuestaLocal] = useState(null);
  const [mostrarVerde, setMostrarVerde] = useState(false);
  const [mostrarRojo, setMostrarRojo] = useState(false);
  const [respuestaIncorrecta, setRespuestaIncorrecta] = useState(null);
  const [procesandoRespuesta, setProcesandoRespuesta] = useState(false);
  const procesandoRef = useRef(false); // Ref adicional para evitar race conditions
  const { camera, scene, gl } = useThree();
  const raycaster = new THREE.Raycaster();

  // Reset estados cuando cambia la pregunta
  useEffect(() => {
    console.log(`🔄 Cambiando a pregunta ${indice}`);
    setRespuestaLocal(null);
    setMostrarVerde(false);
    setMostrarRojo(false);
    setRespuestaIncorrecta(null);
    setProcesandoRespuesta(false);
    procesandoRef.current = false; // Reset también el ref
  }, [indice]);

  // Pelota con física y eventos de colisión
  const [ballRef, ballApi] = useSphere(() => ({
    mass: 1,
    position: [0, 2, 5],
    material: { restitution: 0.7 },
    onCollide: (e) => {
      // Doble verificación para evitar múltiples procesamiento
      if (procesandoRespuesta || procesandoRef.current) {
        console.log('⏸️ Ya procesando respuesta, ignorando colisión');
        return;
      }
      
      const otherBody = e.target === e.body ? e.targetBody : e.body;
      const userData = otherBody.userData;
      
      console.log('🎯 Colisión detectada!', userData);
      
      // Solo procesar si hay userData válida y es una opción
      if (userData && userData.tipo === 'opcion' && userData.clave) {
        const clave = userData.clave;
        console.log(`Pelota colisionó con opción: ${clave}`);
        
        // Marcar inmediatamente como procesando en ambos estados
        procesandoRef.current = true;
        setProcesandoRespuesta(true);
        setRespuestaLocal(clave);

        if (clave === pregunta.respuestaCorrecta) {
          console.log('✅ ¡Respuesta CORRECTA!');
          setMostrarVerde(true);
          setTimeout(() => {
            console.log('Ejecutando onImpacto para respuesta correcta');
            onImpacto(clave);
          }, 1000);
        } else {
          console.log('❌ Respuesta INCORRECTA');
          setRespuestaIncorrecta(clave);
          setMostrarRojo(true);
          setTimeout(() => {
            console.log('Ejecutando onImpacto para respuesta incorrecta');
            onImpacto(clave);
          }, 1000);
        }
      } else {
        console.log('🚫 Colisión ignorada - no es una opción válida');
      }
    }
  }));

  // Suelo fijo
  const [groundRef] = useBox(() => ({
    args: [20, 1, 20],
    position: [0, -1, 0],
    type: 'Static'
  }));

  const lanzarBola = (target) => {
    console.log('🚀 Lanzando bola hacia:', target);
    
    if (procesandoRespuesta) {
      console.log('⏳ Ya se está procesando una respuesta');
      return;
    }
    
    // Reset la pelota a la posición de la cámara
    ballApi.position.set(camera.position.x, camera.position.y - 1, camera.position.z);
    ballApi.velocity.set(0, 0, 0);
    ballApi.angularVelocity.set(0, 0, 0);

    const dir = new THREE.Vector3();
    dir.subVectors(target, camera.position).normalize();

    // Aplicar velocidad después de un pequeño delay
    setTimeout(() => {
      ballApi.velocity.set(dir.x * 12, dir.y * 12, dir.z * 12);
      console.log('💨 Velocidad aplicada:', dir.x * 12, dir.y * 12, dir.z * 12);
    }, 100);
  };

  const handleClick = (e) => {
    // No permitir disparos si ya se está procesando una respuesta
    if (procesandoRespuesta) return;
    
    e.stopPropagation();
    const rect = gl.domElement.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    );
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
      lanzarBola(intersects[0].point);
    }
  };

  // Cubo individual con física y userData para identificación
  const OpcionCube = ({ clave, texto, correcta, position }) => {
    const [ref, api] = useBox(() => ({
      mass: 0,
      position: position,
      args: [1.5, 1, 1],
      type: 'Static',
      userData: { tipo: 'opcion', clave: clave } // Configurar directamente aquí
    }));

    const getColor = () => {
      if (mostrarVerde && clave === correcta) {
        return '#00ff00';
      }
      if (mostrarRojo && clave === respuestaIncorrecta) {
        return '#ff0000';
      }
      if (respuestaLocal === clave) {
        return clave === correcta ? '#00ff00' : '#ff0000';
      }
      return '#87ceeb';
    };

    return (
      <mesh ref={ref} castShadow>
        <boxGeometry args={[1.5, 1, 1]} />
        <meshStandardMaterial color={getColor()} />
        <Text
          position={[0, 0.6, 0]}
          fontSize={0.2}
          color="black"
          anchorX="center"
          anchorY="bottom"
          maxWidth={1.4}
        >
          {clave}: {texto}
        </Text>
      </mesh>
    );
  };

  // Reset pelota cuando cambia la pregunta
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ballApi) {
        ballApi.position.set(0, 2, 5);
        ballApi.velocity.set(0, 0, 0);
        ballApi.angularVelocity.set(0, 0, 0);
        console.log('🔄 Pelota reseteada');
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [indice, ballApi]);

  return (
    <group onClick={handleClick}>
      {/* Suelo */}
      <mesh ref={groundRef} receiveShadow>
        <boxGeometry args={[20, 1, 20]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* Pelota */}
      <mesh ref={ballRef} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Pregunta */}
      <Text position={[0, 3.5, 0]} fontSize={0.3} color="white" maxWidth={8} textAlign="center">
        {pregunta.pregunta}
      </Text>

      {/* Opciones */}
      {Object.entries(pregunta.opciones).map(([clave, texto], idx) => (
        <OpcionCube
          key={`${indice}-${clave}`}
          clave={clave}
          texto={texto}
          correcta={pregunta.respuestaCorrecta}
          position={[idx * 3 - 4.5, 1, -3]}
        />
      ))}
    </group>
  );
};

export default Pregunta3D;