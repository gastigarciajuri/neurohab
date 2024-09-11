import React, { useState, useEffect, useRef } from 'react';

const TestView = ({ module, onComplete }) => {
  const [responses, setResponses] = useState(module.questions.map(() => null));
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timeLimitReached, setTimeLimitReached] = useState(false);
  const timeLimit = 300; // Límite de tiempo en segundos (5 minutos)

  const intervalRef = useRef(null);

  useEffect(() => {
    if (startTime) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(prevTime => {
          const newTime = Math.floor((Date.now() - startTime) / 1000);
          if (newTime >= timeLimit) {
            clearInterval(intervalRef.current);
            setTimeLimitReached(true);
            console.log("Tiempo límite alcanzado. Test incompleto.");
            onComplete();
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [startTime, timeLimit, onComplete]);

  const handleOptionChange = (questionIndex, value) => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    const newResponses = [...responses];
    newResponses[questionIndex] = value;
    setResponses(newResponses);
  };

  const isTestComplete = responses.every(response => response !== null);

  const handleSubmit = () => {
    if (isTestComplete) {
      clearInterval(intervalRef.current);
      console.log("Respuestas:", responses);
      console.log("Tiempo total:", elapsedTime, "segundos");
      onComplete();
    }
  };

  return (
    <div className="relative p-6 bg-gray-50 text-gray-900">
      {/* Contenedor del tiempo flotante */}
      <div className="fixed top-4 right-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg z-50">
        <p className="text-xl font-semibold">Tiempo transcurrido: {elapsedTime} segundos</p>
      </div>

      <h2 className="text-3xl font-bold mb-6">Test del módulo: {module.title}</h2>
      {module.questions.map((question, index) => (
        <div key={question.id} className="mb-6 p-4 bg-white rounded-lg shadow-md">
          <p className="text-xl font-semibold mb-2">{question.question}</p>
          <div className="flex flex-col space-y-2">
            {question.options.map(option => (
              <label key={option.value} className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name={`question-${index}`} 
                  value={option.value} 
                  onChange={() => handleOptionChange(index, option.value)} 
                  disabled={timeLimitReached}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span className="text-lg">{option.text}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button 
        onClick={handleSubmit} 
        disabled={!isTestComplete || timeLimitReached} 
        className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Finalizar Test
      </button>
    </div>
  );
};

export default TestView;
