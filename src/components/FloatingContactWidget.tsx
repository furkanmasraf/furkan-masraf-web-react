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
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="mb-4 space-y-3 flex flex-col items-end"
          >
            <div className="glass-panel-glow p-4 rounded-2xl border border-cyan-500/40 shadow-2xl space-y-2.5 max-w-xs">
              <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
                <Sparkles size={14} className="text-cyan-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {language === 'EN' ? 'Quick Contact Channels' : 'Hızlı İletişim Kanalları'}
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
                    className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${ch.color} shadow-md`}>
                        <Icon size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {ch.label}
                        </span>
                        <span className="text-[10px] font-mono text-gray-400">{ch.badge}</span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-white font-bold text-xs font-mono shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all group border border-white/20"
        title={language === 'EN' ? "Quick Contact" : "Hızlı İletişime Geçin"}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <span>
          {isOpen
            ? (language === 'EN' ? 'Close' : 'Kapat')
            : (language === 'EN' ? 'Start Project / Contact' : 'Proje Başlat / İletişim')}
        </span>
        
        {isOpen ? <X size={18} /> : <MessageSquare size={18} className="group-hover:rotate-12 transition-transform" />}
      </button>

    </div>
  );
};
