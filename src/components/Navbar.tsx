import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Server, FolderGit2, Award, Mail, Cpu, Sparkles, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isBackendLive, setIsBackendLive] = useState<boolean | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'benefits', 'experience', 'projects', 'skills', 'certificates', 'wizard', 'contact'];
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navbarOffset = 75;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Ana Sayfa', icon: Cpu },
    { id: 'about', label: 'Hakkımda', icon: Code2 },
    { id: 'experience', label: 'Deneyim', icon: Server },
    { id: 'projects', label: 'Projeler', icon: FolderGit2 },
    { id: 'skills', label: 'Yetenekler', icon: Code2 },
    { id: 'certificates', label: 'Sertifikalar', icon: Award },
    { id: 'wizard', label: 'İş Birliği', icon: Sparkles },
    { id: 'contact', label: 'İletişim', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2.5 glass-panel border-b border-white/10 shadow-2xl backdrop-blur-xl bg-slate-950/85' 
        : 'py-3.5 bg-slate-950/40 backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="focus:outline-none shrink-0">
          <Logo size={36} />
        </a>

        {/* Desktop Full Navigation Links (xl breakpoint and above) */}
        <nav className="hidden xl:flex items-center gap-1 glass-panel px-3 py-1 rounded-full border border-white/10 shrink-0">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md shadow-cyan-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={13} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Compact Navigation Links for Medium/Large Screens (lg breakpoint) */}
        <nav className="hidden lg:flex xl:hidden items-center gap-1 glass-panel px-2.5 py-1 rounded-full border border-white/10 shrink-0">
          {[
            { id: 'hero', label: 'Ana Sayfa' },
            { id: 'about', label: 'Hakkımda' },
            { id: 'experience', label: 'Deneyim' },
            { id: 'projects', label: 'Projeler' },
            { id: 'skills', label: 'Yetenekler' },
            { id: 'certificates', label: 'Sertifikalar' },
            { id: 'wizard', label: 'İş Birliği' },
            { id: 'contact', label: 'İletişim' }
          ].map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md shadow-cyan-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Status Pill & Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Spring Boot API Live Indicator */}
          <div className="hidden 2xl:flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-white/10 text-[11px] font-mono whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isBackendLive ? 'bg-emerald-400' : 'bg-amber-400'
              }`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                isBackendLive ? 'bg-emerald-500' : 'bg-amber-500'
              }`}></span>
            </span>
            <span className={isBackendLive ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
              {isBackendLive === null ? 'SPRING API...' : isBackendLive ? 'SPRING REST LIVE' : 'OFFLINE MODE'}
            </span>
          </div>



          {/* Dev Terminal CLI Button - Prominently Highlighted */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/30 hover:border-cyan-300 text-xs font-mono transition-all shadow-md shadow-cyan-500/20 group whitespace-nowrap"
            title="Geliştirici Terminalini Aç (Ctrl + K)"
          >
            <Terminal size={14} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="font-bold">&gt;_ CLI</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-black/50 text-cyan-200 rounded border border-cyan-500/30 ml-0.5">
              Ctrl+K
            </kbd>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              <div className="grid grid-cols-2 gap-2 pt-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                      }`}
                    >
                      <Icon size={14} className={isActive ? 'text-white' : 'text-cyan-400'} />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Mobile CTA & Status Footer inside menu */}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href="#wizard"
                  onClick={(e) => handleNavClick(e, 'wizard')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 text-white font-bold text-xs font-mono shadow-lg shadow-cyan-500/20"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span>Proje & İş Birliği Başlatın</span>
                </a>

                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
                  <span className="text-gray-400">Spring API Durumu:</span>
                  <span className={`flex items-center gap-1.5 ${isBackendLive ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}`}>
                    <span className={`w-2 h-2 rounded-full ${isBackendLive ? 'bg-emerald-400 animate-ping' : 'bg-amber-400 animate-ping'}`}></span>
                    {isBackendLive === null ? 'SPRING API...' : isBackendLive ? 'SPRING REST LIVE' : 'OFFLINE MODE'}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
