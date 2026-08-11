import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 42, className = "", showText = true }) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 group ${className}`}>
      
      {/* 3D Glowing Hexagon Shield Emblem */}
      <div 
        className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0"
        style={{ width: size, height: size }}
      >
        {/* Ambient Glow Aura */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>

        {/* Vector SVG Emblem Container */}
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-xl"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>

            <linearGradient id="logoBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#080C14" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Rounded Hexagon / Shield Border */}
          <rect 
            x="4" 
            y="4" 
            width="92" 
            height="92" 
            rx="24" 
            fill="url(#logoBg)" 
            stroke="url(#logoGrad)" 
            strokeWidth="3.5" 
          />

          {/* Inner Geometric Bracket Lines */}
          <path 
            d="M24 35 L14 50 L24 65" 
            stroke="#06B6D4" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            opacity="0.85"
          />
          <path 
            d="M76 35 L86 50 L76 65" 
            stroke="#10B981" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            opacity="0.85"
          />

          {/* Stylized Letters FM with Neon Gradient */}
          <text 
            x="50" 
            y="61" 
            textAnchor="middle" 
            fill="url(#logoGrad)" 
            fontSize="34" 
            fontWeight="900" 
            fontFamily="'Outfit', 'Inter', sans-serif" 
            letterSpacing="0.5"
            filter="url(#glow)"
          >
            FM
          </text>

          {/* Top Neon Accent Dot */}
          <circle cx="50" cy="20" r="3.5" fill="#10B981" />
        </svg>
      </div>

      {/* Brand Text - Compact on Mobile */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-white text-sm sm:text-base lg:text-lg tracking-wider group-hover:text-cyan-400 transition-colors leading-tight whitespace-nowrap">
            FURKAN MASRAF
          </span>
          <span className="hidden sm:block text-[9px] sm:text-[10px] text-cyan-400 font-mono tracking-widest uppercase whitespace-nowrap">
            BACKEND DEVELOPER
          </span>
        </div>
      )}

    </div>
  );
};
