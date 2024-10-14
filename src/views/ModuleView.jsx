// import React, { useState } from 'react';
// import TestView from './TestView';
// import Layout from '../components/Layout';
// import modules from '../assets/modules';

// const ModuleView = () => {
//   const module = modules[0];  // Usamos el primer (y único) módulo hardcoded
//   const [videoCompleted, setVideoCompleted] = useState(false);
//   const [showTest, setShowTest] = useState(false);
//   const [testCompleted, setTestCompleted] = useState(false);

//   const handleVideoEnd = () => {
//     setVideoCompleted(true);
//   };

//   const handleTestCompletion = () => {
//     setTestCompleted(true);
//     setShowTest(false);  // Ocultamos el test después de completarlo
//   };

//   return (
//     <Layout>
//       <div className="w-full max-w-5xl mx-auto p-4 flex flex-col justify-center h-full">
//         <h2 className="text-2xl font-bold text-blue-700 mb-4">{module.title}</h2>
        
//         {!showTest ? (
//           <>
//             <div className="mb-4">
//               <video 
//                 src={module.videoUrl} 
//                 controls 
//                 onEnded={handleVideoEnd} 
//                 className="w-full h-72 max-w-3xl mx-auto"
//               />
//             </div>

//             {/* Alineamos los botones uno al lado del otro */}
//             <div className="flex justify-center space-x-4 mb-4">
//               <a 
//                 href={module.pdfUrl} 
//                 className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"              
//               >
//                 Descargar Material PDF
//               </a>

//               <button 
//                 className={`py-2 px-4 rounded-lg ${videoCompleted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-500 cursor-not-allowed'}`}
//                 disabled={!videoCompleted || testCompleted}
//                 onClick={() => setShowTest(true)}
//               >
//                 {testCompleted ? 'Test Completado' : 'Realizar Test'}
//               </button>
//             </div>
//           </>
//         ) : (
//           <TestView module={module} onComplete={handleTestCompletion} />
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default ModuleView;
import React, { useState } from 'react';
import Layout from '../components/Layout';
import TestView from './TestView'; // Para los 3 tests
import modules from '../assets/modules'; // Hardcoded, puede ser de Firestore

const ModuleView = () => {
  const [currentStep, setCurrentStep] = useState(1); // Controla el progreso en pasos
  const [testCompleted, setTestCompleted] = useState(false);
  const [testsCompletedCount, setTestsCompletedCount] = useState(0);

  const module = modules[0]; // Modificar según sea necesario

  const handleVideoIntroEnd = () => {
    setCurrentStep(2); // Al completar el video de introducción, pasa al siguiente paso
  };

  const handleTestCompletion = () => {
    setTestsCompletedCount(prev => prev + 1);
    if (testsCompletedCount + 1 === 3) {
      setTestCompleted(true); // Una vez completos los 3 tests
      setCurrentStep(4); // Avanza al siguiente paso, video del módulo del curso
    }
  };

  const handleCourseVideoEnd = () => {
    setCurrentStep(5); // Desbloquear el material descargable
  };

  return (
    <Layout>
      <div className="w-full max-w-5xl mx-auto p-4 flex flex-col justify-center h-full">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{module.title}</h2>
        
        {/* Paso 1: Video de introducción */}
        {currentStep >= 1 && (
          <div className="mb-4">
            <video 
              src={module.videoUrl} 
              controls 
              onEnded={handleVideoIntroEnd} 
              className="w-full h-72 max-w-3xl mx-auto"
            />
          </div>
        )}

        {/* Paso 2: Texto de introducción a los tests */}
        {currentStep >= 2 && (
          <div className="mb-4">
            <p className="text-lg text-gray-700">A continuación, debes realizar los tests para continuar.</p>
          </div>
        )}

        {/* Paso 3: Tests */}
        {currentStep === 3 && (
          <TestView onComplete={handleTestCompletion} />
        )}

        {/* Paso 4: Video del curso */}
        {currentStep >= 4 && (
          <div className="mb-4">
            <video 
              src={module.videoUrl} 
              controls 
              onEnded={handleCourseVideoEnd} 
              className="w-full h-72 max-w-3xl mx-auto"
            />
          </div>
        )}

        {/* Paso 5: Botón para descargar el material */}
        {currentStep === 5 && (
          <div className="flex justify-center space-x-4 mb-4">
            <a 
              href={module.pdfUrl} 
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"              
            >
              Descargar Material PDF
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ModuleView;
