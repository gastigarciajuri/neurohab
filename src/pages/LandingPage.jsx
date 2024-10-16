// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { loginWithGoogle } from '../../firebase/client';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/client';
import bgImage from '../assets/background.jpg';

const LandingPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((user) => {
        console.log(user);
        navigate('/course');
      })
      .catch((error) => {
        console.error('Error al iniciar sesión con Google', error);
      });
  };

  return (
    <Layout>
      {/* Sección de pantalla completa con imagen de fondo */}
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Capa oscura para texto y botón */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
            ¡Bienvenido a la plataforma de E-Learning!
          </h1>
          <p className="text-xl text-gray-300 mb-8 drop-shadow-lg text-center max-w-2xl">
            La mejor plataforma para adquirir nuevos hábitos. Únete y comienza tu transformación hoy mismo.
          </p>
          {user ? (
            <Link to="/course">
              <button className="bg-blue-800 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg">
                Acceder al curso
              </button>
            </Link>
          ) : (
            <div className="mt-6">
              <button
                onClick={handleGoogleLogin}
                className="bg-gray-900 text-white py-3 px-8 rounded-lg hover:bg-red-600 flex items-center justify-center transition duration-300 shadow-lg"
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="Google Logo"
                  className="w-6 h-6 mr-3"
                />
                Iniciar sesión con Google
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
