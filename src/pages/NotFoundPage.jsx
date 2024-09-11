// src/pages/NotFoundPage.jsx
import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center h-full text-center">
        <h2 className="text-4xl font-bold text-red-600">404</h2>
        <p className="text-xl text-gray-700 mt-4">Página no encontrada</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
