import { db } from '../client';// Asegúrate de tener tu configuración de Firebase
import { doc, setDoc } from 'firebase/firestore';

export const createModule = async () => {
  const moduleData = {
    title: "Módulo 1: Hábitos Saludables",
    description: "Este módulo te enseñará cómo desarrollar hábitos saludables.",
    steps: [
      {
        stepId: 1,
        title: "Introducción al Curso",
        type: "video",
        status: "completed", 
        videoUrl: "https://link-al-video",
        materialUrl: null
      },
      {
        stepId: 2,
        title: "Introducción a los Test",
        type: "text",
        status: "unlocked",
        videoUrl: null,
        materialUrl: null
      },
      {
        stepId: 3,
        title: "Test de Evaluación",
        type: "test",
        status: "locked",
        videoUrl: null,
        materialUrl: null
      },
      {
        stepId: 4,
        title: "Video de Contenido",
        type: "video",
        status: "locked",
        videoUrl: "https://link-al-video",
        materialUrl: null
      },
      {
        stepId: 5,
        title: "Material Descargable",
        type: "material",
        status: "locked",
        videoUrl: null,
        materialUrl: "https://link-al-material"
      }
    ]
  };

  try {
    await setDoc(doc(db, 'modules', 'module1'), moduleData); 
    console.log("Módulo creado con éxito");
  } catch (error) {
    console.error("Error creando el módulo: ", error);
  }
};
