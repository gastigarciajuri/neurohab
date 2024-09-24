// src/components/EditableField.jsx
import React, { useState } from 'react';

const EditableField = ({ label, value }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fieldValue, setFieldValue] = useState(value);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-600 mb-2">{label}</label>
      {isEditing ? (
        <input
          type="text"
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      ) : (
        <p className="text-gray-700">{fieldValue}</p>
      )}
      <button
        onClick={handleEditToggle}
        className="mt-2 text-blue-600 hover:underline"
      >
        {isEditing ? 'Guardar' : 'Editar'}
      </button>
    </div>
  );
};

export default EditableField;
