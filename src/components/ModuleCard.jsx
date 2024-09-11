import React from 'react';

const ModuleCard = ({ title, completed = false, locked = false }) => {
  const statusClasses = completed 
    ? 'bg-green-100 text-green-700' 
    : locked 
    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
    : 'bg-white text-blue-700 hover:bg-blue-50';

  return (
    <div className={`p-4 rounded-lg shadow-md ${statusClasses}`}>
      <h3 className="text-lg font-bold">{title || "Módulo Sin Título"}</h3>
      {completed && <p className="text-sm">Completado</p>}
      {locked && <p className="text-sm">Bloqueado</p>}
    </div>
  );
};

export default ModuleCard;
