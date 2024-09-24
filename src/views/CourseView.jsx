import React from 'react';
import ModuleCard from '../components/ModuleCard';
import UserProgress from '../components/UserProgress';

const CourseView = ({ modules, progress }) => {
  console.log('Modules:', modules); // Añadir esta línea para ver los módulos en consola
  console.log('Progress:', progress); // Añadir esta línea para ver el progreso en consola

  if (!Array.isArray(modules) || modules.length === 0) {
    return <p>No hay módulos disponibles.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Curso de Hábitos</h2>
      <UserProgress progress={progress || 0} /> {/* Valor predeterminado en caso de que progress sea undefined */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((module, index) => (
          <ModuleCard key={index} {...module} />
        ))}
      </div>
    </div>
  );
};

export default CourseView;
