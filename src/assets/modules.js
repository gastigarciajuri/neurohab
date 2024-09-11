
const modules = [
  {
    id: 1,
    title: "Introducción a la Programación",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    pdfUrl: "https://www.example.com/material1.pdf",
    questions: [
      { 
        id: 1, 
        question: "¿Cuánto dirías que te concentras cuando estás programando?", 
        options: [
          { text: "Mucho", value: 5 }, 
          { text: "Más o menos", value: 4 },
          { text: "Poco", value: 3 },
          { text: "Casi nunca", value: 2 },
          { text: "Nunca", value: 1 }
        ] 
      },
      { 
        id: 2, 
        question: "¿Qué tan cómodo te sientes usando herramientas de desarrollo?", 
        options: [
          { text: "Muy cómodo", value: 5 }, 
          { text: "Cómodo", value: 4 },
          { text: "Neutral", value: 3 },
          { text: "Incomodo", value: 2 },
          { text: "Muy incomodo", value: 1 }
        ] 
      },
      { 
        id: 3, 
        question: "¿Con qué frecuencia buscas soluciones en línea mientras programas?", 
        options: [
          { text: "Siempre", value: 5 }, 
          { text: "Frecuentemente", value: 4 },
          { text: "A veces", value: 3 },
          { text: "Rara vez", value: 2 },
          { text: "Nunca", value: 1 }
        ] 
      },
      { 
        id: 4, 
        question: "¿Cuánto disfrutas resolver problemas de programación?", 
        options: [
          { text: "Mucho", value: 5 }, 
          { text: "Bastante", value: 4 },
          { text: "Indiferente", value: 3 },
          { text: "Poco", value: 2 },
          { text: "Nada", value: 1 }
        ] 
      },
      { 
        id: 5, 
        question: "¿Cuánto tiempo dedicas a programar diariamente?", 
        options: [
          { text: "Más de 5 horas", value: 5 }, 
          { text: "3-5 horas", value: 4 },
          { text: "1-2 horas", value: 3 },
          { text: "Menos de 1 hora", value: 2 },
          { text: "Casi nunca", value: 1 }
        ] 
      },
      { 
        id: 6, 
        question: "¿Qué tan importante consideras el conocimiento teórico en programación?", 
        options: [
          { text: "Muy importante", value: 5 }, 
          { text: "Importante", value: 4 },
          { text: "Moderado", value: 3 },
          { text: "Poco importante", value: 2 },
          { text: "Nada importante", value: 1 }
        ] 
      },
      { 
        id: 7, 
        question: "¿Cómo te sientes al enfrentar errores en el código?", 
        options: [
          { text: "Motivado", value: 5 }, 
          { text: "Interesado", value: 4 },
          { text: "Indiferente", value: 3 },
          { text: "Frustrado", value: 2 },
          { text: "Desanimado", value: 1 }
        ] 
      },
      { 
        id: 8, 
        question: "¿Cuál es tu nivel de confianza en tus habilidades de depuración?", 
        options: [
          { text: "Muy alto", value: 5 }, 
          { text: "Alto", value: 4 },
          { text: "Moderado", value: 3 },
          { text: "Bajo", value: 2 },
          { text: "Muy bajo", value: 1 }
        ] 
      },
      { 
        id: 9, 
        question: "¿Qué tan a menudo refactorizas tu código?", 
        options: [
          { text: "Siempre", value: 5 }, 
          { text: "Frecuentemente", value: 4 },
          { text: "A veces", value: 3 },
          { text: "Rara vez", value: 2 },
          { text: "Nunca", value: 1 }
        ] 
      },
      { 
        id: 10, 
        question: "¿Qué tan claro te parecen los conceptos de estructuras de datos?", 
        options: [
          { text: "Muy claro", value: 5 }, 
          { text: "Claro", value: 4 },
          { text: "Moderado", value: 3 },
          { text: "Confuso", value: 2 },
          { text: "Muy confuso", value: 1 }
        ] 
      },
      { 
        id: 11, 
        question: "¿Cuánto disfrutas trabajar en proyectos en equipo?", 
        options: [
          { text: "Mucho", value: 5 }, 
          { text: "Bastante", value: 4 },
          { text: "Indiferente", value: 3 },
          { text: "Poco", value: 2 },
          { text: "Nada", value: 1 }
        ] 
      },
      { 
        id: 12, 
        question: "¿Qué tan seguro te sientes trabajando con bases de datos?", 
        options: [
          { text: "Muy seguro", value: 5 }, 
          { text: "Seguro", value: 4 },
          { text: "Neutral", value: 3 },
          { text: "Inseguro", value: 2 },
          { text: "Muy inseguro", value: 1 }
        ] 
      },
      { 
        id: 13, 
        question: "¿Con qué frecuencia actualizas tus conocimientos de programación?", 
        options: [
          { text: "Siempre", value: 5 }, 
          { text: "Frecuentemente", value: 4 },
          { text: "A veces", value: 3 },
          { text: "Rara vez", value: 2 },
          { text: "Nunca", value: 1 }
        ] 
      },
      { 
        id: 14, 
        question: "¿Qué tan fácil te resulta aprender nuevos lenguajes de programación?", 
        options: [
          { text: "Muy fácil", value: 5 }, 
          { text: "Fácil", value: 4 },
          { text: "Moderado", value: 3 },
          { text: "Difícil", value: 2 },
          { text: "Muy difícil", value: 1 }
        ] 
      },
      { 
        id: 15, 
        question: "¿Cuánto disfrutas del proceso de optimización del código?", 
        options: [
          { text: "Mucho", value: 5 }, 
          { text: "Bastante", value: 4 },
          { text: "Indiferente", value: 3 },
          { text: "Poco", value: 2 },
          { text: "Nada", value: 1 }
        ] 
      }
    ]
  }
];

export default modules;
