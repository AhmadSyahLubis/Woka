import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  accent?: 'orange' | 'pink' | 'blue' | 'none';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', hoverable = false, accent = 'none', children, ...props }, ref) => {
    const baseStyles = 'bg-surface-container-lowest rounded-2xl p-8 relative overflow-hidden shadow-black/5 shadow-2xl transition-all duration-300 ease-out';
    const hoverStyles = hoverable ? 'hover:-translate-y-1 hover:shadow-black/10' : '';
    
    const accentStyles = {
      none: '',
      orange: 'border-t-4 border-t-woka-orange',
      pink: 'border-t-4 border-t-woka-pink',
      blue: 'border-t-4 border-t-woka-blue',
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${hoverStyles} ${accentStyles[accent]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
