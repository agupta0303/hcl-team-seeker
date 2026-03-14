import React from 'react';

export const Label = ({ className = '', children, ...props }) => {
  return (
    <label
      className={`text-sm font-bold text-gray-900 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};
