import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/client';
import UserProgress from '../components/UserProgress';
import EditableField from '../components/EditableField';

const UserProfileView = () => {
  const [user] = useAuthState(auth); // Obtenemos el usuario autenticado desde Firebase

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Perfil de Usuario</h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Verificamos si el usuario está disponible para mostrar los datos */}
        {user ? (
          <>
            <EditableField label="Nombre" value={user.displayName || 'No disponible'} />
            <EditableField label="Email" value={user.email || 'No disponible'} />

            <h3 className="text-xl font-semibold mt-6 mb-4">Progreso en el curso</h3>
            {/* Por ahora el progreso será fijo o puedes usar un campo desde la base de datos */}
            <UserProgress progress={50} />
          </>
        ) : (
          <p>No se ha encontrado información del usuario.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfileView;
