import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from '../components/Navbar';
import { getUserProgress, getModuleData } from '../../firebase/progress';
import { auth } from '../../firebase/client';

const CoursePage = () => {
  const [user] = useAuthState(auth);
  const [currentModule, setCurrentModule] = useState(null);
  const [userProgress, setUserProgress] = useState(0);
  const [stepsStatus, setStepsStatus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserData = async () => {
      if (user) {
        const progress = await getUserProgress(user.uid);
        setUserProgress(progress);

        const moduleData = await getModuleData("module1"); // Cambia 'module1' por el ID adecuado
        if (moduleData) {
          setCurrentModule(moduleData);
          const updatedSteps = moduleData.steps.map((step, index) => ({
            ...step,
            status: index < progress ? "completed" : index === progress ? "unlocked" : "locked"
          }));
          setStepsStatus(updatedSteps);
        }
      }
    };

    loadUserData();
  }, [user]);

  const handleStepClick = (step) => {
    if (step.status === "unlocked") {
      navigate(`/course/step${step.stepId}`);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Curso de Hábitos</h1>

        {currentModule && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Actualmente te encuentras en:</h2>
            <div className="p-4 border border-gray-300 bg-white rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-800">{currentModule.title}</h3>
              <p className="text-gray-600">{currentModule.description}</p>
            </div>
          </div>
        )}

        {stepsStatus.length > 0 && (
          <div className="space-y-4">
            {stepsStatus.map((step) => (
              <div
                key={step.stepId}
                className={`p-4 rounded-lg shadow-lg flex justify-between items-center ${
                  step.status === "completed" 
                    ? "bg-green-100 border-green-400" 
                    : step.status === "unlocked" 
                    ? "bg-blue-100 border-blue-400 cursor-pointer" 
                    : "bg-gray-200 border-gray-400 cursor-not-allowed"
                }`}
                onClick={() => handleStepClick(step)}
              >
                <div>
                  <h3 className={`font-semibold ${
                    step.status === "completed" ? "text-green-600" : step.status === "unlocked" ? "text-blue-600" : "text-gray-600"
                  }`}>
                    {step.title}
                  </h3>
                </div>
                <div className="text-sm">
                  {step.status === "completed" && <span className="text-green-600">Completado</span>}
                  {step.status === "unlocked" && <span className="text-blue-600">Disponible</span>}
                  {step.status === "locked" && <span className="text-gray-600">Bloqueado</span>}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700">Tu progreso actual:</h3>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${userProgress * (100 / (currentModule?.steps.length || 1))}%` }} // Calcula el porcentaje del progreso
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">{userProgress} de {currentModule?.steps.length} pasos completados</p>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
