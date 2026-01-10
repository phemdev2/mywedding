import React from 'react';
import { Great_Vibes, Cinzel } from 'next/font/google';
import { CHURCH_PROGRAM, RECEPTION_PROGRAM, PRIESTS } from '@/constants';

// 1. Setup Fonts
const scriptFont = Great_Vibes({ subsets: ['latin'], weight: '400' });
const headerFont = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

// 2. Define Topography Patterns (Optimized SVG Data URIs)

// Pattern for the White Card (Dark Green Lines)
const TOPO_PATTERN_DARK_LINES = `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='topo_dark' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 100 V 50 Q 25 25 50 50 t 50 0 V 100 z' stroke='%230A3F2F' stroke-width='0.5' fill='none' opacity='0.08'/%3E%3Cpath d='M0 100 V 20 Q 25 75 50 20 t 50 0 V 100 z' stroke='%230A3F2F' stroke-width='0.5' fill='none' opacity='0.08'/%3E%3Cpath d='M0 0 Q 50 50 100 0' stroke='%230A3F2F' stroke-width='0.5' fill='none' opacity='0.08'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo_dark)'/%3E%3C/svg%3E")`;

// Pattern for the Green Card (Gold Lines)
const TOPO_PATTERN_LIGHT_LINES = `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='topo_light' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 100 V 50 Q 25 25 50 50 t 50 0 V 100 z' stroke='%23D4AF37' stroke-width='0.8' fill='none' opacity='0.15'/%3E%3Cpath d='M0 100 V 20 Q 25 75 50 20 t 50 0 V 100 z' stroke='%23D4AF37' stroke-width='0.8' fill='none' opacity='0.15'/%3E%3Cpath d='M0 0 Q 50 50 100 0' stroke='%23D4AF37' stroke-width='0.8' fill='none' opacity='0.15'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23topo_light)'/%3E%3C/svg%3E")`;


const Schedule: React.FC = () => {
  return (
    <section id="program" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`${scriptFont.className} text-wedding-gold text-5xl mb-2 block`}>
            The Order of
          </span>
          <h2 className={`${headerFont.className} text-5xl font-bold mb-4 uppercase tracking-widest text-wedding-green`}>
            Events
          </h2>
          <div className="w-24 h-1 bg-wedding-green mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* === CHURCH COLUMN (White Card) === */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
            
            {/* Topography Background (Dark Green Lines) */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ 
                backgroundImage: TOPO_PATTERN_DARK_LINES,
                backgroundSize: '80px 80px' // Adjust scale of the wavy lines
              }}
            />

            {/* Content (z-10 to sit above pattern) */}
            <div className="relative z-10">
              <div className="mb-10 text-center">
                <h3 className={`${headerFont.className} text-2xl font-bold text-wedding-green mb-4`}>
                  Wedding Mass
                </h3>
                <div className="text-xs font-bold text-wedding-gold mb-6 uppercase tracking-[0.2em]">
                  Officiating Priests
                </div>
                <ul className="space-y-2 italic text-gray-600 font-serif">
                  {PRIESTS.map((priest, i) => (
                    <li key={i} className="text-sm md:text-base">{priest}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-10">
                {CHURCH_PROGRAM.map((item, index) => (
                  <div key={index} className="flex gap-6 relative group">
                    <div className="w-16 flex-shrink-0 text-right">
                      <span className="text-[10px] font-bold text-wedding-gold tracking-tighter block mt-1 uppercase">
                        {item.time || 'Part ' + (index + 1)}
                      </span>
                    </div>
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[78px] top-2 bottom-[-40px] w-px bg-gray-100 group-last:hidden"></div>
                    
                    <div className="flex-1 pb-2">
                      <h4 className={`${headerFont.className} text-lg font-bold leading-tight text-gray-800`}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 italic mt-1 font-serif">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* === RECEPTION COLUMN (Green Card) === */}
          <div className="bg-wedding-green p-8 md:p-12 rounded-3xl shadow-2xl text-white lg:sticky lg:top-24 relative overflow-hidden">
            
            {/* Topography Background (Gold Lines) */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ 
                backgroundImage: TOPO_PATTERN_LIGHT_LINES,
                backgroundSize: '120px 120px',
                opacity: 0.6 // Slightly higher opacity for gold on green
              }}
            />

            {/* Subtle Aesthetic Glow (Optional, keeps it looking premium) */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-wedding-gold/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="mb-10 text-center">
                <h3 className={`${headerFont.className} text-2xl font-bold text-wedding-gold mb-4`}>
                  Reception
                </h3>
                <p className="text-xs text-white/70 uppercase tracking-[0.2em]">Following immediately after mass</p>
              </div>
              
              <div className="space-y-8">
                {RECEPTION_PROGRAM.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start group">
                    <div className="w-8 h-8 rounded-full border border-wedding-gold/30 flex items-center justify-center flex-shrink-0 text-[10px] font-bold bg-wedding-green/50 backdrop-blur-sm group-hover:bg-wedding-gold group-hover:text-wedding-green transition-colors duration-300">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className={`${headerFont.className} text-lg font-semibold`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/50 italic font-serif">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className={`${headerFont.className} text-wedding-gold font-bold text-xl md:text-2xl tracking-[0.2em] uppercase`}>
                  #TheOVLoveStory
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Schedule;