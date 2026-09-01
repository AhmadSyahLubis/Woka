import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent-orange' | 'accent-pink' | 'accent-blue';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-pill font-display font-semibold transition-all duration-300 ease-out active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
    
    const variants = {
      primary: 'bg-on-surface text-surface hover:bg-surface-tint hover:-translate-y-1 hover:shadow-lg shadow-black/10',
      secondary: 'bg-transparent border border-outline text-on-surface hover:bg-surface-container-high',
      ghost: 'bg-transparent text-on-surface hover:bg-surface-container hover:text-on-surface',
      'accent-orange': 'bg-woka-orange text-white hover:-translate-y-1 hover:shadow-lg shadow-woka-orange/30',
      'accent-pink': 'bg-woka-pink text-white hover:-translate-y-1 hover:shadow-lg shadow-woka-pink/30',
      'accent-blue': 'bg-woka-blue text-white hover:-translate-y-1 hover:shadow-lg shadow-woka-blue/30',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm h-10',
      md: 'px-6 py-3 text-base h-12',
      lg: 'px-8 py-4 text-lg h-14',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
