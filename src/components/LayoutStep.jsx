// src/components/LayoutStep.jsx
import React from 'react';

const LayoutStep = ({ title, children, showNextButton, onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        {/* Título del paso */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">{title}</h1>

        {/* Contenido específico del step */}
        <div className="mb-6">
          {children}
        </div>

        {/* Botón para avanzar si se especifica */}
        {showNextButton && (
          <button
            onClick={onNext}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Continuar
          </button>
        )}
      </div>
    </div>
  );
};

export default LayoutStep;
