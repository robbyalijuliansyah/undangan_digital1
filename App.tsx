import React, { useState } from 'react';
import OpeningScreen from './components/OpeningScreen';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import GuestBook from './components/GuestBook';
import ClosingSection from './components/ClosingSection';
import MusicControl from './components/MusicControl';
import FloatingPetals from './components/FloatingPetals';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Allow body scroll when opened
    document.body.style.overflow = 'auto';
  };

  // Initially lock scroll
  React.useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  return (
    <div className="relative min-h-screen bg-wedding-cream">
      {/* Visual Effects */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 pointer-events-none z-[1]"></div>
      <div className="fixed -top-[20%] -left-[10%] w-[50%] h-[50%] bg-wedding-rose/20 blur-[120px] rounded-full pointer-events-none z-[1]"></div>
      <div className="fixed -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-wedding-sage/20 blur-[120px] rounded-full pointer-events-none z-[1]"></div>
      
      {isOpen && <FloatingPetals />}

      {/* Opening Screen Overlay */}
      <div className={`fixed inset-0 z-50 transition-transform duration-1000 ease-in-out ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}>
        <OpeningScreen onOpen={handleOpen} />
      </div>

      {/* Main Content */}
      <main className="relative z-10 transition-opacity duration-1000 ease-in" style={{ opacity: isOpen ? 1 : 0 }}>
         {isOpen && (
           <>
            <Hero />
            <Countdown />
            
            {/* Divider */}
            <div className="flex justify-center py-4">
               <div className="h-20 w-[1px] bg-wedding-gold/30"></div>
            </div>

            <EventDetails />
            
            {/* Divider */}
            <div className="flex justify-center py-4">
               <div className="h-20 w-[1px] bg-wedding-gold/30"></div>
            </div>
            
            <GuestBook />
            <ClosingSection />
            <MusicControl />
           </>
         )}
      </main>
    </div>
  );
};

export default App;
