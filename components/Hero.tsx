import React from 'react';
import Image from 'next/image';
import { WEDDING_DATE, VENUE_NAME, HASHTAG } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-end overflow-hidden">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
          alt="Wedding Background"
          fill
          priority // Loads this image immediately
          className="object-cover transition-transform duration-[2000ms]"
          sizes="100vw"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 md:via-black/20 z-10"></div>
      </div>
      
      <div className="relative z-20 px-6 pb-24 md:pb-32 text-white container mx-auto">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="bg-wedding-gold px-4 py-1 mb-6 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 inline-block">
            Our Wedding Program
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
             <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold serif uppercase tracking-tight leading-none">
               Victoria <span className="text-xl sm:text-2xl md:text-4xl block md:inline font-light lowercase serif italic mt-2 md:mt-0">&</span> Opeoluwa
             </h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-6 md:gap-12 mt-8 md:mt-10 border-t border-white/20 pt-8 w-full">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-wedding-gold mb-1">When</p>
              <p className="text-base md:text-xl font-medium tracking-wide serif uppercase">{WEDDING_DATE} | 10:00AM</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-wedding-gold mb-1">Where</p>
              <p className="text-base md:text-xl font-medium tracking-wide serif">{VENUE_NAME}</p>
            </div>
            <div className="flex flex-col items-center md:items-start col-span-1 sm:col-span-2 md:col-span-1">
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-wedding-gold mb-1">Hashtag</p>
              <p className="text-base md:text-xl font-medium tracking-wide serif">{HASHTAG}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Green Banner Bottom */}
      <div className="relative z-20 h-16 md:h-20 bg-wedding-green flex items-center justify-center">
        <p className="text-white text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold px-6 text-center">
          Celebrating the Union of Victoria Isioma & Opeoluwa Habeeb
        </p>
      </div>
    </section>
  );
};

export default Hero;