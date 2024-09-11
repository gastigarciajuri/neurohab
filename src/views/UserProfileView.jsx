// src/views/UserProfileView.jsx

import React from 'react';


const UserProfileView = () => {
    const user = {
        name: "Facundo Campazzo",
        email: "123@gmail.com",
        progress: 66
    }
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Perfil del Usuario</h2>
      <div className="mb-6">
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Progreso total:</strong> {user.progress}%</p>
      </div>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Editar Perfil
      </button>
    </div>
  );
};

export default UserProfileView;
