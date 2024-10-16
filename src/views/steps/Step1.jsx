import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { updateUserProgress } from '../../../firebase/progress';
import { auth } from '../../../firebase/client';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const [user] = useAuthState(auth);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const navigate = useNavigate(); 

  const handleVideoEnd = async () => {
    setVideoCompleted(true);    
    // Actualizar el progreso del usuario en Firestore al completar el paso 1
    if(user){

      await updateUserProgress(user.uid, 1);  // Guardar el progreso solo en la base de datos
    }

    // Desbloquear el siguiente paso solo en el front-end al completar el paso actual
  };

  const handleContinue = () => {
    if (videoCompleted) {
      navigate('/course/step2'); // Navegar a Step2
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Bienvenido al curso</h1>
      
      {/* Video de introducción */}
      <video 
        src={"https://www.w3schools.com/html/mov_bbb.mp4"} 
        controls 
        onEnded={handleVideoEnd}  // Detecta cuando el video ha terminado
        className="w-full h-72 max-w-3xl mx-auto"
      />

      {/* Botón de "Continuar" */}
      <button 
        className={`mt-4 py-2 px-4 rounded-lg ${videoCompleted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-500 cursor-not-allowed'}`}
        onClick={handleContinue}  
        disabled={!videoCompleted}  
      >
        Continuar
      </button>
    </Layout>
  );
};

export default Step1;
