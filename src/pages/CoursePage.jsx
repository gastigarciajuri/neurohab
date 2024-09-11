// src/pages/CoursePage.jsx
import React from 'react';
import Layout from '../components/Layout';
import CourseView from '../views/CourseView';
import { Link } from 'react-router-dom';

const CoursePage = () => {
  // Ejemplo de datos, estos serían dinámicos
  const modules = [
    { title: 'Módulo 1: Introducción', completed: true, locked: false },
    { title: 'Módulo 2: Fundamentos', completed: true, locked: false },
    { title: 'Módulo 3: Proyecto Final', completed: true, locked: false },
  ];

  const progress = (modules.filter(m => m.completed).length / modules.length) * 100;

  return (
    <Layout>
      <CourseView modules={modules} progress={progress} />
    <Link to={'/course/module/1'} >
      <button className='my-4 mx-4 py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700'> Modulo 1</button>
    </Link>
    <Link to={'/course/module/2'} >
      <button className='my-4 mx-4 py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700'> Modulo 2</button>
    </Link>
    <Link to={'/course/module/3'} >
      <button className='my-4 mx-4 py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700'> Modulo 3</button>
    </Link> 
    </Layout>
  );
};

export default CoursePage;