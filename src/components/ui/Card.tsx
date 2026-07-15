import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  borderVariant?: 'charcoal' | 'gold' | 'none';
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  borderVariant = 'charcoal',
  hoverable = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'bg-ivory p-6 rounded-[4px] transition-all duration-300';
  
  const borders = {
    charcoal: 'border border-charcoal/10',
    gold: 'border border-gold/30',
    none: 'border-0'
  };

  const hovers = hoverable
    ? 'hover:border-gold hover:shadow-sm'
    : '';

  return (
    <div
      className={`${baseStyles} ${borders[borderVariant]} ${hovers} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
