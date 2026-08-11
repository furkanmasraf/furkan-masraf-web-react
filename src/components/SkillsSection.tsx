import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Skill } from '../types';
import { Code2, Server, Database, Box, CheckCircle, Layout, MousePointerClick } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'Backend', label: 'Backend', icon: Server, count: skills.filter(s => s.category.toLowerCase() === 'backend').length },
    { id: 'Database', label: language === 'EN' ? 'Database' : 'Veritabanı', icon: Database, count: skills.filter(s => s.category.toLowerCase() === 'database').length },
    { id: 'DevOps', label: 'DevOps & Docker', icon: Box, count: skills.filter(s => s.category.toLowerCase() === 'devops').length },
    { id: 'Testing', label: 'Test & QA', icon: CheckCircle, count: skills.filter(s => s.category.toLowerCase() === 'testing').length },
    { id: 'Frontend', label: 'Frontend', icon: Layout, count: skills.filter(s => s.category.toLowerCase() === 'frontend').length },
  ];

  const validSkills = skills.filter(s => 
    s.category.toLowerCase() !== 'mobile' && 
    !s.name.toLowerCase().includes('swift') && 
    !s.name.toLowerCase().includes('ios')
  );

  const filteredSkills = selectedCategory === null
    ? []
    : validSkills.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleCategoryClick = (catId: string) => {
    if (selectedCategory === catId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(catId);
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Code2 size={14} />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center gap-2 group ${
                  isSelected
                    ? 'bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border-cyan-400 text-cyan-300 shadow-xl shadow-cyan-500/20 scale-105'
                    : 'glass-panel text-gray-400 border-white/10 hover:border-cyan-500/40 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <div className={`p-2.5 rounded-xl transition-all ${
                  isSelected ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/40' : 'bg-white/5 text-cyan-400 group-hover:scale-110'
                }`}>
                  <Icon size={20} />
                </div>
                <span className="font-bold text-xs font-mono">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Container Area */}
        <AnimatePresence mode="wait">
          {selectedCategory === null ? (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-xl mx-auto text-center p-8 rounded-2xl glass-panel border border-white/10 space-y-3"
            >
              <MousePointerClick size={28} className="mx-auto text-cyan-400 animate-bounce" />
              <p className="text-gray-300 text-sm font-mono font-medium">
                {t.skills.hint}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredSkills.map((skill, idx) => (
                <motion.div
                  key={skill.id || idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="glass-panel p-5 rounded-xl border border-cyan-500/30 hover:border-cyan-400 hover:bg-white/[0.08] transition-all flex flex-col justify-between shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-bold text-base font-mono">{skill.name}</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
                      {skill.category}
                    </span>
                  </div>

                  {/* Highlight Subtext */}
                  <div className="text-xs text-gray-400 font-mono font-light flex items-center gap-1.5 pt-2 border-t border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                    <span>{skill.highlightText}</span>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
