// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { loginWithGoogle } from '../../firebase/client';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/client';


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
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}> 
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-md">¡Bienvenido a la plataforma de E-Learning!</h1>
          <p className="text-xl text-gray-200 mb-8 drop-shadow-md">
            Empieza tu camino en la programación con cursos diseñados para que aprendas de manera efectiva y a tu propio ritmo.
          </p>
          
          {user ? (
            <Link to="/course">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Acceder al curso
              </button>
            </Link>
          ) : (
            <div className="mt-6">
              <button
                onClick={handleGoogleLogin}
                className="bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-red-600 flex items-center justify-center transition duration-300"
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="Google Logo"
                  className="w-5 h-5 mr-3"
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
