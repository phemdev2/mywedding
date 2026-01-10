
import React from 'react';
import { HYMNS } from '@/constants';

const Hymns: React.FC = () => {
  return (
    <section id="hymns" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 serif">Wedding Hymns</h2>
          <div className="w-20 h-0.5 bg-wedding-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {HYMNS.map((hymn) => (
            <div key={hymn.id} className="bg-wedding-cream p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-8 text-center text-wedding-gold serif italic">
                {hymn.title}
              </h3>
              <div className="space-y-8">
                {hymn.verses.map((verse, vIndex) => (
                  <div key={vIndex} className="text-center">
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">Verse {vIndex + 1}</span>
                    <p className="whitespace-pre-line text-gray-700 leading-relaxed italic">
                      {verse}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hymns;
