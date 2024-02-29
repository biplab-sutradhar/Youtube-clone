import React from 'react';

const Button = ({ name, isActive, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <button
      className={`px-3 h-8 m-1.5 hover:bg-gray-300 w-auto max-w-32 rounded-lg ${isActive ? 'bg-gray-600 text-white ' : 'bg-gray-200'}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
