import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Experience } from '../types';
import { Briefcase, Calendar, MapPin, ChevronRight, Server, ChevronDown, Eye, EyeOff } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  // Track open/collapsed state for each card (Default first experience open)
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({
    0: true
  });

  const toggleItem = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<number, boolean> = {};
    experiences.forEach((_, idx) => {
      allExpanded[idx] = true;
    });
    setExpandedItems(allExpanded);
  };

  const collapseAll = () => {
    setExpandedItems({});
  };

  const isAllExpanded = experiences.length > 0 && experiences.every((_, idx) => expandedItems[idx]);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Briefcase size={14} />
            <span>KURUMSAL TECRÜBE VE STAJLAR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            İş ve Staj <span className="text-gradient-cyan">Deneyimlerim</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Türkiye'nin önde gelen teknoloji ve bankacılık kurumlarında edindiğim pratik saha tecrübeleri:
          </p>

          {/* Quick Expand / Collapse Global Toggle */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={isAllExpanded ? collapseAll : expandAll}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 text-cyan-400 hover:text-cyan-300 text-xs font-mono transition-all shadow-sm"
            >
              {isAllExpanded ? <EyeOff size={14} /> : <Eye size={14} />}
              <span>{isAllExpanded ? 'Tüm Detayları Daralt' : 'Tüm Detayları Genişlet'}</span>
            </button>
          </div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 lg:ml-12 space-y-8">
          {experiences.map((exp, idx) => {
            const isExpanded = !!expandedItems[idx];

            return (
              <motion.div
                key={exp.id || idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline Node Icon */}
                <div className="absolute -left-[17px] top-4 w-8 h-8 rounded-full bg-[#090D16] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all z-10">
                  <Server size={14} />
                </div>

                {/* Card Container */}
                <div className="glass-panel rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all shadow-xl overflow-hidden">
                  
                  {/* Clickable Header Bar */}
                  <div
                    onClick={() => toggleItem(idx)}
                    className="p-6 sm:p-7 cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.company}
                        </h3>
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono">
                          {exp.highlights.length} Sorumluluk
                        </span>
                      </div>
                      <p className="text-cyan-400 font-semibold text-sm sm:text-base font-mono">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-center shrink-0">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>

                      {/* Animated Chevron Indicator */}
                      <div className={`p-2 rounded-xl border transition-all duration-300 ${
                        isExpanded 
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 rotate-180' 
                          : 'bg-white/5 border-white/10 text-gray-400 group-hover:text-white group-hover:border-cyan-500/40'
                      }`}>
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Content Area */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-white/10 space-y-6">
                          
                          {/* Highlights Bullet List */}
                          <ul className="space-y-3 pt-2">
                            {exp.highlights.map((highlight, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed font-light">
                                <ChevronRight size={16} className="text-cyan-400 flex-shrink-0 mt-1" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech Pills */}
                          <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                            {exp.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                              >
                                #{tech}
                              </span>
                            ))}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
