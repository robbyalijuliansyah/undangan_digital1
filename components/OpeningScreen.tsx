import React from 'react';
import { Mail, Heart } from 'lucide-react';

interface OpeningScreenProps {
  onOpen: () => void;
}

const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center p-8 glass-card rounded-2xl max-w-md w-[90%] mx-auto shadow-2xl animate-fade-in-up">
        <div className="mb-4 text-wedding-cream animate-pulse">
          <Heart size={32} fill="currentColor" className="text-wedding-rose" />
        </div>
        
        <h3 className="text-wedding-cream text-lg font-sans tracking-widest uppercase mb-2">The Wedding Of</h3>
        <h1 className="text-5xl md:text-7xl font-script text-white mb-6 drop-shadow-lg">Romeo & Juliet</h1>
        
        <p className="text-wedding-cream mb-8 font-serif italic text-lg">
          "Kepada Yth. Bapak/Ibu/Saudara/i"
        </p>
        
        <button
          onClick={onOpen}
          className="group flex items-center gap-2 bg-wedding-cream/90 hover:bg-white text-wedding-text px-8 py-3 rounded-full font-serif font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <Mail size={18} className="group-hover:rotate-12 transition-transform" />
          <span>Buka Undangan</span>
        </button>
      </div>
    </div>
  );
};

export default OpeningScreen;
