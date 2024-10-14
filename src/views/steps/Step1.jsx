// src/steps/Step1.jsx
import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { auth, db } from '../../../firebase/client';
import { doc, updateDoc } from 'firebase/firestore';


const Step1 = ({ onContinue }) => {
  const [videoCompleted, setVideoCompleted] = useState(false);
  const user = auth.currentUser; // Obtén el usuario autenticado

  // Maneja el evento de finalización del video
  const handleVideoEnd = async () => {
    setVideoCompleted(true); // Habilitar el botón al finalizar el video

    if (user) {
      const userRef = doc(db, 'users', user.uid); // Referencia al documento del usuario

      // Actualiza el progreso del usuario en Firestore
      await updateDoc(userRef, {
        progress: 2 // Asigna el nuevo progreso (en este caso, al segundo paso)
      });
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
        onClick={onContinue}  // Función que mueve al siguiente paso
        disabled={!videoCompleted}  // Deshabilitado hasta que se termine el video
      >
        Continuar
      </button>
    </Layout>
  );
};

export default Step1;
