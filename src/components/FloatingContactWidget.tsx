import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mail, X, Sparkles } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export const FloatingContactWidget: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const channels = [
    {
      id: 'email',
      label: language === 'EN' ? 'Send Email' : 'E-Posta Gönderin',
      href: 'mailto:masraffurkan@gmail.com?subject=Proje%20ve%20%C4%B0%C5%9F%20Birli%C4%9Fi%20Hakk%C4%B1nda',
      icon: Mail,
      color: 'bg-purple-600 hover:bg-purple-700 text-white',
      badge: 'masraffurkan@gmail.com'
    },
    {
      id: 'linkedin',
      label: language === 'EN' ? 'LinkedIn Message' : 'LinkedIn Mesajı',
      href: 'https://www.linkedin.com/in/furkan-masraf-20a8681b6/',
      icon: LinkedinIcon,
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      badge: 'LinkedIn Profile'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Speed Dial Options Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-3 space-y-2.5 flex flex-col items-end"
          >
            <div className="glass-panel-glow p-3.5 rounded-2xl border border-cyan-500/40 shadow-2xl space-y-2 max-w-xs">
              <div className="flex items-center gap-2 border-b border-white/10 pb-1.5 mb-1.5">
                <Sparkles size={13} className="text-cyan-400" />
                <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                  {language === 'EN' ? 'Quick Contact' : 'Hızlı İletişim'}
                </span>
              </div>

              {channels.map((ch) => {
                const Icon = ch.icon;
                return (
                  <a
                    key={ch.id}
                    href={ch.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 group transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${ch.color} shadow-md`}>
                        <Icon size={14} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {ch.label}
                        </span>
                        <span className="text-[9px] font-mono text-gray-400">{ch.badge}</span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Icon-Only Round Circular Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-slate-950 font-bold shadow-xl shadow-cyan-500/30 hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-white/40 group cursor-pointer"
        title={language === 'EN' ? "Quick Contact" : "Hızlı İletişime Geçin"}
      >
        {/* Animated Corner Pulse Dot */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-300"></span>
          </span>
        )}

        {/* Message / Close Icon */}
        {isOpen ? (
          <X size={20} className="transition-transform group-hover:rotate-90" />
        ) : (
          <MessageSquare size={20} className="transition-transform group-hover:scale-110" />
        )}
      </button>

    </div>
  );
};
