import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Layers, RefreshCw, Box, GraduationCap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      icon: RefreshCw,
      title: "Retry & Hata Toleransı",
      description: "Servisler arası entegrasyonlarda uzak sunucu kesintilerine karşı Resilience4j Retry mekanizmaları kurgulayarak kesintisiz (Fault Tolerant) servis mimarileri inşa ediyorum.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Type Safety & Global Exception Shield",
      description: "Tip güvenli Enum sınıfları ve @ControllerAdvice ile runtime/validasyon hatalarını havada yakalayıp tutarlı ve standart JSON cevap formatları döndürüyorum.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Layers,
      title: "Aspect-Oriented Programming (AOP)",
      description: "İş mantığı katmanını (Business Logic) kirletmeden çalışan modüler loglama, güvenlik ve performans takip katmanları tasarlıyorum.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Redis Caching & Performans",
      description: "Sık sorgulanan endpoint'lerde Redis önbellekleme (Caching) kullanarak veritabanı yükünü minimize ediyor ve milisaniye seviyesinde yanıt süreleri elde ediyorum.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Box,
      title: "Docker & Containerization",
      description: "PostgreSQL, Redis ve bağımlılıkları Docker & Docker Compose ile izole ederek ortam bağımsız tek tuşla çalışan servisler hazırlıyorum.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <GraduationCap size={14} />
            <span>MÜHENDİSLİK VİZYONU & YAKLAŞIM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Backend Mimarisi & <span className="text-gradient-cyan">Mühendislik İlkelerim</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Üsküdar Üniversitesi Bilgisayar Mühendisliği mezuniyet sürecimde kurumsal bankacılık ve teknoloji stajlarında gerçek dünya projelerine uyguladığım temel prensipler:
          </p>
        </div>

        {/* Engineering Principles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.07] transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} p-0.5 mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-[#0F1623] rounded-[10px] flex items-center justify-center text-white">
                    <Icon size={22} className="text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {p.description}
                </p>
              </motion.div>
            );
          })}

          {/* Education & Academic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-panel-glow p-6 rounded-2xl border border-emerald-500/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold mb-3">
                <GraduationCap size={16} />
                <span>EĞİTİM BİLGİSİ</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Üsküdar Üniversitesi</h3>
              <p className="text-emerald-300 text-sm font-semibold mb-2">Bilgisayar Mühendisliği</p>
              <p className="text-gray-400 text-xs font-mono mb-4">09/2020 – 02/2026 | İstanbul</p>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Veri yapıları, algoritma analizi, veritabanı sistemleri ve yazılım mimarileri üzerine lisans eğitimi.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs text-gray-400">
              <span className="font-mono">Tuğrul Bey Anadolu Lisesi</span>
              <span className="text-cyan-400 font-mono">2015 – 2019</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
