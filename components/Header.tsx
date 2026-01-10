'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cinzel } from 'next/font/google'; // Import the new Logo font

// Configure the Logo Font (Cinzel is excellent for Monograms)
const logoFont = Cinzel({ 
  subsets: ['latin'], 
  weight: ['400', '700'], // We can use bold for extra impact
});

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Program', href: '#program' },
    { name: 'Hymns', href: '#hymns' },
    { name: 'Readings', href: '#readings' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled || isMenuOpen 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO: Using Cinzel for a structured, Monogram look */}
        <Link 
          href="/" 
          onClick={closeMenu}
          className={`${logoFont.className} text-2xl md:text-3xl font-bold tracking-[0.1em] transition-colors duration-300 border-2 border-transparent p-1 ${
            isScrolled || isMenuOpen ? 'text-wedding-green' : 'text-white'
          }`}
        >
          {/* The Monogram */}
          V<span className="text-wedding-gold mx-0.5 font-light">|</span>O
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.25em] font-bold transition-all hover:text-wedding-gold hover:scale-105 transform ${
                isScrolled ? 'text-gray-800' : 'text-white/90 drop-shadow-md'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
           <button 
             onClick={toggleMenu}
             aria-label="Toggle Menu"
             className={`p-2 rounded-md transition-colors ${
               isScrolled || isMenuOpen ? 'text-wedding-green' : 'text-white'
             }`}
           >
             {isMenuOpen ? (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
               </svg>
             ) : (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
               </svg>
             )}
           </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center py-8 space-y-8">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={closeMenu}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`text-xs uppercase tracking-[0.4em] font-bold text-gray-800 hover:text-wedding-gold transition-colors duration-300 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;