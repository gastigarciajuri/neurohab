import React, { useState } from 'react';
import Layout from '../../components/Layout';

const Step2 = ({ onContinue }) => {
  const [textRead, setTextRead] = useState(false);

  const handleTextRead = () => {
    setTextRead(true);
    localStorage.setItem('course_progress', 3); // Guardar el progreso solo cuando el texto ha sido leído
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Introducción a los tests</h1>
      <p className="mb-4">Aquí tienes una introducción sobre los tests que realizarás a continuación.</p>
      
      <button 
        className={`mt-4 py-2 px-4 rounded-lg ${textRead ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-500 cursor-not-allowed'}`}
        onClick={onContinue}
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
