import React, { useEffect, useState } from 'react';
import UserProgress from '../components/UserProgress';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const CourseView = () => {
  // Estado para manejar el progreso actual del usuario
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate()

  // Recuperar el progreso desde localStorage al cargar el componente
  useEffect(() => {
    const savedProgress = localStorage.getItem('course_progress');
    if (savedProgress) {
      setCurrentStep(parseInt(savedProgress)); // Establecer el paso guardado si existe
    }
  }, []);

  // Función para manejar el progreso al hacer clic en un enlace
  const handleProgress = (nextStep) => {
    setCurrentStep(nextStep);
    localStorage.setItem('course_progress', nextStep); // Guardar el progreso en localStorage
  };

  return (
    <div className='bg-gray-50 p-6 rounded-lg shadow-md'>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Curso de Hábitos</h2>
      
      {/* Componente que muestra el progreso del usuario */} 
      <UserProgress progress={currentStep} /> 

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
        <p className="text-lg text-gray-600 mb-4">
          Bienvenido al curso de hábitos.  </p> 
          <p>Este curso está diseñado para completarse en secuencia, avanza por cada paso cuando estés listo.</p>
      

        {/* Botones basados en el paso actual del usuario */}
        {currentStep === 1 && (
          <Link 
            to="/course/step1" 
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={() => handleProgress(2)} // Avanzar al siguiente paso y guardar progreso
          >
            Comenzar Curso - Introducción
          </Link>
        )}
        {currentStep === 2 && (
          <Link 
            to="/course/step2" 
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={() => handleProgress(3)} // Avanzar al siguiente paso y guardar progreso
          >
            Continuar a la Introducción de los Test
          </Link>
        )}
        {currentStep === 3 && (
          <Link 
            to="/course/step3" 
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={() => handleProgress(4)} // Avanzar al siguiente paso y guardar progreso
          >
            Realizar los Test
          </Link>
        )}
        {currentStep === 4 && (
          <Link 
            to="/course/step4" 
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={() => handleProgress(5)} // Avanzar al siguiente paso y guardar progreso
          >
            Ver Video de Contenido
          </Link>
        )}
        {currentStep === 5 && (
          <Link 
            to="/course/step5" 
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={() => handleProgress(6)} // Avanzar al siguiente paso y guardar progreso
          >
            Descargar Material
          </Link>
        )}
       
      </div>
    </div>
  );
};

export default CourseView;
