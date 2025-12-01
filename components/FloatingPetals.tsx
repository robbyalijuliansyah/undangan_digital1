import React, { useEffect, useState } from 'react';

const FloatingPetals: React.FC = () => {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    // Generate a few petals
    const petalCount = 15;
    const newPetals = Array.from({ length: petalCount }, (_, i) => i);
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((i) => {
        const left = Math.random() * 100;
        const animationDuration = 8 + Math.random() * 10;
        const size = 10 + Math.random() * 15;
        const delay = Math.random() * 5;

        return (
          <div
            key={i}
            className="petal bg-gradient-to-br from-pink-100 to-transparent shadow-sm"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingPetals;
