import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({ children, className = '', hover = false, gradient = false }: CardProps) {
  const baseStyles = 'bg-brand-dark rounded-2xl overflow-hidden';
  const hoverStyles = hover ? 'transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-gold/20 cursor-pointer' : '';
  const gradientStyles = gradient ? 'border-2 border-brand-gold/20' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}>
      {children}
    </div>
  );
}
