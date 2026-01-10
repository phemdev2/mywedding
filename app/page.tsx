import React from 'react';
import { Great_Vibes, Cinzel } from 'next/font/google';

// Components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import Hymns from '@/components/Hymns';
import BibleReading from '@/components/BibleReading';
import Gallery from '@/components/Gallery';
import AIBlessing from '@/components/AIBlessing';
import { WEDDING_DATE } from '@/constants';

// Configure Fonts locally for the wrapper sections (Quote/Footer)
const scriptFont = Great_Vibes({ subsets: ['latin'], weight: '400' });
const headerFont = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

export default function WeddingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-wedding-gold/30">
      <Header />
      
      <main>
        <Hero />
        
        <Schedule />
        
        {/* Quote Section - Styled to match the theme */}
        <section className="bg-[#FDFBF7] py-20 border-y border-wedding-gold/10">
          <div className="container mx-auto px-6 text-center">
            <div className="text-wedding-gold text-4xl mb-4 opacity-40">❝</div>
            <h2 className={`${scriptFont.className} text-4xl md:text-6xl text-wedding-green max-w-4xl mx-auto leading-tight drop-shadow-sm`}>
              "Two souls with but a single thought, <br className="hidden md:block" />
              two hearts that beat as one."
            </h2>
            <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">
              — John Keats
            </div>
          </div>
        </section>

        <Hymns />
        
        <BibleReading />
        
        <Gallery />
        
        {/* Placed the Interactive Blessing before the footer */}
        <AIBlessing /> 
      </main>

      <footer className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          
          {/* Footer Logo - Matches Header */}
          <h2 className={`${headerFont.className} text-5xl font-bold mb-6 text-wedding-green`}>
            V<span className="text-wedding-gold font-light mx-1">|</span>O
          </h2>
          
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-10">
            {WEDDING_DATE} • Lagos, Nigeria
          </p>
          
          <div className="max-w-md mx-auto mb-12">
            <p className={`${scriptFont.className} text-3xl text-gray-600`}>
              Thank you for celebrating with us.
            </p>
            <p className="text-sm text-gray-400 mt-2 font-serif italic">
              Your presence and prayers mean the world to us.
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-6 opacity-60">
            <span className="w-12 h-[1px] bg-wedding-gold"></span>
            <span className="text-[10px] tracking-widest uppercase font-bold text-wedding-green">
              With Love
            </span>
            <span className="w-12 h-[1px] bg-wedding-gold"></span>
          </div>
          
          <p className="mt-16 text-[10px] text-gray-300 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Victoria & Opeoluwa. Forever & Always.
          </p>
        </div>
      </footer>
    </div>
  );
}