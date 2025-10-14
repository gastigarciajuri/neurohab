import React, { useState } from 'react';
import TestView from '../TestView'; 
import testData from '../../assets/testData';
import Feedback from '../../components/Feedback';
import Layout from '../../components/Layout';
import { updateUserProgress } from '../../../firebase/progress';
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
  };

  const handleContinue = () => {
    user && updateUserProgress(user.uid, 3);
    if (isTestComplete) {
      navigate('/course/step4'); 
    }
  };
  // {!isTestComplete ? (
  //   <TestView test={testData.test} onComplete={handleTestComplete} />
  // ) : (
  //   <>
  //     <Feedback answers={answers} test={testData.test} />
      
      {/* Botón para continuar */}

  return (
    <Layout>
      <div className="container mx-auto p-4">      
          <TestView test={testData.test} onComplete={handleTestComplete} />      
            {/* Botón para continuar */}
            <button 
              className="mt-4 py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
              onClick={handleContinue}
            >
              Continuar al siguiente paso
            </button>                  
      </div>
    </Layout>
  );
};

export default Step3;
