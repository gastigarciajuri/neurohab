// src/views/steps/Step3.jsx
import React, { useState } from 'react';
import TestView from '../TestView'; 
import testData from '../../assets/testData'
import Feedback from '../../components/Feedback';

const Step3 = () => {
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [answers, setAnswers] = useState({});

  const handleTestComplete = (responses) => {
    setAnswers(responses);
    setIsTestComplete(true);
  };

  return (
    <div className="container mx-auto p-4">
      {!isTestComplete ? (
        <TestView test={testData.test} onComplete={handleTestComplete} />
      ) : (
        <Feedback answers={answers} test={testData.test} />
      )}
    </div>
  );
};

export default Step3;
