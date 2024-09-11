// src/views/TestResultsView.jsx

import React from 'react';

const TestResultsView = ({ results, elapsedTime }) => {
  const correctAnswers = results.filter(result => result.isCorrect).length;
  
  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Resultados del Test</h2>
      <p className="text-lg mb-4">Has completado el test en {elapsedTime} segundos.</p>
      <p className="text-lg mb-4">
        Respuestas correctas: {correctAnswers}/{results.length}
      </p>
      <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Regresar al Módulo
      </button>
    </div>
  );
};

export default TestResultsView;
