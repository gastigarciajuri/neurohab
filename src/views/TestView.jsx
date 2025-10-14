import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TestView = ({ test, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false); // Para controlar si las respuestas fueron enviadas
  const [canAdvance, setCanAdvance] = useState(false); // Para controlar el desbloqueo del botón "Avanzar al siguiente"
  const navigate = useNavigate();

  // Handler para el select
  const handleSelectChange = (sectionIndex, questionIndex, value) => {
    setAnswers({
      ...answers,
      [`${sectionIndex}-${questionIndex}`]: Number(value),
    });
  };
  const handleCheckboxChange = (sectionIndex, questionIndex, value) => {
    setAnswers({
      ...answers,
      [`${sectionIndex}-${questionIndex}`]: Number(value),
    });
  };

  // Handler para enviar las respuestas y navegar a la vista de feedback
  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(answers); // Enviar las respuestas
    setSubmitted(true);  // Marcar como enviado
    setCanAdvance(true); // Desbloquear el botón "Avanzar al siguiente"
  };

  const handleFeedbackClick = () => {
    navigate("/course/feedback", { state: { answers, test } }); // Pasar respuestas y test al navegar
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-md max-w-4xl mx-auto">
      {test.secciones.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">{section.titulo}</h3>
          {section.preguntas.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-3">
              <label className="block text-lg mb-2">{question}</label>
              {/* <select
                value={answers[`${sectionIndex}-${questionIndex}`] || ''}
                onChange={(e) => handleSelectChange(sectionIndex, questionIndex, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option>Selecciona una opción</option>
                <option value="1">Nunca</option>
                <option value="2">Rara vez</option>
                <option value="3">Algunas veces</option>
                <option value="4">A menudo</option>
                <option value="5">Siempre</option>
              </select> */}
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

      {/* Botón para enviar respuestas */}
      {!submitted ? (
        <button type="submit" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">
          Enviar respuestas
        </button>
      ) : (
        // Botón para ver feedback si ya se enviaron las respuestas
        <button onClick={handleFeedbackClick} type="button" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">
          Ver feedback
        </button>
      )}

      {/* Botón para avanzar al siguiente paso
      <button
        type="button"
        disabled={!canAdvance} // Deshabilitado si no se han enviado las respuestas
        className={`mt-4 ml-4 px-6 py-3 rounded-lg shadow-md ${
          canAdvance ? 'bg-green-600 text-white' : 'bg-gray-400 text-gray-700'
        }`}
      >
        Avanzar al siguiente
      </button> */}
    </form>
  );
};

export default TestView;


{/* <div className="flex space-x-2 mt-2">
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
                </div> */}
              {/* Opción 2: Checkboxes   */}
                {/* <div className="flex space-x-2 mt-2">
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
                </div> */}
                // Handler para el checkbox
// const handleCheckboxChange = (sectionIndex, questionIndex, value) => {
//     setAnswers({
//       ...answers,
//       [`${sectionIndex}-${questionIndex}`]: Number(value),
//     });
//   };