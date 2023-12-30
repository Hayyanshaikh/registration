// Alert.js
import React from 'react';

const Alert = ({ variant, message }) => {
  let alertClasses = 'py-3 px-4 rounded mb-3 text-sm font-medium ';
  
  switch (variant) {
    case 'success':
      alertClasses += 'bg-green-200 text-green-700';
      break;
    case 'error':
      alertClasses += 'bg-red-200 text-red-700';
      break;
    case 'warning':
      alertClasses += 'bg-yellow-200 text-yellow-700';
      break;
    default:
      alertClasses += 'bg-gray-200 text-gray-700';
  }

  return (
    <div className={alertClasses}>
      {message}
    </div>
  );
};

export default Alert;