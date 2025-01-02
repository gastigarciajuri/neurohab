// src/components/Lay// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/client';// Asegúrate de que esta ruta es correcta
import Footer from './Footer';


const Layout = ({ children }) => { 
  const [user] = useAuthState(auth);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">     
        <Navbar user={user} /> {/* Pasar el usuario al Navbar si es necesario */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
        <Footer />
    </div>
  );
};

export default Layout;

