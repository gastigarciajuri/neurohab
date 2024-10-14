// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/client'; // Importa tu configuración de Firebase
import LandingPage from './pages/LandingPage';
import CoursePage from './pages/CoursePage';

import Step1 from './views/steps/Step1';
import Step2 from './views/steps/Step2';
import Step3 from './views/steps/Step3';
import Step4 from './views/steps/Step4';
import Step5 from './views/steps/Step5';
import Feedback from './components/Feedback'; // Importa el componente de Feedback
import PrivateRoute from './components/PrivateRoute'; // Asegúrate de tener el componente de rutas privadas

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Rutas protegidas */}
        <Route
          path="/course"
          element={
            <PrivateRoute user={user}>
              <CoursePage />
            </PrivateRoute>
          }
        />

        {/* Rutas para los diferentes pasos del curso */}
        <Route
          path="/course/step1"
          element={
            <PrivateRoute user={user}>
              <Step1 onContinue={() => window.location.href = '/course/step2'} />
            </PrivateRoute>
          }
        />
        <Route
          path="/course/step2"
          element={
            <PrivateRoute user={user}>
              <Step2 onContinue={() => window.location.href = '/course/step3'} />
            </PrivateRoute>
          }
        />
        <Route
          path="/course/step3"
          element={
            <PrivateRoute user={user}>
              <Step3 onComplete={() => window.location.href = '/course/feedback'} />
            </PrivateRoute>
          }
        />
        <Route
          path="/course/step4"
          element={
            <PrivateRoute user={user}>
              <Step4 onContinue={() => window.location.href = '/course/step5'} />
            </PrivateRoute>
          }
        />
        <Route
          path="/course/step5"
          element={
            <PrivateRoute user={user}>
              <Step5 />
            </PrivateRoute>
          }
        />
        
        {/* Ruta para Feedback */}
        <Route
          path="/course/feedback"
          element={
            <PrivateRoute user={user}>
              <Feedback />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
