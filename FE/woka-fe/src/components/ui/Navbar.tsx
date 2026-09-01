import React from 'react';
import Image from 'next/image';
import { Button } from './Button';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-surface-container-high">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="WOKA Logo" 
            width={40} 
            height={40} 
            className="w-10 h-10 object-contain"
          />
          <div className="text-2xl font-display font-extrabold tracking-tighter text-on-surface ml-2">
            WOKA<span className="text-woka-orange">.</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-semibold text-on-surface-variant">
          <a href="#" className="hover:text-woka-orange transition-colors">Services</a>
          <a href="#" className="hover:text-woka-pink transition-colors">Work</a>
          <a href="#" className="hover:text-woka-blue transition-colors">About</a>
        </div>

        <div className="flex items-center">
          <Button variant="primary" size="md">Mulai Proyek</Button>
        </div>
      </div>
    </nav>
  );
};
