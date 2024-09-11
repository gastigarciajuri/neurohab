// src/components/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto">
          <h1 className="text-2xl font-bold">E-Learning</h1>
        </nav>
      </header>
      
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      
      <footer className="bg-gray-200 text-center p-4">
        <p className="text-gray-600">© 2024 E-Learning</p>
      </footer>
    </div>
  );
};

export default Layout;
