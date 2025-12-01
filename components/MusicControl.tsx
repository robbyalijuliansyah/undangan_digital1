import React, { useState, useEffect, useRef } from 'react';
import { Music, Pause } from 'lucide-react';

const MusicControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Standard public domain or creative commons track
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Try auto-play on mount (often blocked by browser policy without interaction)
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log("Auto-play prevented by browser policy:", error);
        setIsPlaying(false);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={toggleMusic}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isPlaying ? 'bg-wedding-rose text-white animate-spin-slow' : 'bg-white text-wedding-text'}`}
      style={{ boxShadow: '0 0 15px rgba(220, 197, 193, 0.6)' }}
    >
      {isPlaying ? <Music size={20} /> : <Pause size={20} />}
    </button>
  );
};

export default MusicControl;
