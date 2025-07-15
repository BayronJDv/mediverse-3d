// Este archivo centraliza toda la configuración para cada punto de interés en la escena.

// Función para calcular el punto de "mira" (lookAt) de la cámara.
// Se calcula sumando la posición de la cámara y su vector de dirección.
// Función para calcular el punto de "mira" (lookAt) de la cámara.
const calculateLookAt = (pos, dir) => [pos[0] + dir[0], pos[1] + dir[1], pos[2] + dir[2]];

export const views = [
    {
        id: 0,
        title: "Guía de la Escena",
        description: "Bienvenido al quirófano. Presiona las teclas del 1 al 6 para explorar los elementos. Presiona 0 para volver a esta vista.",
        cameraPos: [3, 2, 6],
        cameraTarget: [0, 1.5, 0],
        tooltipPos: [0, 2.8, 3.5],
    },
    {
        id: 1,
        title: "Cirugía y Trasplante (socket)",
        description: "La camilla es central en cirugías como la resección hepática o un trasplante de hígado, tratamientos curativos si el cáncer está localizado.",
        cameraPos: [1.824, 2.304, 2.687],
        cameraTarget: calculateLookAt([1.824, 2.304, 2.687], [-0.458, -0.579, -0.675]),
        tooltipPos: [0.3, 1.8, 1.8],
    },
    {
        id: 2,
        title: "Anestesiología",
        description: "El equipo de anestesia es vital para monitorizar y mantener al paciente estable durante procedimientos complejos como la quimioembolización.",
        cameraPos: [2.345, 3.085, -3.135],
        cameraTarget: calculateLookAt([2.345, 3.085, -3.135], [-0.361, -0.517, -0.776]),
        tooltipPos: calculateLookAt([2.345, 3.085, -3.135], [-0.361, -0.517, -0.776]),
    },
    {
        id: 3,
        title: "Torre de Anestesia",
        description: "Esta torre contiene los monitores y sistemas para controlar las funciones vitales del paciente, crucial durante largas intervenciones.",
        cameraPos: [2.196, 3.001, -1.416],
        cameraTarget: calculateLookAt([2.196, 3.001, -1.416], [-0.849, -0.341, -0.405]),
        tooltipPos: [1.3, 2.8, -1.2],
    },
    {
        id: 4,
        title: "Ablación y Cauterización",
        description: "Equipos de ablación (calor/frío) y cauterización destruyen tumores localmente. La succión mantiene el campo quirúrgico limpio.",
        cameraPos: [0.990, 3.226, -1.530],
        cameraTarget: calculateLookAt([0.990, 3.226, -1.530], [0.967, -0.253, 0.025]),
        tooltipPos: calculateLookAt([0.990, 3.226, -1.530], [0.967, -0.253, 0.025]),
    },
    {
        id: 5,
        title: "Visualización del Tumor",
        description: "Las pantallas son clave para las terapias dirigidas y la radioembolización, donde se visualizan los órganos en tiempo real para aplicar el tratamiento con precisión.",
        cameraPos: [-3.274, 2.817, -5.084],
        cameraTarget: calculateLookAt([-3.274, 2.817, -5.084], [-0.812, -0.195, 0.550]),
        tooltipPos: [-3.8, 2.8, -4.5],
    },
    {
        id: 6,
        title: "Esterilización",
        description: "La esterilidad es fundamental. Estos elementos aseguran un ambiente libre de gérmenes para prevenir infecciones durante cualquier procedimiento invasivo.",
        cameraPos: [-3.866, 1.748, -0.705],
        cameraTarget: calculateLookAt([-3.866, 1.748, -0.705], [-0.689, -0.143, -0.711]),
        tooltipPos: calculateLookAt([-3.866, 1.748, -0.705], [-0.689, -0.143, -0.711]),
    }
];