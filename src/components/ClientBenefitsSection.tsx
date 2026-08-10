import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Zap, Clock, CheckCircle2, Award } from 'lucide-react';

export const ClientBenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Web & Mobil Bütünleşik Çözümler",
      description: "React ile hazırlanan hızlı web sistemleri ve iOS & Android ekosistemine uygun yüksek performanslı mobil uygulamalar geliştiriyorum.",
      gradient: "from-cyan-500 to-blue-500",
      badge: "WEB & MOBİL"
    },
    {
      icon: Zap,
      title: "%99.9 Erişilebilirlik & Yüksek Hız",
      description: "Kurumsal projelerde uyguladığım Resilience4j Retry mekanizmaları ve Redis Caching ile kesintisiz, hızlı servisler inşa ediyorum.",
      gradient: "from-emerald-500 to-teal-500",
      badge: "PERFORMANS"
    },
    {
      icon: Server,
      title: "Güvenli Spring Boot Backend & DB",
      description: "JWT tabanlı rol yetkilendirmeli RESTful API'ler ve normalize edilmiş PostgreSQL / SQL Server veritabanı mimarileri kurguluyorum.",
      gradient: "from-purple-500 to-indigo-500",
      badge: "GÜVENLİ API"
    },
    {
      icon: Clock,
      title: "Zamanında Teslim & Canlı Takip",
      description: "Agile/Scrum metodolojisiyle çalışarak projenizi sprint sprint ilerletiyor ve geliştirme sürecinde düzenli canlı demo sunuyorum.",
      gradient: "from-amber-500 to-orange-500",
      badge: "AGILE / MÜŞTERİ ODAKLI"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Award size={14} />
            <span>MÜŞTERİ AVANTAJLARI & KALİTE GARANTİSİ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Neden <span className="text-gradient-cyan">Benimle Çalışmalısınız?</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Yazılım projenizin fikir aşamasından canlı yayına geçişine kadar sunduğum mühendislik değerleri:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.07] transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${b.gradient} p-0.5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full bg-[#0F1623] rounded-[10px] flex items-center justify-center text-cyan-400">
                        <Icon size={22} />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {b.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {b.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed font-light">
                    {b.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-6 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 size={14} />
                  <span>Garanti Edilen Standart</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
