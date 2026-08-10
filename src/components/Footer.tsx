import React from 'react';
import { ChevronUp, Mail } from 'lucide-react';
import type { ProfileInfo } from '../types';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Logo } from './Logo';
import { sanitizeLinkedinUrl } from '../services/api';

interface FooterProps {
  profile: ProfileInfo;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#060911] relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Left Brand Logo */}
          <Logo size={40} />

          {/* Social Links */}
          <div className="flex items-center gap-4 text-gray-400 text-xs font-mono">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a href={sanitizeLinkedinUrl(profile.linkedinUrl)} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a href={`mailto:${profile.email}`} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Mail size={16} />
              <span>{profile.email}</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-panel hover:bg-white/10 text-cyan-400 hover:text-cyan-300 border border-white/10 transition-all flex items-center gap-2 text-xs font-mono"
            title="Yukarı Çık"
          >
            <span>Yukarı</span>
            <ChevronUp size={16} />
          </button>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-mono gap-4">
          <p>© {new Date().getFullYear()} Furkan Masraf. Tüm Hakları Saklıdır.</p>
          <div className="flex items-center gap-2 text-gray-400">
            <span>Powered by</span>
            <span className="text-cyan-400 font-semibold">Java Spring Boot 3</span>
            <span>&</span>
            <span className="text-emerald-400 font-semibold">React + TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
