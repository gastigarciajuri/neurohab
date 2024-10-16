// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/client';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log('Sesión cerrada');
    }).catch((error) => {
      console.error('Error al cerrar sesión', error);
    });
  };

  return (
    <nav className="bg-blue-900 text-white py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
          NEUROFIT
        </Link>
        <div>
          {user ? (
            <div className="flex items-center">
              <img src={user.photoURL} alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition duration-300"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
                Iniciar sesión
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
