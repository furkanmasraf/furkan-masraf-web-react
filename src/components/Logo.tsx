import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 38, className = "", showText = true }) => {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group cursor-pointer ${className}`}>
      
      {/* Minimalist Ultra-Clean Monogram Badge */}
      <div 
        className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0"
        style={{ width: size, height: size }}
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Minimal Vector SVG Frame */}
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 80 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <defs>
            <linearGradient id="minGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Minimal Rounded Dark Box */}
          <rect 
            x="3" 
            y="3" 
            width="74" 
            height="74" 
            rx="18" 
            fill="#090E17" 
            stroke="#1E293B" 
            strokeWidth="2" 
            className="group-hover:stroke-cyan-500/50 transition-colors"
          />

          {/* Clean Minimal Typography 'FM' */}
          <text 
            x="40" 
            y="51" 
            textAnchor="middle" 
            fill="url(#minGrad)" 
            fontSize="30" 
            fontWeight="800" 
            fontFamily="'Inter', 'Outfit', system-ui, sans-serif" 
            letterSpacing="-1"
          >
            FM
          </text>
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col select-none">
          <span className="font-bold text-white text-sm sm:text-base tracking-wide group-hover:text-cyan-400 transition-colors leading-tight whitespace-nowrap font-sans">
            FURKAN MASRAF
          </span>
          <span className="hidden sm:block text-[9px] text-gray-400 font-mono tracking-wider uppercase whitespace-nowrap">
            Backend Developer
          </span>
        </div>
      )}

    </div>
  );
};
