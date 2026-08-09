import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';
import { Code2 } from 'lucide-react';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');

  const categories = ['Hepsi', 'Backend', 'Database', 'DevOps', 'Testing', 'Frontend', 'Mobile'];

  const filteredSkills = selectedCategory === 'Hepsi'
    ? skills
    : skills.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Code2 size={14} />
            <span>TEKNİK YETKİNLİKLER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Teknoloji & <span className="text-gradient-cyan">Uzmanlık Haritası</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Java 17+, Spring Boot, PostgreSQL, Redis ve mikroservis ekosisteminde uzmanlaştığım teknoloji stack'i:
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold shadow-lg shadow-cyan-500/20'
                  : 'glass-panel text-gray-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.id || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel p-5 rounded-xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-base font-mono">{skill.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {skill.category}
                  </span>
                </div>
                <span className="text-cyan-400 font-mono font-bold text-sm">
                  %{skill.proficiencyPercentage}
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden mb-3 p-0.5 border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiencyPercentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 shadow-md shadow-cyan-500/30"
                ></motion.div>
              </div>

              {/* Highlight Subtext */}
              <div className="text-xs text-gray-400 font-mono font-light flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{skill.highlightText}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
