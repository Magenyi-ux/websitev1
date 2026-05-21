import React from 'react';

interface SphereLearnLogoProps {
  className?: string;
  size?: number;
  color?: string; // e.g. '#2B2B2B' or 'white' or 'currentColor'
  showText?: boolean;
}

export default function SphereLearnLogo({ 
  className = '', 
  size = 40, 
  color = '#2B2B2B',
  showText = false
}: SphereLearnLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer Circular Boundary */}
        <circle cx="60" cy="60" r="48" stroke={color} strokeWidth="2.5" fill="none" />
        
        {/* Intersecting wavy orbital/latitude lines that look like the globe lines in the logo */}
        {/* Soft upper swoop */}
        <path 
          d="M 23 45 C 40 35, 80 35, 97 45" 
          stroke={color} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          fill="none" 
        />
        {/* Deep bottom scoop/wave resembling the bottom crests */}
        <path 
          d="M 18 78 C 35 98, 85 98, 102 78" 
          stroke={color} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          fill="none" 
        />
        {/* Horizontal dividing wavy line */}
        <path 
          d="M 14 62 C 38 48, 82 82, 106 62" 
          stroke={color} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          fill="none" 
        />
        {/* Vertical longitude left arc */}
        <path 
          d="M 40 16 C 18 45, 18 75, 40 104" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none" 
        />
        {/* Vertical longitude right arc */}
        <path 
          d="M 80 16 C 102 45, 102 75, 80 104" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none" 
        />

        {/* Central stylized lightbulb holding the spark of intelligence */}
        {/* Upper rounded bulb dome */}
        <path 
          d="M 50 50 C 50 42, 70 42, 70 50 C 70 56, 64 58, 62 62 L 62 66 L 58 66 L 58 62 C 56 58, 50 56, 50 50 Z" 
          stroke={color} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none" 
        />
        
        {/* Filament/base bands underneath */}
        <line x1="57" y1="70" x2="63" y2="70" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="58.5" y1="73.5" x2="61.5" y2="73.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
        
        {/* Glowing aura beams from the bulb top */}
        <line x1="60" y1="36" x2="60" y2="31" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="45" y1="46" x2="41" y2="44" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="75" y1="46" x2="79" y2="44" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
      {showText && (
        <span className="font-sans font-extrabold text-[#2B2B2B] tracking-tight">
          Sphere<span className="font-light text-gray-500">Learn</span>
        </span>
      )}
    </div>
  );
}
