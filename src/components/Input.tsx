import React from 'react';
import clsx from 'clsx';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        ref={ref}
        className={clsx(
          'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500 mt-1 animate-fade-in">{error}</p>}
    </div>
  );
});
Input.displayName = 'Input';
export default Input; 