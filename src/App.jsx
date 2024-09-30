import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/client'; // Importar Firebase auth
import LandingPage from './pages/LandingPage';
import CoursePage from './pages/CoursePage';
import ModuleView from './views/ModuleView';
import NotFoundPage from './pages/NotFoundPage';
import UserProfileView from './views/UserProfileView';
import TestResultsView from './views/TestResultsView';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute'; // Mantener el componente actualizado


function App() {
  // Usamos el hook de Firebase para obtener el estado de autenticación
  const [user, loading] = useAuthState(auth);

  if (loading) {
    // Muestra un indicador de carga mientras verificamos la autenticación
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<LoginPage />} />
        <Route
          path="/course"
          element={
            <PrivateRoute user={user}>
              <CoursePage />
            </PrivateRoute>
          }
        />
        
        <Route 
        path="/course/module/:moduleId" 
        element={
          <PrivateRoute user={user}>
            <ModuleView />
          </PrivateRoute> 
        } />
   
        <Route
          path="/profile"
          element={
            <PrivateRoute user={user}>
              <UserProfileView />
            </PrivateRoute>
          }
        />
        <Route
          path="/test/results"
          element={
            <PrivateRoute user={user}>
              <TestResultsView />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
