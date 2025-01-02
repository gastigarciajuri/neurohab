import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { getFileURL } from '../../../firebase/progress';

const Step5 = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const filePath = 'gs://neurohab-54ceb.appspot.com/TBCCS1_TBCCS2_merged.pdf';

  useEffect(() => {
    const fetchFileUrl = async () => {
      try {
        const url = await getFileURL(filePath);
        setFileUrl(url);
      } catch (error) {
        console.log("Error al cargar el archivo", error);
      }
    };
    fetchFileUrl();
  }, [filePath]);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Material descargable</h1>
      {fileUrl ? (
        <div>
          {/* Opción 1: Abrir en una nueva pestaña */}
          <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 mr-4">
            Ver Material PDF
          </a>

          {/* Opción 2: Descargar el archivo automáticamente */}
          {/* <a href={fileUrl} download className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
            Descargar Material PDF
          </a> */}
        </div>
      ) : (
        <p>Cargando archivo...</p>
      )}
    </Layout>
  );
};

export default Step5;
