'use client'; // Required for hooks and window event listeners

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // For optimized client-side navigation

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Program', href: '#program' },
    { name: 'Hymns', href: '#hymns' },
    { name: 'Readings', href: '#readings' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/" 
          onClick={closeMenu}
          className={`text-3xl font-bold tracking-tighter serif transition-colors duration-300 ${
            isScrolled || isMenuOpen ? 'text-wedding-green' : 'text-white'
          }`}
        >
          V<span className="text-wedding-gold">&</span>O
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-wedding-gold ${
                isScrolled ? 'text-gray-600' : 'text-white drop-shadow-sm'
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
             className={`p-2 rounded-full transition-colors ${
               isScrolled || isMenuOpen ? 'bg-wedding-green text-white' : 'bg-white/10 text-white'
             }`}
           >
             {isMenuOpen ? (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
             ) : (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
               </svg>
             )}
           </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen border-t border-gray-100 py-6' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={closeMenu}
              className="text-xs uppercase tracking-[0.4em] font-bold text-gray-700 hover:text-wedding-gold transition-colors"
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