import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BlogPost } from '../types';
import { X, Calendar, Clock, User, Tag, Share2, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BlogPostModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
        />

        {/* Article Reader Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="glass-panel-glow relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-cyan-500/40 bg-[#080D1A]/95 shadow-2xl p-6 sm:p-10 space-y-8 custom-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 text-gray-400 hover:text-white hover:bg-cyan-500/10 transition-all cursor-pointer z-20 group"
            title={language === 'EN' ? "Close Article" : "Makaleyi Kapat"}
          >
            <X size={20} className="group-hover:rotate-90 transition-transform" />
          </button>

          {/* Article Header */}
          <div className="space-y-5 border-b border-white/10 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono leading-snug">
              {post.title}
            </h1>

            {/* Author & Date Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 pt-1">
              <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <User size={14} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Main Body Content */}
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 text-sm sm:text-base font-light leading-relaxed">
            {post.content.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={pIdx} className="text-xl sm:text-2xl font-bold text-white font-mono pt-4 border-b border-white/10 pb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('#### ')) {
                return (
                  <h4 key={pIdx} className="text-base font-bold text-cyan-300 font-mono pt-2">
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              }
              if (paragraph.startsWith('```')) {
                const codeLines = paragraph.replace(/```[a-z]*/, '').replace(/```$/, '').trim();
                return (
                  <pre key={pIdx} className="p-4 rounded-2xl bg-black/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono overflow-x-auto shadow-inner">
                    <code>{codeLines}</code>
                  </pre>
                );
              }
              return (
                <p key={pIdx} className="text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Article Tags */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-gray-400 mr-2 flex items-center gap-1">
              <Tag size={13} />
              <span>{language === 'EN' ? 'Tags:' : 'Etiketler:'}</span>
            </span>
            {post.tags.map((tTag, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300 text-xs font-mono">
                #{tTag}
              </span>
            ))}
          </div>

          {/* Article Footer Controls */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            
            <button
              onClick={handleShare}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} className="text-cyan-400" />}
              <span>{copied ? (language === 'EN' ? 'Link Copied!' : 'Bağlantı Kopyalandı!') : (language === 'EN' ? 'Share Article' : 'Makaleyi Paylaş')}</span>
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs font-mono shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform cursor-pointer"
            >
              {language === 'EN' ? 'Close Reader' : 'Makaleyi Kapat'}
            </button>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
