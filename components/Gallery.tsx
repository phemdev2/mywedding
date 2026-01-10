import React from 'react';
import Image from 'next/image';
import { GALLERY_IMAGES } from '@/constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 serif">Our Journey</h2>
          <div className="w-20 h-0.5 bg-wedding-gold mx-auto"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Optimized Next.js Image */}
              <div className="relative overflow-hidden">
                <Image 
                  src={image.url} 
                  alt={image.caption}
                  width={800} // Base width for optimization
                  height={1000} // Next.js uses this to calculate aspect ratio
                  className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Enhanced Overlay and Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-wedding-green/90 via-wedding-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block w-8 h-px bg-wedding-gold mb-3"></span>
                  <p className="text-white font-bold serif italic text-2xl drop-shadow-md">
                    {image.caption}
                  </p>
                </div>
              </div>

              {/* Subtle border overlay on hover */}
              <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;