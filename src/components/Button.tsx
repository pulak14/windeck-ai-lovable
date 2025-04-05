
import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors";
  
  const variantStyles = {
    primary: "bg-[#7F56D9] text-white hover:bg-[#6941C6] border border-transparent",
    secondary: "bg-white text-[#7F56D9] hover:bg-gray-50 border border-transparent shadow-sm",
    outline: "bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300",
  };
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-base",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
