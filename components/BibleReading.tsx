
import React from 'react';
import { BIBLE_READINGS } from '../constants';

const BibleReading: React.FC = () => {
  return (
    <section id="readings" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 serif uppercase tracking-widest">Liturgy of the Word</h2>
          <div className="w-20 h-0.5 bg-wedding-gold mx-auto mb-2"></div>
          <p className="text-wedding-gold cursive text-2xl">The Holy Word</p>
        </div>

        <div className="space-y-16">
          {BIBLE_READINGS.map((reading, index) => (
            <div key={index} className="relative group">
              <div className="bg-wedding-cream p-10 md:p-16 rounded-lg border-l-4 border-wedding-green">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-wedding-green">{reading.reader}</span>
                  <span className="text-lg font-bold serif text-wedding-gold">{reading.reference}</span>
                </div>
                
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic serif mb-10">
                  {reading.text}
                </p>
                
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <div className="h-px flex-1 bg-gray-100"></div>
                  <span>The Word of the Lord</span>
                  <div className="h-px flex-1 bg-gray-100"></div>
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
