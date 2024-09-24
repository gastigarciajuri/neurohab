// src/components/Layout.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../../firebase/client'; // Asegúrate de tener la función logout

const Layout = ({ children }) => {
  const [user] = useAuthState(auth);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Crear una referencia para el menú

  const handleLogout = async () => {
    await logout();
    setMenuOpen(false); // Cerrar el menú después de cerrar sesión
  };

  const handleClickOutside = (event) => {
    if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false); // Cerrar el menú si se hace clic fuera de él
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside); // Escuchar clics en el documento
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Limpiar el listener al desmontar
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">NEUROFIT</h1>
          {user ? (
            <div className="relative flex items-center">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)} // Alternar menú
              />
              {menuOpen && (
                <div ref={menuRef} className="absolute right-0 top-6 bg-white text-black shadow-md mt-2 rounded-lg">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-200 text-center p-4">
        <p className="text-gray-600">© 2024 NEUROFIT</p>
      </footer>
    </div>
  );
};

export default Layout;
