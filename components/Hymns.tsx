import React from 'react';
import { Great_Vibes, Cinzel } from 'next/font/google';
import { WEDDING_SONGS } from '@/constants';

const scriptFont = Great_Vibes({ subsets: ['latin'], weight: '400' });
const headerFont = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

const WeddingMassSongs: React.FC = () => {
  return (
    <section id="hymns" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className={`${headerFont.className} text-4xl md:text-5xl font-bold mb-4 uppercase tracking-[0.2em]`}>
            Wedding Mass Songs
          </h2>
          <p className="text-wedding-gold italic font-serif">Celebrating the Union of Vicky & Ope</p>
          <div className="w-24 h-1 bg-wedding-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {WEDDING_SONGS.map((song) => (
            <div 
              key={song.id} 
              className="bg-wedding-cream/30 p-8 md:p-10 rounded-3xl border border-wedding-gold/10 hover:border-wedding-gold/30 transition-all shadow-sm"
            >
              {/* Category Tag */}
              <span className={`${headerFont.className} block text-center text-[11px] tracking-[0.3em] text-wedding-gold mb-4 uppercase`}>
                {song.category}
              </span>
              
              <h3 className={`${scriptFont.className} text-4xl mb-8 text-center text-gray-800`}>
                {song.title}
              </h3>
              
              <div className="space-y-8">
                {/* FIX: Explicitly typed 'verse' as string */}
                {song.verses.map((verse: string, vIndex: number) => (
                  <div key={vIndex} className="text-center">
                    <p className="whitespace-pre-line text-gray-600 leading-relaxed font-serif italic text-base md:text-lg">
                      {verse}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex justify-center opacity-20">
                 <div className="w-10 h-px bg-wedding-gold"></div>
                 <div className="mx-3 text-wedding-gold text-xs">❦</div>
                 <div className="w-10 h-px bg-wedding-gold"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Prayer of the Faithful Special Box */}
        <div className="mt-16 bg-wedding-green/5 p-8 rounded-3xl border border-wedding-green/10 text-center max-w-2xl mx-auto">
          <span className={`${headerFont.className} block text-[11px] tracking-[0.3em] text-wedding-green mb-4 uppercase`}>
            Prayer of the Faithful
          </span>
          <p className="font-serif italic text-gray-700 leading-loose">
            &quot;That they may love one another we pray oh lord... <br/>
            That they may live in peace and harmony... <br/>
            That they may see their children’s children.&quot;
          </p>
          <p className={`${scriptFont.className} text-2xl mt-4 text-wedding-gold`}>Vicky & Ope</p>
        </div>
      </div>
    </section>
  );
};

export default WeddingMassSongs;