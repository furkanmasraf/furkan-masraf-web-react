import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import { FolderGit2, Check, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['Hepsi', 'Spring Boot / Backend', 'C# / .NET', 'Full-Stack & DB'];

  const filteredProjects = selectedCategory === 'Hepsi'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <FolderGit2 size={14} />
            <span>PORTFOLYO & PROJELER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Öne Çıkan <span className="text-gradient-cyan">Yazılım Projelerim</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Kurumsal backend mimarileri, rol tabanlı yetkilendirme, performans önbellekleme ve fault tolerant entegrasyonlar içeren projeler:
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold shadow-lg shadow-cyan-500/20 scale-105'
                  : 'glass-panel text-gray-400 hover:text-white hover:border-cyan-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.07] transition-all flex flex-col justify-between group shadow-xl relative"
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
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  {/* Top Key Features */}
                  <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-cyan-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                    >
                      <Terminal size={14} />
                      <span>Mimari Detaylar &gt;</span>
                    </button>

                    {project.backendGithubUrl && (
                      <a
                        href={project.backendGithubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-mono transition-colors"
                      >
                        <GithubIcon size={14} />
                        <span>GitHub Repoları</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Architectural Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-panel-glow max-w-2xl w-full p-6 sm:p-8 rounded-2xl border border-cyan-500/40 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white font-mono text-lg"
            >
              ✕
            </button>

            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              {activeProjectModal.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              {activeProjectModal.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
              {activeProjectModal.description}
            </p>

            <h4 className="text-sm font-mono text-emerald-400 font-semibold mb-3 flex items-center gap-2">
              <ShieldCheck size={16} />
              <span>Mimari & Teknik Öne Çıkanlar:</span>
            </h4>

            <ul className="space-y-3 mb-6">
              {activeProjectModal.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="text-cyan-400 font-mono font-bold">[{idx + 1}]</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-6 py-2 rounded-xl bg-cyan-500 text-white font-semibold text-xs font-mono hover:bg-cyan-600 transition-colors"
              >
                Kapat
              </button>
            </div>

          </motion.div>
        </div>
      )}

    </section>
  );
};
