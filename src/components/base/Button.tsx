import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-poppins font-bold whitespace-nowrap cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-brand-gold-light to-brand-gold text-brand-black hover:shadow-lg hover:shadow-brand-gold/50 hover:scale-105',
    secondary: 'bg-brand-dark text-white border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-black',
    outline: 'bg-transparent text-brand-gold border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-black',
    ghost: 'bg-transparent text-brand-gold hover:bg-brand-gold/10',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
