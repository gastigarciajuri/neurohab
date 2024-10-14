// src/views/Step5.jsx
import React from 'react';
import Layout from '../../components/Layout';

const Step5 = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Material descargable</h1>
      <a 
        href="your-pdf-url.pdf" 
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Descargar Material PDF
      </a>
    </Layout>
  );
};

export default Step5;
