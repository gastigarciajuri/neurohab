// src/pages/LandingPage.jsx
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full bg-blue-100 text-center p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Aprende a tu propio ritmo</h2>
        <p className="text-xl text-gray-700 mb-6">Cursos online de alta calidad, disponibles cuando y donde quieras.</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          <Link to={'/course'}>
          Ver Progreso
          </Link>
        </button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          <Link to={'/course'}>
          Ver Progreso
          </Link>
        </button>

      </div>
    </Layout>
  );
};

export default LandingPage;
