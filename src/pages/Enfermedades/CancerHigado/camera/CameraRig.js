import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';

const LERP_FACTOR = 0.075;

export function CameraRig({ activeViewData }) {
    // Creamos los vectores una sola vez con useMemo para evitar recrearlos en cada render.
    const targetPosition = useMemo(() => new THREE.Vector3(), []);
    const targetLookAt = useMemo(() => new THREE.Vector3(), []);
    const tempCamera = useMemo(() => new THREE.PerspectiveCamera(), []);

    useFrame((state) => {
        // Actualizamos los valores de los vectores en lugar de crear nuevos.
        targetPosition.set(...activeViewData.cameraPos);
        targetLookAt.set(...activeViewData.cameraTarget);

        state.camera.position.lerp(targetPosition, LERP_FACTOR);

        // Optimizamos la animación del 'lookAt' para que sea más estable y eficiente.
        tempCamera.position.copy(state.camera.position);
        tempCamera.lookAt(targetLookAt);
        state.camera.quaternion.slerp(tempCamera.quaternion, LERP_FACTOR);
    });

    return null;
}