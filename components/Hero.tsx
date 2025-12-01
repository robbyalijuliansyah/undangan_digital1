import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-wedding-rose/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-wedding-gold/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative z-10 glass-card p-10 rounded-t-full rounded-b-[1000px] border-none shadow-xl max-w-lg w-full flex flex-col items-center animate-fade-in-up">
            <h2 className="text-xl font-sans text-wedding-gold tracking-[0.3em] mb-4 uppercase">Save The Date</h2>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-wedding-cream shadow-2xl mb-8">
                <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
                    alt="Couple" 
                    className="w-full h-full object-cover"
                />
            </div>

            <h1 className="font-script text-6xl md:text-8xl text-wedding-text mb-2">Romeo</h1>
            <span className="font-serif text-3xl text-wedding-gold italic mb-2">&</span>
            <h1 className="font-script text-6xl md:text-8xl text-wedding-text mb-8">Juliet</h1>
            
            <p className="font-serif text-lg text-wedding-text/80 max-w-xs leading-relaxed">
                Kami mengundang Anda untuk merayakan cinta dan kebahagiaan kami.
            </p>
            
            <div className="mt-8 h-16 w-[1px] bg-wedding-gold/50"></div>
        </div>
    </section>
  );
};

export default Hero;
