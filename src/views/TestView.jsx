// src/components/TestView.jsx
import React, { useState } from 'react';

const TestView = ({ test, onComplete }) => {
  const [answers, setAnswers] = useState({});

  //  /*Handler para el select*/
   
  // const handleSelectChange = (sectionIndex, questionIndex, value) => {
  //   setAnswers({
  //     ...answers,
  //     [`${sectionIndex}-${questionIndex}`]: Number(value),
  //   });
  // };

  // Handler para el checkbox
  const handleCheckboxChange = (sectionIndex, questionIndex, value) => {
    setAnswers({
      ...answers,
      [`${sectionIndex}-${questionIndex}`]: Number(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-md max-w-4xl mx-auto">
      {test.secciones.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">{section.titulo}</h3>
          {section.preguntas.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-3">
              <label className="block text-lg mb-2">{question}</label>

              {/* Opción 1: Dropdown Select */}
              {/* <select
                value={answers[`${sectionIndex}-${questionIndex}`] || ''}
                onChange={(e) => handleSelectChange(sectionIndex, questionIndex, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Selecciona una opción</option>
                <option value="0">Nunca</option>
                <option value="1">Rara vez</option>
                <option value="2">Algunas veces</option>
                <option value="3">A menudo</option>
                <option value="4">Siempre</option>
              </select> */}

              {/* Opción 2: Checkboxes   */}
                <div className="flex space-x-2 mt-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <label key={value} className="flex items-center space-x-1">
                      <input
                        type="checkbox"
                        checked={answers[`${sectionIndex}-${questionIndex}`] === value}
                        onChange={() => handleCheckboxChange(sectionIndex, questionIndex, value)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span>{value}</span>
                    </label>
                  ))}
                </div>
            </div>
          ))}
        </div>
      ))}
      <button type="submit" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">
        Enviar respuestas
      </button>
    </form>
  );
};

export default TestView;
