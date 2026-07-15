import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gold focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-charcoal text-ivory border border-charcoal hover:bg-burgundy hover:border-burgundy px-6 py-3 rounded-[4px]',
    secondary: 'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory px-6 py-3 rounded-[4px]',
    outline: 'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal/5 px-6 py-3 rounded-[4px]',
    ghost: 'bg-transparent text-charcoal hover:bg-charcoal/5 px-4 py-2 rounded-[4px]'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
