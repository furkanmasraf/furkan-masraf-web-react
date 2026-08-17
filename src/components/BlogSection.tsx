import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { BlogPost } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BlogPostModal } from './BlogPostModal';

interface BlogSectionProps {
  posts: BlogPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  const { t, language } = useLanguage();
  const [readerModalPost, setReaderModalPost] = useState<BlogPost | null>(null);

  // Ensure newest articles appear at the top
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <BookOpen size={14} />
            <span>{t.blog.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
            {t.blog.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Horizontal Bar List (Direct Modal Reader Trigger) */}
        <div className="space-y-4">
          {sortedPosts.map((post, idx) => (
            <motion.div
              key={post.id || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              onClick={() => setReaderModalPost(post)}
              className="glass-panel rounded-2xl p-5 sm:p-7 border border-white/10 hover:border-cyan-500/60 bg-slate-950/70 hover:bg-slate-950/95 transition-all duration-300 shadow-xl cursor-pointer group flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden"
            >
              {/* Left Column: Meta & Title & Excerpt */}
              <div className="space-y-2.5 flex-1">
                
                {/* Meta Badges Row */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  
                  {/* Category */}
                  <span className="px-3 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-bold uppercase tracking-wider">
                    {post.category}
                  </span>

                  {/* Publication Date */}
                  <span className="flex items-center gap-1.5 text-gray-300 text-xs font-semibold">
                    <Calendar size={13} className="text-cyan-400" />
                    <span>{post.date}</span>
                  </span>

                  {/* Read Time */}
                  <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </span>

                </div>

                {/* Article Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-mono leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <Tag size={12} className="text-gray-500 mr-1" />
                  {post.tags.slice(0, 4).map((tTag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-cyan-300">
                      #{tTag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Right Column: Direct Read Action Button */}
              <div className="shrink-0 self-end md:self-center">
                <div className="px-5 py-2.5 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500 border border-cyan-500/30 group-hover:border-cyan-400 text-cyan-300 group-hover:text-slate-950 font-bold text-xs font-mono transition-all duration-300 shadow-lg flex items-center gap-2">
                  <span>{language === 'EN' ? 'Read Article' : 'Yazıyı Oku'}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Direct Full-Screen Reader Modal */}
      <BlogPostModal
        post={readerModalPost}
        onClose={() => setReaderModalPost(null)}
      />

    </section>
  );
};
