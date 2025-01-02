import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/client';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú desplegable

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log('Sesión cerrada');
    }).catch((error) => {
      console.error('Error al cerrar sesión', error);
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-900 text-white py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
          NEUROFIT
        </Link>
        <div className="relative">
          {user && (
            <div className="flex items-center">
              {/* Imagen de perfil con borde */}
              <div className="relative">
                <img
                  src={user.photoURL}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                  onClick={toggleMenu} // Al hacer clic, alterna el menú
                />
                {/* Menú desplegable */}
                {menuOpen && (
                  <div className="absolute right-0 mt-0 w-32 bg-white text-black rounded-lg shadow-lg py-2">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
