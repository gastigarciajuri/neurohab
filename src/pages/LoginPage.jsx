// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { loginWithGoogle } from '../../firebase/client';  // Importamos la función actualizada

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Manejo de inicio de sesión con Google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((user) => {
        console.log(user);  // Verifica si el usuario fue autenticado correctamente
        navigate('/course');  // Redirige al curso si la autenticación es exitosa
      })
      .catch((error) => {
        setErrorMessage('Error al iniciar sesión con Google');
        console.error(error); // Manejo de errores si la autenticación falla
      });
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Iniciar Sesión</h2>
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-2 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              required
              disabled  // Deshabilitado ya que no tendrá funcionalidad
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              required
              disabled  // Deshabilitado ya que no tendrá funcionalidad
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            disabled  // Deshabilitado ya que no tendrá funcionalidad
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-red-600 flex items-center justify-center"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google Logo"
              className="w-5 h-5 mr-3"
            />
            Iniciar sesión con Google
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
