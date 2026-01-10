import React from 'react';
// Next.js uses standard ES imports, make sure these paths match your folder structure
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import Hymns from '@/components/Hymns';
import BibleReading from '@/components/BibleReading';
import Gallery from '@/components/Gallery';
import AIBlessing from '@/components/AIBlessing';
import { WEDDING_DATE } from '@/constants';

export default function WeddingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <Schedule />
        
        {/* Quote Section */}
        <section className="bg-wedding-cream py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-light serif italic max-w-4xl mx-auto leading-tight">
              "Two souls with but a single thought, two hearts that beat as one."
            </h2>
          </div>
        </section>

        <Hymns />
        <BibleReading />
        <Gallery />
        {/* <AIBlessing />  */}
      </main>

      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-wedding-gold serif">V&O</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-8">{WEDDING_DATE}</p>
          <div className="max-w-md mx-auto mb-12">
            <p className="text-gray-600 italic">
              Thank you for being part of our special day. Your presence and prayers mean the world to us.
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <span className="w-10 h-0.5 bg-wedding-gold/30 self-center"></span>
            <span className="text-xs tracking-widest uppercase font-medium">With Love</span>
            <span className="w-10 h-0.5 bg-wedding-gold/30 self-center"></span>
          </div>
          <p className="mt-12 text-[10px] text-gray-300 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Victoria & Opeoluwa. Forever & Always.
          </p>
        </div>
      </footer>
    </div>
  );
}