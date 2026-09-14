import React from 'react';
import { Loader } from 'lucide-react';

interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  variant = 'primary',
  size = 'md'
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:shadow-lg hover:scale-105 focus:ring-violet-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white focus:ring-violet-500',
    ghost: 'text-violet-600 hover:bg-violet-50 focus:ring-violet-500'
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={combinedClassName}
    >
      {isLoading ? (
        <div className="flex items-center space-x-2">
          <Loader className={`animate-spin ${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}`} />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton; 