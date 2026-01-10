'use client';

import React, { useState } from 'react';
import { Great_Vibes, Cinzel } from 'next/font/google';

// Configure Fonts
const scriptFont = Great_Vibes({ subsets: ['latin'], weight: '400' });
const headerFont = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

// Expanded List of Blessings
const BLESSING_TEMPLATES = [
  "may your own life be a reflection of the joy we celebrate today. May Victoria & Opeoluwa's union inspire you to love deeper and laugh louder.",
  "as you honor this union, may God's grace multiply in your own home. May peace be your pillow and joy be your morning song.",
  "thank you for being part of this story. May the love that binds Victoria & Opeoluwa today extend its warmth to you and your loved ones.",
  "may the Almighty perfect all that concerns you, just as He has perfected the union of Victoria & Opeoluwa today.",
  "may your presence here today be the seed for a harvest of celebration in your own life. Love is beautiful, and so are you.",
  "may the chords of love binding our couple today stretch to comfort you. May you find beauty in small moments and grandeur in God's promises.",
  "may the God who brought Victoria & Opeoluwa together guide your own steps. May you never lack reasons to dance and celebrate in your own household.",
  "just as iron sharpens iron, may you find people who sharpen you in love and truth. May your joy today be permanent.",
  "blessed are those who rejoice with others. May the doors of favor open for you, and may your own testimony be the next we celebrate.",
  "may the sweetness of this union linger in your heart. May God grant you speed, favor, and peace that passes all understanding.",
  "may the lines fall for you in pleasant places. May you have a goodly heritage and may your joy know no bounds.",
  "may the Lord bless your going out and your coming in. May you find favor in the sight of God and man starting from this day forward.",
  "as you celebrate love today, may your life become a magnet for good news. May sorrow be far from your dwelling place.",
  "may the sun not smite you by day nor the moon by night. May you remain securely under the shadow of the Almighty.",
  "may God grant the desires of your heart and make all your plans succeed. May your own testimony be loud, clear, and inspiring.",
  "may you be like a well-watered garden, fruitful in every season. May drought never know your address.",
  "may the oil of gladness never run dry in your life. May you always have a reason to smile and a song of praise on your lips.",
  "may your path be like the morning sun, shining ever brighter till the full light of day. Your best days are definitely ahead of you.",
  "may you experience a sudden visitation of favor. Where others say there is a casting down, may you declare there is a lifting up.",
  "may the love you witness today renew your hope. May you be celebrated in high places and remembered for good."
];

const AIBlessing: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [blessing, setBlessing] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Helper Function: Formats names to Title Case
  const formatName = (name: string) => {
    if (!name) return "";
    return name
      .trim() // Removes extra spaces at start/end
      .toLowerCase() // Converts "VICTORIA" to "victoria"
      .split(/\s+/) // Splits by any amount of whitespace (handles multiple spaces)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalizes first letter of each word
      .join(' '); // Joins back: "Victoria Isioma"
  };

  // Logic to select a random blessing
  const generateWeddingBlessing = async (name: string): Promise<string> => {
    return new Promise((resolve) => {
      const randomIndex = Math.floor(Math.random() * BLESSING_TEMPLATES.length);
      const selectedTemplate = BLESSING_TEMPLATES[randomIndex];
      
      setTimeout(() => {
        resolve(`${name}, ${selectedTemplate}`);
      }, 1500); 
    });
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    
    // 1. Format the name before processing
    const formattedName = formatName(guestName);
    
    // 2. Update the input field to show the formatted version immediately
    setGuestName(formattedName);

    setLoading(true);
    const result = await generateWeddingBlessing(formattedName);
    setBlessing(result);
    setLoading(false);
    setCopied(false);
  };

  const handleCopy = () => {
    if (blessing) {
      navigator.clipboard.writeText(blessing);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="blessings" className="py-24 relative overflow-hidden bg-[#FAFAFA]">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0A3F2F 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        
        {/* Header */}
        <div className="mb-14">
          <span className={`${scriptFont.className} text-wedding-gold text-4xl block mb-2`}>
            Interactive
          </span>
          <h2 className={`${headerFont.className} text-3xl md:text-4xl font-bold mb-4 uppercase tracking-widest text-wedding-green`}>
            Digital Blessing
          </h2>
          <div className="w-16 h-0.5 bg-wedding-gold mx-auto mb-6"></div>
          <p className="text-gray-500 font-serif max-w-lg mx-auto leading-relaxed">
            Enter your name below to receive a personalized note of gratitude and prayer from the couple's digital archive.
          </p>
        </div>

        {/* Form State */}
        {!blessing ? (
          <form 
            onSubmit={handleGenerate} 
            className="flex flex-col gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <div className="w-full max-w-md relative group">
              <input
                type="text"
                placeholder="Type your name here..."
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full px-8 py-5 rounded-full bg-white border-2 border-gray-100 text-center text-lg font-serif text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-wedding-gold/50 focus:ring-4 focus:ring-wedding-gold/10 transition-all shadow-sm group-hover:shadow-md"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading || !guestName.trim()}
              className={`${headerFont.className} w-full max-w-md bg-wedding-green text-white px-8 py-4 rounded-full hover:bg-wedding-green/90 transition-all font-bold tracking-[0.2em] disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-wedding-green/20 relative overflow-hidden`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3 animate-pulse">
                   Processing...
                </span>
              ) : (
                'RECEIVE BLESSING'
              )}
            </button>
          </form>
        ) : (
          /* Result Card */
          <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100 animate-in zoom-in-95 duration-500 relative mx-4 md:mx-0">
            
            {/* Corner Ornaments */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-wedding-gold/30 rounded-tl-3xl m-6"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-wedding-gold/30 rounded-br-3xl m-6"></div>

            <span className={`${scriptFont.className} text-4xl md:text-5xl text-wedding-gold block mb-8`}>
              Specifically for You
            </span>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic font-serif mb-10 px-2 md:px-8">
              &ldquo;{blessing}&rdquo;
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 border-t border-gray-50">
              <button 
                onClick={() => {
                  setBlessing(null);
                  setGuestName('');
                  setCopied(false);
                }}
                className="text-xs uppercase tracking-widest text-gray-400 hover:text-wedding-green transition-colors font-bold"
              >
                Try Another Name
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-wedding-cream text-wedding-green px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-wedding-gold hover:text-white transition-colors duration-300 border border-wedding-green/10"
              >
                {copied ? (
                  <>Copied!</>
                ) : (
                  <>Copy Blessing</>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIBlessing;