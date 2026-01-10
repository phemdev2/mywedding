import React from 'react';
import Image from 'next/image';
import { Great_Vibes, Cinzel } from 'next/font/google';
import { GALLERY_IMAGES } from '@/constants';

// Configure Fonts
const scriptFont = Great_Vibes({ subsets: ['latin'], weight: '400' });
const headerFont = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <span className={`${scriptFont.className} text-wedding-gold text-4xl md:text-5xl mb-2 block`}>
            Sweet Memories
          </span>
          <h2 className={`${headerFont.className} text-4xl md:text-5xl font-bold mb-6 text-wedding-green uppercase tracking-widest`}>
            Photo Gallery
          </h2>
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 opacity-40">
            <div className="h-[1px] w-12 bg-wedding-green"></div>
            <div className="text-wedding-gold text-xl">❦</div>
            <div className="h-[1px] w-12 bg-wedding-green"></div>
          </div>
        </div>

        {/* MASONRY GRID */}
        {/* 'columns-' classes create the masonry effect purely with CSS */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-700 bg-gray-100"
            >
              {/* Optimized Next.js Image */}
              <div className="relative">
                <Image 
                  src={image.url} 
                  alt={image.caption}
                  width={800} 
                  height={1200} // Aspect ratio approximation
                  className="w-full h-auto object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-wedding-green/90 via-transparent to-transparent opacity-90"></div>
                
                {/* Caption Content */}
                <div className="relative z-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="w-10 h-[2px] bg-wedding-gold mb-3"></div>
                  <p className={`${scriptFont.className} text-white text-3xl md:text-4xl drop-shadow-md`}>
                    {image.caption}
                  </p>
                </div>
              </div>

              {/* Decorative Border Frame on Hover */}
              <div className="absolute inset-4 border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-sm"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Gallery;