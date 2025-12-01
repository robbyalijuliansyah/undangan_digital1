import React from 'react';

const ClosingSection: React.FC = () => {
  return (
    <footer className="relative py-20 px-6 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-wedding-gold to-transparent opacity-50"></div>
      
      <div className="relative z-10 max-w-lg mx-auto">
        <h3 className="font-serif text-2xl text-wedding-text mb-6">Terima Kasih</h3>
        <p className="font-sans text-gray-600 mb-8 leading-relaxed">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami <br/>
          apabila Bapak/Ibu/Saudara/i berkenan hadir <br/>
          untuk memberikan doa restu kepada kami.
        </p>
        
        <div className="font-script text-4xl md:text-5xl text-wedding-gold mb-8">
          Romeo & Juliet
        </div>

        <div className="w-24 h-24 mx-auto opacity-80">
           {/* Simple floral decoration svg */}
           <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-wedding-rose w-full h-full">
             <path d="M50 20 Q 60 5 80 20 T 90 50 Q 95 70 80 80 T 50 90 Q 30 95 20 80 T 10 50 Q 5 30 20 20 T 50 20" strokeWidth="1" />
             <path d="M50 20 L 50 90" strokeWidth="0.5" />
             <path d="M20 50 L 80 50" strokeWidth="0.5" />
           </svg>
        </div>
        
        <p className="text-xs text-wedding-gold/60 mt-8 font-sans uppercase tracking-widest">
           Digital Invitation 2025
        </p>
      </div>
    </footer>
  );
};

export default ClosingSection;
