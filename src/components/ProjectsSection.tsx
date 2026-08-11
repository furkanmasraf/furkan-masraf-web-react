import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import { FolderGit2, Sparkles, Terminal, ShieldCheck, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <FolderGit2 size={14} />
            <span>PORTFOLYO & PROJELER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Öne Çıkan <span className="text-gradient-cyan">Yazılım Projelerim</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Detaylarını ve mimari özelliklerini incelemek için projenin üzerine tıklayın:
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setActiveProjectModal(project)}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between group shadow-xl cursor-pointer relative"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono font-semibold">
                  <Sparkles size={12} />
                  <span>ÖNE ÇIKAN</span>
                </div>
              )}

              <div>
                {/* Category Pill */}
                <span className="inline-block text-[11px] font-mono font-semibold text-emerald-400 mb-3 tracking-wider">
                  {project.category.toUpperCase()}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 font-mono">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
              </div>

              {/* Card Footer Info */}
              <div className="pt-4 border-t border-white/10 space-y-4 mt-auto">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="flex items-center justify-between pt-2 text-xs font-mono text-cyan-400 group-hover:text-cyan-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Terminal size={14} />
                    <span>Mimari Detayları İncele</span>
                  </span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Architectural Detail Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel-glow max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-cyan-500/40 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors font-mono text-sm"
              >
                ✕
              </button>

              <div className="space-y-1">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  {activeProjectModal.category}
                </span>
                <h3 className="text-2xl font-bold text-white font-mono">
                  {activeProjectModal.title}
                </h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed font-light">
                {activeProjectModal.description}
              </p>

              {/* Key Features Breakdown */}
              <div className="space-y-3 pt-3 border-t border-white/10">
                <h4 className="text-sm font-mono text-emerald-400 font-bold flex items-center gap-2">
                  <ShieldCheck size={18} />
                  <span>Mimari & Teknik Özellikler:</span>
                </h4>

                <div className="space-y-2.5">
                  {activeProjectModal.keyFeatures?.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 font-light">
                      <span className="text-cyan-400 font-mono font-bold shrink-0">[{idx + 1}]</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Repo Links */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeProjectModal.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {activeProjectModal.backendGithubUrl && (
                    <a
                      href={activeProjectModal.backendGithubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs font-mono shadow-lg shadow-cyan-500/20 flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <GithubIcon size={16} />
                      <span>GitHub Codebase</span>
                    </a>
                  )}

                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 font-mono text-xs transition-colors"
                  >
                    Kapat
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
