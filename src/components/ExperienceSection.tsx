import React from 'react';
import { motion } from 'framer-motion';
import type { Experience } from '../types';
import { Briefcase, Calendar, MapPin, ChevronRight, Server } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
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
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 lg:ml-12 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id || idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#090D16] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 group-hover:scale-125 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                <Server size={14} />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all shadow-xl">
                
                {/* Top Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-base font-mono mt-0.5">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed font-light">
                      <ChevronRight size={16} className="text-cyan-400 flex-shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
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
          ))}
        </div>

      </div>
    </section>
  );
};
