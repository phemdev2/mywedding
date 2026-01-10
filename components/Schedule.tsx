import React from 'react';
import { CHURCH_PROGRAM, RECEPTION_PROGRAM, PRIESTS } from '@/constants';

const Schedule: React.FC = () => {
  return (
    <section id="program" className="py-24 bg-wedding-cream">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-wedding-gold text-4xl mb-2 block font-serif italic">The Order of</span>
          <h2 className="text-5xl font-bold mb-4 serif uppercase tracking-tighter">Events</h2>
          <div className="w-24 h-1 bg-wedding-green mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Church Column */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <div className="mb-10 text-center">
              <h3 className="text-2xl font-bold serif text-wedding-green mb-4">Wedding Mass</h3>
              <div className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Officiating Priests</div>
              <ul className="space-y-1 italic text-gray-700">
                {PRIESTS.map((priest, i) => (
                  <li key={i} className="text-sm md:text-base">{priest}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-10">
              {CHURCH_PROGRAM.map((item, index) => (
                <div key={index} className="flex gap-6 relative">
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="text-[10px] font-bold text-wedding-gold tracking-tighter block mt-1 uppercase">
                      {item.time || 'Part ' + (index + 1)}
                    </span>
                  </div>
                  <div className="flex-1 pb-6 border-b border-gray-50 last:border-0">
                    <h4 className="text-lg font-bold serif leading-tight">{item.title}</h4>
                    <p className="text-sm text-gray-500 italic mt-1">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reception Column */}
          <div className="bg-wedding-green p-8 md:p-12 rounded-3xl shadow-xl text-white sticky top-24">
            <div className="mb-10 text-center">
              <h3 className="text-2xl font-bold serif text-wedding-gold mb-4">Reception</h3>
              <p className="text-sm text-white/60 uppercase tracking-widest">Following immediately after mass</p>
            </div>
            
            <div className="space-y-8">
              {RECEPTION_PROGRAM.map((item, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="w-8 h-8 rounded-full border border-wedding-gold/30 flex items-center justify-center flex-shrink-0 text-[10px] font-bold group-hover:bg-wedding-gold group-hover:text-wedding-green transition-colors duration-300">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold serif">{item.title}</h4>
                    <p className="text-xs text-white/50 italic">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-wedding-gold font-bold italic serif text-2xl tracking-widest uppercase">#THEOVLOVESTORY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;