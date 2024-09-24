// src/components/UserProgress.jsx
import React from 'react';

const UserProgress = ({ progress }) => {
  return (
    <div>
      <p className="text-gray-700">Progreso del curso: {progress}%</p>
      <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default UserProgress;
