// src/components/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
      <div 
        className="bg-blue-600 h-4 rounded-full" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
