import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BlogPost } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, Tag, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BlogPostModal } from './BlogPostModal';

interface BlogSectionProps {
  posts: BlogPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const { t, language } = useLanguage();
  const [readerModalPost, setReaderModalPost] = useState<BlogPost | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 2;

  // Ensure newest articles appear first
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visiblePosts = sortedPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <BookOpen size={14} />
            <span>{t.blog.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
            {t.blog.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm font-light">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Compact Navigation Bar (Article Counter + Pagination Arrows) */}
        <div className="flex items-center justify-between gap-4 pt-2 border-b border-white/10 pb-4">
          
          {/* Article Count Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-semibold">
            <Layers size={14} className="text-cyan-400" />
            <span>
              {language === 'EN' 
                ? `Total ${sortedPosts.length} Articles` 
                : `Toplam ${sortedPosts.length} Teknik Yazı`}
            </span>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                title={language === 'EN' ? "Previous" : "Önceki"}
              >
                <ChevronLeft size={16} />
              </button>

              <span className="text-xs font-mono text-gray-400 px-2 font-bold">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                title={language === 'EN' ? "Next" : "Sonraki"}
              >
                <ChevronRight size={16} />
              </button>

            </div>
          )}

        </div>

        {/* Compact 2-Column Grid (Fixed Height View) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {visiblePosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setReaderModalPost(post)}
                className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-cyan-500/60 bg-slate-950/70 hover:bg-slate-950/95 transition-all duration-300 shadow-xl cursor-pointer group flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                {/* Top Content */}
                <div className="space-y-3">
                  
                  {/* Meta Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-bold text-[10px] uppercase tracking-wider">
                      {post.category}
                    </span>

                    <div className="flex items-center gap-3 text-[11px]">
                      <span className="flex items-center gap-1 text-gray-400">
                        <Calendar size={12} className="text-cyan-400" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-mono leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Summary Excerpt */}
                  <p className="text-gray-300 text-xs font-light leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>

                </div>

                {/* Bottom Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1">
                    <Tag size={11} className="text-gray-500 mr-1" />
                    {post.tags.slice(0, 3).map((tTag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/5 border border-white/10 text-cyan-300">
                        #{tTag}
                      </span>
                    ))}
                  </div>

                  {/* Read CTA Button */}
                  <div className="px-3 py-1.5 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500 border border-cyan-500/30 group-hover:border-cyan-400 text-cyan-300 group-hover:text-slate-950 font-bold text-[11px] font-mono transition-all duration-300 flex items-center gap-1.5 shrink-0">
                    <span>{language === 'EN' ? 'Read' : 'Oku'}</span>
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>

                </div>

              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Direct Full-Screen Reader Modal */}
      <BlogPostModal
        post={readerModalPost}
        onClose={() => setReaderModalPost(null)}
      />

    </section>
  );
};
