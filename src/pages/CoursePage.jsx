// // src/pages/CoursePage.jsx
// import React from 'react';
// import Layout from '../components/Layout';
// import CourseView from '../views/CourseView';
// import { Link } from 'react-router-dom';

// const CoursePage = () => {
//   // Datos ejemplo, estos podrían ser dinámicos desde Firestore u otra fuente de datos
//   const modules = [
//     { title: 'Módulo 1', completed: true, locked: false },
//     { title: 'Módulo 2', completed: false, locked: true },
//     { title: 'Módulo 3', completed: false, locked: true },
//   ];

//   const progress = (modules.filter(m => m.completed).length / modules.length) * 100;

//   return (
//     <Layout>
//       <CourseView modules={modules} progress={progress} />

//       {/* Botones para cada módulo */}
//       <div className='my-8'>
//         {modules.map((module, index) => (
//           <Link to={`/course/step${index + 1}`} key={index}>
//             <button
//               className={`my-2 mx-4 py-2 px-4 rounded-lg 
//               ${module.locked ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
//               disabled={module.locked}
//             >
//               {module.title}
//             </button>
//           </Link>
//         ))}
//       </div>
//     </Layout>
//   );
// };

// export default CoursePage;

import React from 'react';
import Layout from '../components/Layout';
import CourseView from '../views/CourseView';
import { useNavigate } from 'react-router-dom';

const CoursePage = () => {
  const navigate = useNavigate();
  
  // Datos de ejemplo
  const modules = [
    { title: 'Módulo 1', completed: true, locked: false },
    { title: 'Módulo 2', completed: false, locked: true },
    { title: 'Módulo 3', completed: false, locked: true },
  ];

  const progress = (modules.filter(m => m.completed).length / modules.length) * 100;

  // Función para manejar clic en un módulo
  const handleModuleClick = (index) => {
    // Recupera el progreso guardado del localStorage para el módulo correspondiente
    const savedStep = localStorage.getItem('course_progress');
    
    if (savedStep && !isNaN(savedStep)) {
      // Si hay progreso guardado, redirige al último paso guardado
      navigate(`/course/step${savedStep}`);
    } else {
      // Si no hay progreso guardado, redirige al primer paso del módulo
      navigate(`/course/step1`);
    }
  };

  return (
    <Layout>
      <CourseView modules={modules} progress={progress} />

      {/* Botones para cada módulo */}
      <div className='my-8'>
        {modules.map((module, index) => (
          <button
            key={index}
            onClick={() => handleModuleClick(index)}
            className={`my-2 mx-4 py-2 px-4 rounded-lg 
              ${module.locked ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            disabled={module.locked}
          >
            {module.title}
          </button>
        ))}
      </div>
    </Layout>
  );
};

export default CoursePage;
