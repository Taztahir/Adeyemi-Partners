import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'charcoal' | 'gold' | 'burgundy' | 'ivory';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'charcoal',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-[4px] text-xs font-sans font-medium uppercase tracking-wider';
  
  const variants = {
    charcoal: 'bg-charcoal text-ivory',
    gold: 'bg-gold/10 text-gold border border-gold/30',
    burgundy: 'bg-burgundy/15 text-burgundy',
    ivory: 'bg-ivory text-charcoal border border-charcoal/20'
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
