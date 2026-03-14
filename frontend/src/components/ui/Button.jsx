import React from 'react';

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark border border-transparent',
  secondary: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50',
  outline: 'bg-transparent border border-white hover:bg-white/10',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg font-medium',
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
