import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ loading, children, className, disabled, ...props }) => {
  return (
    <button
      className={clsx(
        'w-full flex justify-center items-center px-4 py-2 rounded-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button; 