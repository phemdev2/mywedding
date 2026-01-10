import React from 'react';
import { Great_Vibes, Cinzel } from 'next/font/google';
import { BIBLE_READINGS } from '@/constants';

/**
 * 1. Font Configuration
 * Loaded with 'swap' display to ensure text is visible during font loading.
 */
const scriptFont = Great_Vibes({ 
  subsets: ['latin'], 
  weight: '400',
  display: 'swap' 
});

const headerFont = Cinzel({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  display: 'swap' 
});

/**
 * 2. Type Definitions
 */
interface BibleReadingData {
  reader: string;
  reference: string;
  text: string;
}

const BibleReading: React.FC = () => {
  return (
    <section id="readings" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`${headerFont.className} text-4xl font-bold mb-4 uppercase tracking-widest text-gray-900`}>
            Liturgy of the Word
          </h2>
          <div className="w-20 h-1 bg-wedding-gold mx-auto mb-4"></div>
          <p className={`${scriptFont.className} text-wedding-gold text-4xl`}>
            The Holy Word
          </p>
        </div>

        {/* Readings List */}
        <div className="space-y-20">
          {(BIBLE_READINGS as BibleReadingData[]).map((reading, index) => (
            <div key={index} className="relative group">
              
              {/* Decorative Quote Mark Background */}
              <span className="absolute -top-10 -left-6 text-9xl text-wedding-gold/10 font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </span>
              
              <div className="bg-wedding-cream/30 p-10 md:p-16 rounded-3xl border-l-8 border-wedding-green shadow-sm transition-all duration-300 hover:shadow-md">
                
                {/* Meta Information: Reader & Bible Reference */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                  <div className="flex flex-col">
                    <span className={`${headerFont.className} text-[10px] uppercase tracking-[0.2em] text-wedding-green/70 mb-1`}>
                      Reader
                    </span>
                    <span className={`${headerFont.className} text-sm font-bold uppercase tracking-widest text-wedding-green`}>
                      {reading.reader}
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <span className={`${headerFont.className} text-lg font-bold text-wedding-gold`}>
                      {reading.reference}
                    </span>
                  </div>
                </div>
                
                {/* Scripture Text */}
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic font-serif mb-12 whitespace-pre-line">
                  {reading.text}
                </p>
                
                {/* Liturgical Response Footer */}
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                  <div className="h-px flex-1 bg-wedding-gold/20"></div>
                  <span className={headerFont.className}>The Word of the Lord</span>
                  <div className="h-px flex-1 bg-wedding-gold/20"></div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BibleReading;