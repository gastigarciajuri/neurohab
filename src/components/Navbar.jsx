import React, { useState, useRef, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../../firebase/client'; // Asegúrate de tener la función logout

const Navbar = () => {
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
  )
}

export default Navbar