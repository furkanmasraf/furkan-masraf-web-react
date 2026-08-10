import React, { useState, useEffect } from 'react';
import { Terminal, Code2, Server, FolderGit2, Award, Mail, Cpu, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isBackendLive, setIsBackendLive] = useState<boolean | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'benefits', 'wizard', 'experience', 'projects', 'skills', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check Spring Boot API Status
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/profile', { signal: AbortSignal.timeout(2000) })
      .then(res => setIsBackendLive(res.ok))
      .catch(() => setIsBackendLive(false));
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Ana Sayfa', icon: Cpu },
    { id: 'wizard', label: 'Proje Başlat', icon: Sparkles },
    { id: 'about', label: 'Hakkımda', icon: Code2 },
    { id: 'experience', label: 'Deneyim', icon: Server },
    { id: 'projects', label: 'Projeler', icon: FolderGit2 },
    { id: 'skills', label: 'Yetenekler', icon: Code2 },
    { id: 'certificates', label: 'Sertifikalar', icon: Award },
    { id: 'contact', label: 'İletişim', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'py-3 glass-panel border-b border-white/10 shadow-2xl' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="focus:outline-none">
          <Logo size={42} />
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md shadow-cyan-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={14} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Status Pill & Terminal Trigger Button */}
        <div className="flex items-center gap-3">
          
          {/* Spring Boot API Live Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-white/10 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isBackendLive ? 'bg-emerald-400' : 'bg-amber-400'
              }`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                isBackendLive ? 'bg-emerald-500' : 'bg-amber-500'
              }`}></span>
            </span>
            <span className={isBackendLive ? 'text-emerald-400' : 'text-amber-400'}>
              {isBackendLive === null ? 'SPRING API...' : isBackendLive ? 'SPRING REST LIVE' : 'OFFLINE MODE'}
            </span>
          </div>

          {/* Direct Project Inquiry Header CTA Button */}
          <a
            href="#wizard"
            className="hidden xl:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-xs font-mono shadow-md shadow-cyan-500/20 hover:scale-105 transition-transform"
          >
            <Sparkles size={13} />
            <span>Fiyat Teklifi Al</span>
          </a>

          {/* Dev Terminal Button */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 text-xs font-mono transition-all shadow-sm group"
            title="Geliştirici Terminalini Aç (Ctrl + K)"
          >
            <Terminal size={14} className="group-hover:rotate-12 transition-transform" />
            <span className="hidden md:inline">CLI</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-black/40 text-gray-400 rounded border border-white/10">
              Ctrl+K
            </kbd>
          </button>

        </div>
      </div>
    </header>
  );
};
