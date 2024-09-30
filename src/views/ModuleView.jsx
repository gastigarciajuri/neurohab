import React, { useState } from 'react';
import TestView from './TestView';
import Layout from '../components/Layout';
import modules from '../assets/modules';

const ModuleView = () => {
  const module = modules[0];  // Usamos el primer (y único) módulo hardcoded
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);

  const handleVideoEnd = () => {
    setVideoCompleted(true);
  };

  const handleTestCompletion = () => {
    setTestCompleted(true);
    setShowTest(false);  // Ocultamos el test después de completarlo
  };

  return (
    <Layout>
      <div className="w-full max-w-5xl mx-auto p-4 flex flex-col justify-center h-full">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{module.title}</h2>
        
        {!showTest ? (
          <>
            <div className="mb-4">
              <video 
                src={module.videoUrl} 
                controls 
                onEnded={handleVideoEnd} 
                className="w-full h-72 max-w-3xl mx-auto"
              />
            </div>

            {/* Alineamos los botones uno al lado del otro */}
            <div className="flex justify-center space-x-4 mb-4">
              <a 
                href={module.pdfUrl} 
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"              
              >
                Descargar Material PDF
              </a>

              <button 
                className={`py-2 px-4 rounded-lg ${videoCompleted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-500 cursor-not-allowed'}`}
                disabled={!videoCompleted || testCompleted}
                onClick={() => setShowTest(true)}
              >
                {testCompleted ? 'Test Completado' : 'Realizar Test'}
              </button>
            </div>
          </>
        ) : (
          <TestView module={module} onComplete={handleTestCompletion} />
        )}
      </div>
    </Layout>
  );
};

export default ModuleView;
