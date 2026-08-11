import React from 'react';
import { motion } from 'framer-motion';
import type { Certificate } from '../types';
import { Award, Calendar, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CertificatesSectionProps {
  certificates: Certificate[];
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ certificates }) => {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Award size={14} />
            <span>{t.certificates.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.certificates.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            {t.certificates.subtitle}
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id || idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.07] transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Award size={20} />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono">
                    <Calendar size={12} />
                    <span>{cert.issueYear}</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-cyan-400 font-semibold text-xs font-mono mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-xs leading-relaxed font-light mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Verified Badge */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} />
                  <span>{t.certificates.verified}</span>
                </span>
                <span className="text-gray-400 px-2 py-0.5 rounded bg-white/5">
                  #{cert.badgeCategory}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
