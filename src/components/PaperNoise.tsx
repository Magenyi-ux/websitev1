import { useEffect, useState } from 'react';

export default function PaperNoise() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.035] mix-blend-overlay">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.85" 
            numOctaves="4" 
            stitchTiles="stitch" 
          />
          <feColorMatrix 
            type="matrix" 
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.7 0" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
