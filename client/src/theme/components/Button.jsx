import React from 'react';

const Button = ({ onClick, label, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center h-10 px-4 rounded ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
