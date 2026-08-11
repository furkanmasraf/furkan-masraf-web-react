import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Server, FolderGit2, Award, Mail, Cpu, Sparkles, Menu, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const { t, language } = useLanguage();
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
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1';
    fetch(`${baseUrl}/profile`, { signal: AbortSignal.timeout(2000) })
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
    { id: 'hero', label: t.nav.home, icon: Cpu },
    { id: 'about', label: t.nav.about, icon: Code2 },
    { id: 'experience', label: t.nav.experience, icon: Server },
    { id: 'projects', label: t.nav.projects, icon: FolderGit2 },
    { id: 'skills', label: t.nav.skills, icon: Code2 },
    { id: 'certificates', label: t.nav.certificates, icon: Award },
    { id: 'wizard', label: t.nav.wizard, icon: Sparkles },
    { id: 'contact', label: t.nav.contact, icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 glass-panel border-b border-white/10 shadow-2xl backdrop-blur-xl bg-slate-950/90' 
        : 'py-2.5 bg-slate-950/60 backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-1.5 sm:gap-2">
        
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="focus:outline-none shrink-0">
          <Logo size={34} />
        </a>

        {/* 2XL Screens: Ultra Full Desktop Navigation */}
        <nav className="hidden 2xl:flex items-center gap-1 glass-panel px-3 py-1 rounded-full border border-white/10 shrink-0">
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

        {/* XL Screens: Standard Desktop Navigation */}
        <nav className="hidden xl:flex 2xl:hidden items-center gap-0.5 glass-panel px-2 py-1 rounded-full border border-white/10 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-2 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* LG Screens: Compact Navigation */}
        <nav className="hidden lg:flex xl:hidden items-center gap-0.5 glass-panel px-1.5 py-0.5 rounded-full border border-white/10 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Control Group (Live Indicator, Language Switcher, CLI Button, Hamburger Toggle) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
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
              {isBackendLive === null ? 'SPRING API...' : isBackendLive ? t.nav.backendLive : t.nav.backendOffline}
            </span>
          </div>

          {/* TR / EN Language Toggle Button */}
          <LanguageToggle />

          {/* Dev Terminal CLI Button (Hidden on small mobile, accessible via mobile drawer & Ctrl+K) */}
          <button
            onClick={onOpenTerminal}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/30 hover:border-cyan-300 text-xs font-mono transition-all shadow-md shadow-cyan-500/20 group whitespace-nowrap shrink-0"
            title={t.nav.cli}
          >
            <Terminal size={13} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="font-bold">&gt;_ CLI</span>
            <kbd className="hidden sm:inline-block px-1 py-0.5 text-[9px] bg-black/50 text-cyan-200 rounded border border-cyan-500/30 ml-0.5">
              Ctrl+K
            </kbd>
          </button>

          {/* Mobile Collapsible Bar Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 hover:text-white hover:bg-cyan-500/30 transition-all flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20"
            aria-label="Toggle Navigation Bar"
          >
            {mobileMenuOpen ? <X size={20} className="text-cyan-300" /> : <Menu size={20} className="text-cyan-300" />}
          </button>

        </div>
      </div>

      {/* Ultra Mobile-Friendly Collapsible Drawer / Sheet Bar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-b border-cyan-500/30 bg-slate-950/95 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            {/* Top Sheet Pill Handle */}
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mt-2.5 mb-1"></div>

            <div className="px-4 pt-2 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
              
              {/* Category Header */}
              <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider px-1">
                <span>{language === 'EN' ? 'Navigation Menu' : 'Navigasyon Menüsü'}</span>
                <span className="text-gray-500">8 {language === 'EN' ? 'Sections' : 'Bölüm'}</span>
              </div>

              {/* Grid 2-Column Touch Navigation Cards */}
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`flex items-center justify-between px-3 py-3 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold shadow-lg shadow-cyan-500/20'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5 active:scale-98'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon size={15} className={isActive ? 'text-white' : 'text-cyan-400'} />
                        <span>{link.label}</span>
                      </div>
                      <ChevronRight size={13} className={isActive ? 'text-white' : 'text-gray-500'} />
                    </a>
                  );
                })}
              </div>

              {/* Mobile Action Controls & Proposal Trigger */}
              <div className="pt-3 border-t border-white/10 space-y-2.5">
                
                {/* Start Project CTA Button */}
                <a
                  href="#wizard"
                  onClick={(e) => handleNavClick(e, 'wizard')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 text-slate-950 font-extrabold text-xs font-mono shadow-lg shadow-cyan-500/25 active:scale-98 transition-all"
                >
                  <Sparkles size={16} />
                  <span>{language === 'EN' ? 'Start Project & Collaboration' : 'Proje & İş Birliği Başlatın'}</span>
                </a>

                {/* Open CLI Terminal inside Menu */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 font-bold text-xs font-mono transition-all"
                >
                  <Terminal size={15} className="text-cyan-400" />
                  <span>{language === 'EN' ? 'Open Developer CLI Terminal' : 'Geliştirici CLI Terminalini Aç'}</span>
                </button>

                {/* API Live Status Bar */}
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono">
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-cyan-400" />
                    <span>Spring API Status:</span>
                  </span>
                  <span className={`flex items-center gap-1.5 ${isBackendLive ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}`}>
                    <span className={`w-2 h-2 rounded-full ${isBackendLive ? 'bg-emerald-400 animate-ping' : 'bg-amber-400 animate-ping'}`}></span>
                    {isBackendLive === null ? 'SPRING API...' : isBackendLive ? t.nav.backendLive : t.nav.backendOffline}
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
