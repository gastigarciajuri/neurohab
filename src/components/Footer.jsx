import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-footer text-white py-4 px-8 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo o nombre de la aplicación */}
        <div className="text-lg font-semibold mb-2 md:mb-0">
          <span className="hover:text-gray-300 transition duration-300">NEUROFIT</span>
        </div>
        {/* Enlaces de navegación
        <div className="flex space-x-4 mb-2 md:mb-0">
          <a href="/" className="hover:text-gray-300 transition duration-300">Inicio</a>
          <a href="/about" className="hover:text-gray-300 transition duration-300">Nosotros</a>
          <a href="/privacy" className="hover:text-gray-300 transition duration-300">Política de privacidad</a>
        </div> */}

        {/* Derechos de autor */}
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Neurofit. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
