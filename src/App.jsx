import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CoursePage from './pages/CoursePage';
import ModuleView from './views/ModuleView';
import NotFoundPage from './pages/NotFoundPage';
import UserProfileView from './views/UserProfileView';
import TestResultsView from './views/TestResultsView';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<LandingPage />} />

        {/* Ruta para la página del curso */}
        <Route path="/course" element={<CoursePage />} />

        {/* Ruta para la vista del módulo */}
        <Route path="/course/module/:moduleId" element={<ModuleView />} />

        {/* Ruta para el perfil de usuario */}
        <Route path="/profile" element={<UserProfileView />} />

        {/* Ruta para la vista de resultados de los tests */}
        <Route path="/test/results" element={<TestResultsView />} />

        {/* Ruta para el manejo de páginas no encontradas */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
