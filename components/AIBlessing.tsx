import React, { useState } from 'react';

const AIBlessing: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [blessing, setBlessing] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Local blessing generator
  const generateWeddingBlessing = async (guestName: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${guestName}, may Victoria & Opeoluwa's union be filled with love, joy, and endless blessings!`);
      }, 1000); // simulate async
    });
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName) return;
    setLoading(true);
    const result = await generateWeddingBlessing(guestName);
    setBlessing(result);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-4 serif">Leave a Digital Blessing</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Enter your name to receive a personalized blessing for Victoria & Opeoluwa.
          </p>
        </div>

        {!blessing ? (
          <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
            <input
              type="text"
              placeholder="Your Name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 flex-grow max-w-xs transition-all"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-wedding-gold text-white px-8 py-4 rounded-full hover:bg-wedding-gold/90 transition-all font-medium disabled:opacity-50 shadow-lg hover:shadow-wedding-gold/20"
            >
              {loading ? 'Crafting...' : 'Generate Blessing'}
            </button>
          </form>
        ) : (
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-wedding-gold/10 animate-fade-in ring-1 ring-black/5">
            <div className="italic text-3xl text-wedding-gold serif mb-6">“</div>
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed serif italic mb-10 px-2">
              {blessing}
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-100">
              <span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest">
                Blessing from {guestName}
              </span>
              <button 
                onClick={() => setBlessing(null)}
                className="text-xs uppercase tracking-widest text-wedding-gold hover:text-wedding-green transition-colors font-bold underline decoration-wedding-gold/30 underline-offset-8"
              >
                Create Another
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIBlessing;
