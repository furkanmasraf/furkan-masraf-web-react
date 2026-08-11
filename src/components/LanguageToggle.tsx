import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../i18n/translations';

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  const options: { id: Language; label: string }[] = [
    { id: 'TR', label: 'TR' },
    { id: 'EN', label: 'EN' }
  ];

  return (
    <div 
      className={`relative inline-flex items-center p-1 rounded-full bg-[#090E1A]/90 border border-cyan-500/40 shadow-lg shadow-cyan-500/15 backdrop-blur-xl select-none ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      {options.map((opt) => {
        const isActive = language === opt.id;

        return (
          <button
            key={opt.id}
            onClick={() => setLanguage(opt.id)}
            type="button"
            className={`relative z-10 px-3 py-1 rounded-full text-xs font-mono font-extrabold tracking-wider transition-colors duration-200 focus:outline-none ${
              isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
            }`}
            title={opt.id === 'TR' ? "Türkçe" : "English"}
          >
            {/* Smooth Sliding Pill Indicator */}
            {isActive && (
              <motion.div
                layoutId="slidingLangPill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 shadow-md shadow-cyan-500/30"
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
              />
            )}

            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};
