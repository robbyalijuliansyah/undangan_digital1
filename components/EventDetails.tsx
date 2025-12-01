import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Akad Nikah */}
        <div className="glass-card p-8 rounded-3xl text-center transform hover:-translate-y-2 transition-transform duration-500 shadow-md">
            <div className="w-12 h-12 bg-wedding-sage/20 rounded-full flex items-center justify-center mx-auto mb-6 text-wedding-text">
                <span className="font-script text-2xl">A</span>
            </div>
            <h3 className="font-serif text-3xl text-wedding-text mb-2">Akad Nikah</h3>
            <p className="text-wedding-gold italic font-serif mb-6">The Holy Matrimony</p>
            
            <div className="space-y-4 font-sans text-sm md:text-base text-gray-600">
                <div className="flex flex-col items-center">
                    <Calendar className="mb-2 text-wedding-rose" size={20} />
                    <span className="font-semibold">Sabtu, 25 Oktober 2025</span>
                </div>
                <div className="flex flex-col items-center">
                    <Clock className="mb-2 text-wedding-rose" size={20} />
                    <span>08:00 - 10:00 WIB</span>
                </div>
                <div className="flex flex-col items-center">
                    <MapPin className="mb-2 text-wedding-rose" size={20} />
                    <span className="text-center px-4">Masjid Agung Al-Azhar, Jakarta Selatan</span>
                </div>
            </div>
        </div>

        {/* Resepsi */}
        <div className="glass-card p-8 rounded-3xl text-center transform hover:-translate-y-2 transition-transform duration-500 shadow-md">
            <div className="w-12 h-12 bg-wedding-rose/20 rounded-full flex items-center justify-center mx-auto mb-6 text-wedding-text">
                 <span className="font-script text-2xl">R</span>
            </div>
            <h3 className="font-serif text-3xl text-wedding-text mb-2">Resepsi</h3>
            <p className="text-wedding-gold italic font-serif mb-6">Wedding Reception</p>
            
            <div className="space-y-4 font-sans text-sm md:text-base text-gray-600">
                 <div className="flex flex-col items-center">
                    <Calendar className="mb-2 text-wedding-rose" size={20} />
                    <span className="font-semibold">Sabtu, 25 Oktober 2025</span>
                </div>
                <div className="flex flex-col items-center">
                    <Clock className="mb-2 text-wedding-rose" size={20} />
                    <span>11:00 - 13:00 WIB</span>
                </div>
                <div className="flex flex-col items-center">
                    <MapPin className="mb-2 text-wedding-rose" size={20} />
                    <span className="text-center px-4">Grand Ballroom Hotel Mulia, Jakarta</span>
                </div>
            </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="max-w-4xl mx-auto mt-12 glass-card p-4 rounded-3xl overflow-hidden shadow-lg">
          <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Map Preview"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white/90 text-wedding-text px-6 py-2 rounded-full font-sans text-sm font-semibold shadow-md hover:bg-wedding-rose hover:text-white transition-colors"
                >
                    Lihat Lokasi di Google Maps
                </a>
            </div>
          </div>
      </div>
    </section>
  );
};

export default EventDetails;
