// src/views/Step4.jsx
import React, { useState } from 'react';
import Layout from '../../components/Layout';

const Step4 = ({ onContinue }) => {
  const [videoCompleted, setVideoCompleted] = useState(false);

  const handleVideoEnd = () => {
    setVideoCompleted(true);
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Contenido del curso</h1>
      <video 
        src="your-content-video-url.mp4" 
        controls 
        onEnded={handleVideoEnd}
        className="w-full h-72 max-w-3xl mx-auto"
      />
      <button 
        className={`mt-4 py-2 px-4 rounded-lg ${videoCompleted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-500 cursor-not-allowed'}`}
        onClick={onContinue}
        disabled={!videoCompleted}
      >
        Continuar
      </button>
    </Layout>
  );
};

export default Step4;
