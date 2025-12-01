import React, { useState } from 'react';
import { Send, Sparkles, User } from 'lucide-react';
import { generateWeddingWish } from '../services/geminiService';
import { Wish } from '../types';

const GuestBook: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([
    { id: '1', name: 'Budi Santoso', message: 'Selamat menempuh hidup baru Romeo & Juliet! Semoga bahagia selamanya.', date: 'Baru saja' },
    { id: '2', name: 'Siti Aminah', message: 'Happy Wedding! So happy for you both.', date: '5 menit lalu' }
  ]);

  const handleGenerateWish = async () => {
    if (!name) {
      alert("Mohon isi nama Anda terlebih dahulu.");
      return;
    }
    setIsGenerating(true);
    const generated = await generateWeddingWish(name);
    setMessage(generated);
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name,
      message,
      date: 'Baru saja'
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
  };

  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-script text-5xl text-wedding-text mb-4">Wedding Wish</h2>
        <p className="font-sans text-gray-500 text-sm tracking-wide">Berikan doa & ucapan terbaik untuk kami</p>
      </div>

      <div className="glass-card p-6 md:p-8 rounded-3xl shadow-xl mb-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/50 border border-wedding-gold/30 rounded-xl py-3 pl-12 pr-4 text-wedding-text focus:outline-none focus:ring-2 focus:ring-wedding-rose/50 transition-all font-sans"
            />
          </div>
          
          <div className="relative">
            <textarea
              placeholder="Tulis ucapan..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full bg-white/50 border border-wedding-gold/30 rounded-xl py-3 px-4 text-wedding-text focus:outline-none focus:ring-2 focus:ring-wedding-rose/50 transition-all font-sans resize-none"
            />
            {/* Gemini Button */}
            <button
              type="button"
              onClick={handleGenerateWish}
              disabled={isGenerating}
              className="absolute right-2 bottom-2 bg-gradient-to-r from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 text-indigo-800 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors border border-indigo-200"
              title="Buat ucapan otomatis dengan AI"
            >
              <Sparkles size={12} className={isGenerating ? "animate-spin" : ""} />
              {isGenerating ? "Thinking..." : "Bantu Tulis (AI)"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-wedding-text text-wedding-cream py-3 rounded-xl font-serif font-semibold hover:bg-wedding-gold transition-colors flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Kirim Ucapan
          </button>
        </form>
      </div>

      {/* Wishes List */}
      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {wishes.map((wish) => (
          <div key={wish.id} className="bg-white/40 p-5 rounded-2xl border-l-4 border-wedding-rose shadow-sm animate-fade-in-up">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-serif font-bold text-lg text-wedding-text">{wish.name}</h4>
              <span className="text-xs text-gray-400 font-sans">{wish.date}</span>
            </div>
            <p className="text-gray-600 font-sans text-sm leading-relaxed">"{wish.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuestBook;
