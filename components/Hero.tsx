'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Great_Vibes } from 'next/font/google'; 
import { WEDDING_DATE, VENUE_NAME, HASHTAG } from '@/constants';

// Configure the cursive font
const scriptFont = Great_Vibes({ 
  subsets: ['latin'], 
  weight: '400',
});

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
          alt="Victoria and Opeoluwa"
          fill
          priority
          className={`object-cover transition-transform duration-[10000ms] ease-in-out will-change-transform ${
            loaded ? 'scale-100' : 'scale-110'
          }`}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" /> 
      </div>
      
      <div className="relative z-20 px-6 pb-12 md:pb-20 text-white container mx-auto">
        <div className="flex flex-col items-center md:items-start text-center md:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
          
          {/* Tagline */}
          <div className="bg-wedding-gold/90 text-wedding-green backdrop-blur-sm px-6 py-2 mb-6 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase rounded-sm shadow-lg">
            Our Wedding Program
          </div>
          
          {/* CURSIVE NAMES SECTION */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mb-8 w-full">
             <h1 className={`${scriptFont.className} text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] text-white leading-none drop-shadow-2xl`}>
               Victoria 
               <span className="text-wedding-gold mx-3 md:mx-6 font-light text-4xl md:text-7xl align-middle font-serif">
                 &amp;
               </span>
               Opeoluwa
             </h1>
          </div>
          
          {/* Details Grid - Updated to 4 Columns (lg:grid-cols-4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-6 md:mt-8 border-t border-white/30 pt-8 w-full backdrop-blur-[2px]">
            
            {/* 1. Date */}
            <div className="flex flex-col items-center md:items-start group">
              <p className="text-[10px] uppercase tracking-[0.2em] text-wedding-gold mb-2 group-hover:text-white transition-colors">
                When
              </p>
              <p className="text-lg md:text-2xl font-serif tracking-wide">{WEDDING_DATE}</p>
              <p className="text-sm text-gray-300 font-light mt-1">10:00 AM Prompt</p>
            </div>

            {/* 2. Ceremony / Joining */}
            <div className="flex flex-col items-center md:items-start group">
              <p className="text-[10px] uppercase tracking-[0.2em] text-wedding-gold mb-2 group-hover:text-white transition-colors">
                Ceremony
              </p>
              <p className="text-lg md:text-2xl font-serif tracking-wide leading-tight">{VENUE_NAME}</p>
              <p className="text-sm text-gray-300 font-light mt-1">Lagos, Nigeria</p>
            </div>

            {/* 3. Reception (NEW) */}
            <div className="flex flex-col items-center md:items-start group">
              <p className="text-[10px] uppercase tracking-[0.2em] text-wedding-gold mb-2 group-hover:text-white transition-colors">
                Reception
              </p>
              <p className="text-lg md:text-xl font-serif tracking-wide leading-tight">
                Triple K Event Center
              </p>
              <p className="text-xs md:text-sm text-gray-300 font-light mt-1 max-w-[260px] leading-relaxed">
                Yellow signboard B/Stop, Ijede Road, Elepe, Ikorodu, Lagos
              </p>
            </div>

            {/* 4. Hashtag */}
            <div className="flex flex-col items-center md:items-start group">
              <p className="text-[10px] uppercase tracking-[0.2em] text-wedding-gold mb-2 group-hover:text-white transition-colors">
                Hashtag
              </p>
              <p className="text-lg md:text-2xl font-serif tracking-wide italic text-wedding-gold/90">
                {HASHTAG}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Bottom */}
      <div className="relative z-20 h-14 md:h-20 bg-wedding-green flex items-center justify-center border-t border-wedding-gold/30">
        <p className="text-white/90 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium px-6 text-center">
          Celebrating the Union of Victoria Isioma & Opeoluwa Habeeb
        </p>
      </div>
    </section>
  );
};

export default Hero;