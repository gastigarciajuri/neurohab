import React, { useState } from 'react';
import TestView from '../TestView'; 
import testData from '../../assets/testData';
import Feedback from '../../components/Feedback';
import Layout from '../../components/Layout';
import { updateUserProgress } from '../../../firebase/progress'; // Eliminamos unlockNextStep
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/client';
import { useAuthState } from 'react-firebase-hooks/auth';

const Step3 = () => {
  const [user] = useAuthState(auth)
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleTestComplete = async (responses) => {
    setAnswers(responses);
    setIsTestComplete(true);

    // Actualizar el progreso del usuario en Firestore al completar el paso 3
    if (user) {
      await updateUserProgress(user.uid, 3); // Paso 3
    }    

    // Aquí solo habilitamos el botón para avanzar al siguiente paso en el front-end
  };

  const handleContinue = () => {
    if (isTestComplete) {
      navigate('/course/step4'); // Navegar a Step4 una vez que el test esté completo
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        {!isTestComplete ? (
          <TestView test={testData.test} onComplete={handleTestComplete} />
        ) : (
          <>
            <Feedback answers={answers} test={testData.test} />
            
            {/* Botón para continuar */}
            <button 
              className="mt-4 py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
              onClick={handleContinue}
            >
              Continuar al siguiente paso
            </button>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Step3;
