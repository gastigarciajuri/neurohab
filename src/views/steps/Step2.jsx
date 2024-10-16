import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { updateUserProgress } from '../../../firebase/progress';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/client';
import { useAuthState } from 'react-firebase-hooks/auth';


const Step2 = () => {
  const [user] = useAuthState(auth);
  const [textRead, setTextRead] = useState(false);
  const navigate = useNavigate(); 

  const handleTextRead = async () => {
    setTextRead(true);
    // Actualizar el progreso del usuario en Firestore al completar el paso 2
    if (user) {
      await updateUserProgress(user.uid, 2); // Paso 2
    }

    // Desbloquear el siguiente paso solo en el front-end
  };

  const handleContinue = () => {
    if (textRead) {
      navigate('/course/step3'); // Navegar a Step3
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Introducción a los tests</h1>
      <p className="mb-4">Aquí tienes una introducción sobre los tests que realizarás a continuación.</p>
      
      <button 
        className={`mt-4 py-2 px-4 rounded-lg ${textRead ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-500 cursor-not-allowed'}`}
        onClick={handleContinue}
        disabled={!textRead}
      >
        Continuar
      </button>

      <button onClick={handleTextRead} className="mt-2 text-sm underline">
        Marcar texto como leído
      </button>
    </Layout>
  );
};

export default Step2;
