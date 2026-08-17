import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Layers, RefreshCw, Box, GraduationCap, Globe, Server, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const principlesTR = [
    {
      icon: RefreshCw,
      title: "Retry & Hata Toleransı",
      description: "Servisler arası entegrasyonlarda uzak sunucu kesintilerine karşı Resilience4j Retry mekanizmaları kurgulayarak dayanıklı servis mimarileri inşa etmeyi hedefliyorum.",
      gradient: "from-cyan-500 to-blue-500",
      badge: "FAULT TOLERANT"
    },
    {
      icon: Shield,
      title: "Type Safety & Global Exception Shield",
      description: "Tip güvenli Enum sınıfları ve @ControllerAdvice ile runtime/validasyon hatalarını merkezi olarak yakalayıp tutarlı JSON cevap formatları döndürüyorum.",
      gradient: "from-emerald-500 to-teal-500",
      badge: "TYPE SAFETY"
    },
    {
      icon: Layers,
      title: "Aspect-Oriented Programming (AOP)",
      description: "İş mantığı katmanını (Business Logic) kirletmeden çalışan modüler loglama, güvenlik ve performans takip katmanları tasarlıyorum.",
      gradient: "from-purple-500 to-indigo-500",
      badge: "MODÜLER AOP"
    },
    {
      icon: Zap,
      title: "Redis Caching & Performans",
      description: "Sık sorgulanan endpoint'lerde Redis önbellekleme (Caching) kullanarak veritabanı yükünü minimize ediyor ve hızlı yanıt süreleri elde ediyorum.",
      gradient: "from-amber-500 to-orange-500",
      badge: "PERFORMANS"
    },
    {
      icon: Box,
      title: "Docker & Containerization",
      description: "PostgreSQL, Redis ve bağımlılıkları Docker & Docker Compose ile izole ederek ortam bağımsız çalışan geliştirme ve test ortamları hazırlıyorum.",
      gradient: "from-blue-500 to-cyan-500",
      badge: "CONTAINER"
    },
    {
      icon: Server,
      title: "Güvenli Spring Boot Backend & DB",
      description: "JWT tabanlı rol yetkilendirmeli RESTful API'ler ve normalize edilmiş PostgreSQL / SQL Server veritabanı mimarileri kurguluyorum.",
      gradient: "from-teal-500 to-emerald-500",
      badge: "GÜVENLİ API"
    },
    {
      icon: Globe,
      title: "Modern Frontend & API Entegrasyonu",
      description: "Spring Boot ve .NET backend servislerimi modern React web ve mobil arayüzleriyle entegre ederek uçtan uca çalışabilen projeler geliştiriyorum.",
      gradient: "from-indigo-500 to-cyan-500",
      badge: "FULL-STACK"
    },
    {
      icon: Clock,
      title: "Temiz Kod & Takım Çalışması (Agile)",
      description: "Agile takım süreçlerine hızlı adapte olan, birim testleri (Unit Tests) ve sürdürülebilir temiz kod (Clean Code) prensiplerini benimseyen bir yaklaşım sergiliyorum.",
      gradient: "from-rose-500 to-amber-500",
      badge: "CLEAN CODE & AGILE"
    }
  ];

  const principlesEN = [
    {
      icon: RefreshCw,
      title: "Retry & Fault Tolerance",
      description: "Applying Resilience4j Retry patterns against remote API downtime to build resilient, reliable backend microservices.",
      gradient: "from-cyan-500 to-blue-500",
      badge: "FAULT TOLERANT"
    },
    {
      icon: Shield,
      title: "Type Safety & Exception Shield",
      description: "Enforcing type-safe Enums and @ControllerAdvice to intercept runtime validation errors and output standard JSON response models.",
      gradient: "from-emerald-500 to-teal-500",
      badge: "TYPE SAFETY"
    },
    {
      icon: Layers,
      title: "Aspect-Oriented Programming (AOP)",
      description: "Architecting non-intrusive logging, security, and execution monitoring aspects that operate outside core business domain logic.",
      gradient: "from-purple-500 to-indigo-500",
      badge: "MODULAR AOP"
    },
    {
      icon: Zap,
      title: "Redis Caching & Latency Opt.",
      description: "Minimizing database bottleneck overhead on frequently accessed endpoints via Redis in-memory caching to achieve low-latency response times.",
      gradient: "from-amber-500 to-orange-500",
      badge: "PERFORMANCE"
    },
    {
      icon: Box,
      title: "Docker Containerization",
      description: "Containerizing PostgreSQL, Redis, and backend microservices via Docker Compose for seamless, isolated environment setups.",
      gradient: "from-blue-500 to-cyan-500",
      badge: "CONTAINER"
    },
    {
      icon: Server,
      title: "Secure Spring Boot & Relational DB",
      description: "Designing JWT-secured RESTful APIs with RBAC and normalized relational schemas across PostgreSQL & MS SQL Server.",
      gradient: "from-teal-500 to-emerald-500",
      badge: "SECURE API"
    },
    {
      icon: Globe,
      title: "Modern Frontend & API Integration",
      description: "Integrating Spring Boot and .NET backend services with modern React web and mobile interfaces to build functional end-to-end applications.",
      gradient: "from-indigo-500 to-cyan-500",
      badge: "FULL-STACK"
    },
    {
      icon: Clock,
      title: "Clean Code & Agile Teamwork",
      description: "Adapting quickly to Agile team workflows while applying clean code principles and unit testing to write maintainable software.",
      gradient: "from-rose-500 to-amber-500",
      badge: "CLEAN CODE & AGILE"
    }
  ];

  const principles = language === 'EN' ? principlesEN : principlesTR;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <GraduationCap size={14} />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Top Featured Education Highlight Card */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-emerald-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                <GraduationCap size={18} />
                <span>{t.about.academicBadge}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">{t.about.university}</h3>
              <p className="text-emerald-300 font-semibold text-base">{t.about.degree}</p>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                {t.about.degreeDesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 shrink-0 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
                09/2020 – 02/2026 | {language === 'EN' ? 'Istanbul, Turkey' : 'İstanbul'}
              </span>
              <span className="text-xs text-gray-400 font-mono">
                {t.about.highSchool}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Engineering Principles & Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.07] transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.gradient} p-0.5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full bg-[#0F1623] rounded-[9px] flex items-center justify-center text-cyan-400">
                        <Icon size={20} />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
