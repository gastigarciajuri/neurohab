// src/components/TestCorrector.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';


const Feedback = () => {
  const location = useLocation()
  const { answers, test } = location.state || {};
  const sectionScores = test.secciones.map((section, sectionIndex) => {
    const sectionTotal = section.preguntas.reduce((total, _, questionIndex) => {
      return total + (answers[`${sectionIndex}-${questionIndex}`] || 0);
    }, 0);
    return { sectionTitle: section.titulo, total: sectionTotal };
  });

  const totalScore = sectionScores.reduce((acc, score) => acc + score.total, 0);

  const getSectionFeedback = (total) => {
    if (total <= 10) return "Necesitas trabajar en esta área.";
    if (total <= 15) return "Estás en el camino correcto, pero hay áreas de mejora.";
    if (total <= 20) return "Buenas prácticas, continúa así.";
    return "Excelentes hábitos saludables.";
  };

  const getGeneralFeedback = (totalScore) => {
    if (totalScore <= 40) return "Se requiere atención significativa en los hábitos.";
    if (totalScore <= 70) return "Buen nivel de hábitos, pero se pueden hacer mejoras.";
    if (totalScore <= 85) return "Muy buenos hábitos saludables, mantén el esfuerzo.";
    return "Excelente salud general y hábitos establecidos.";
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Resultados del Test</h2>
      {sectionScores.map((score, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">{score.sectionTitle}</h3>
          <p className="text-lg">{getSectionFeedback(score.total)}</p>
          <p className="text-gray-500">Puntaje: {score.total} / 25</p>
        </div>
      ))}
      <hr className="my-6" />
      <div>
        <h3 className="text-2xl font-bold text-gray-800">Interpretación General</h3>
        <p className="text-lg">{getGeneralFeedback(totalScore)}</p>
        <p className="text-gray-500">Puntaje Total: {totalScore} / 100</p>
      </div>
    </div>
  );
};

export default Feedback;
