import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { sendContactMessage } from '../services/api';
import { Globe, Smartphone, Server, Layers, Zap, ShieldCheck, Send, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProjectWizard: React.FC = () => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState(1);

  // Form State
  const [projectType, setProjectType] = useState<string>('Web Uygulaması');
  const [priority, setPriority] = useState<string>('Yüksek Performans & Hız');
  const [timeline, setTimeline] = useState<string>('Standart (1 Ay)');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [projectNotes, setProjectNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = language === 'EN' ? [
    { id: 'web', label: 'Website / Web Application', icon: Globe, desc: 'Modern, fast, responsive React and Spring Boot / .NET web solutions.' },
    { id: 'mobile', label: 'Mobile Application', icon: Smartphone, desc: 'User-friendly, high-performance mobile application solutions.' },
    { id: 'backend', label: 'Backend / REST API Architecture', icon: Server, desc: 'Scalable Java Spring Boot & C# .NET API services, Redis caching, and databases.' },
    { id: 'fullstack', label: 'Full-Stack System Architecture', icon: Layers, desc: 'End-to-end custom software covering frontend, backend, mobile, and DB.' },
  ] : [
    { id: 'web', label: 'Web Sitesi / Web Uygulaması', icon: Globe, desc: 'Modern, hızlı, responsive React ve Spring Boot / .NET tabanlı web çözümleri.' },
    { id: 'mobile', label: 'Mobil Uygulama', icon: Smartphone, desc: 'Kullanıcı dostu, yüksek performanslı mobil çözümler.' },
    { id: 'backend', label: 'Backend / REST API Mimarisi', icon: Server, desc: 'Ölçeklenebilir Java Spring Boot & C# .NET API servisleri, Redis önbellekleme ve veritabanı.' },
    { id: 'fullstack', label: 'Full-Stack Sistem Mimarisi', icon: Layers, desc: 'Frontend, backend, mobil ve veritabanını kapsayan uçtan uca özel yazılım çözümü.' },
  ];

  const priorities = language === 'EN' ? [
    { id: 'perf', label: 'High Performance & Speed', icon: Zap },
    { id: 'sec', label: 'Enterprise Security & Auth', icon: ShieldCheck },
    { id: 'mobile_first', label: 'Mobile & Responsive Design', icon: Smartphone },
    { id: 'scale', label: 'Scalable Database & Caching', icon: Server },
  ] : [
    { id: 'perf', label: 'Yüksek Performans & Hız', icon: Zap },
    { id: 'sec', label: 'Kurumsal Güvenlik & Yetkilendirme', icon: ShieldCheck },
    { id: 'mobile_first', label: 'Mobil & Responsive Tasarım', icon: Smartphone },
    { id: 'scale', label: 'Ölçeklenebilir Veritabanı & Önbellek', icon: Server },
  ];

  const timelines = language === 'EN' ? [
    { id: 'fast', label: 'Fast Delivery (1-2 Weeks)', desc: 'Urgent requirements and prototype/MVP developments.' },
    { id: 'std', label: 'Standard Project (1 Month)', desc: 'Comprehensive features and tested production delivery.' },
    { id: 'long', label: 'Enterprise / Long-Term Partnership', desc: 'Continuous engineering, maintenance, and tech advisory.' },
  ] : [
    { id: 'fast', label: 'Hızlı Teslimat (1-2 Hafta)', desc: 'Acil ihtiyaçlar ve prototip/MVP geliştirmeleri.' },
    { id: 'std', label: 'Standart Proje (1 Ay)', desc: 'Kapsamlı özellikler ve test edilmiş canlı teslimat.' },
    { id: 'long', label: 'Kurumsal / Uzun Vadeli İş Birliği', desc: 'Sürekli geliştirme, bakım ve danışmanlık ortaklığı.' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const formattedMessage = `
[PROJE TEKLİF TALEBİ / PROJECT REQUEST]
- Proje Türü / Type: ${projectType}
- Öncelikli Hedef / Priority: ${priority}
- Zaman Çizelgesi / Timeline: ${timeline}
- Telefon / Phone: ${clientPhone || 'N/A'}
- Proje Notları / Notes: ${projectNotes || 'N/A'}
    `.trim();

    const res = await sendContactMessage({
      name: clientName,
      email: clientEmail,
      subject: `[PROJE TEKLİFİ] ${projectType} - ${clientName}`,
      message: formattedMessage
    });

    setLoading(false);

    if (res.success) {
      setSubmittedSuccess(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }
    } else {
      setErrorMessage(res.message);
    }
  };

  return (
    <section id="wizard" className="py-24 relative overflow-hidden bg-grid-pattern">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono shadow-lg shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>{t.wizard.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.wizard.title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            {t.wizard.subtitle}
          </p>
        </div>

        {/* Wizard Container Card */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl relative">
          
          {/* Step Progress Bar */}
          {!submittedSuccess && (
            <div className="mb-10">
              <div className="flex items-center justify-between text-xs font-mono mb-3">
                <span className="text-cyan-400 font-bold">{t.wizard.step} {step} / 4</span>
                <span className="text-gray-400">
                  {step === 1 && (language === 'EN' ? 'Project Type Selection' : 'Proje Türü Seçimi')}
                  {step === 2 && (language === 'EN' ? 'Priorities & Goals' : 'Öncelikler & Hedefler')}
                  {step === 3 && (language === 'EN' ? 'Delivery Timeline' : 'Zaman Çizelgesi')}
                  {step === 4 && (language === 'EN' ? 'Contact & Project Details' : 'İletişim & Proje Detayları')}
                </span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500 shadow-md shadow-cyan-500/30"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Wizard Form Content */}
          <AnimatePresence mode="wait">
            {submittedSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20 animate-bounce">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-extrabold text-white">
                  {t.wizard.successTitle}
                </h3>
                <p className="text-gray-300 max-w-lg mx-auto text-sm leading-relaxed font-light">
                  {language === 'EN'
                    ? `Thank you ${clientName}! Your project request has been delivered. I will reach out to you via email or phone within 24 hours.`
                    : `Teşekkürler ${clientName}! Proje detaylarınız tarafıma ulaştı. En geç 24 saat içerisinde sizinle e-posta veya telefon üzerinden iletişime geçeceğim.`}
                </p>
                <button
                  onClick={() => {
                    setSubmittedSuccess(false);
                    setStep(1);
                  }}
                  className="px-8 py-3 rounded-xl glass-panel text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 text-xs font-mono font-bold transition-all"
                >
                  {t.wizard.newProposal}
                </button>
              </motion.div>
            ) : (
              <div>
                
                {/* STEP 1: Project Type */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {language === 'EN' ? '1. What type of software project do you need?' : '1. Nasıl bir yazılım projesi yaptırmak istiyorsunuz?'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {projectTypes.map((pt) => {
                        const Icon = pt.icon;
                        const isSelected = projectType === pt.label;
                        return (
                          <div
                            key={pt.id}
                            onClick={() => setProjectType(pt.label)}
                            className={`p-5 rounded-2xl cursor-pointer border transition-all ${
                              isSelected
                                ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                                : 'bg-white/5 border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.08]'
                            }`}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                isSelected ? 'bg-cyan-500 text-white' : 'bg-white/5 text-cyan-400'
                              }`}>
                                <Icon size={20} />
                              </div>
                              <span className="font-bold text-white text-sm sm:text-base">{pt.label}</span>
                            </div>
                            <p className="text-gray-300 text-xs font-light leading-relaxed">{pt.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Priorities */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {language === 'EN' ? '2. What is the top technical priority for your project?' : '2. Projenizdeki en önemli teknik öncelik nedir?'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {priorities.map((pr) => {
                        const Icon = pr.icon;
                        const isSelected = priority === pr.label;
                        return (
                          <div
                            key={pr.id}
                            onClick={() => setPriority(pr.label)}
                            className={`p-5 rounded-2xl cursor-pointer border transition-all flex items-center gap-4 ${
                              isSelected
                                ? 'bg-emerald-500/15 border-emerald-400 shadow-lg shadow-emerald-500/20 scale-[1.02]'
                                : 'bg-white/5 border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.08]'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              isSelected ? 'bg-emerald-500 text-white' : 'bg-white/5 text-emerald-400'
                            }`}>
                              <Icon size={20} />
                            </div>
                            <span className="font-bold text-white text-sm sm:text-base">{pr.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Timeline */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {language === 'EN' ? '3. What is your estimated delivery timeline expectation?' : '3. Projenin tahmini teslim süresi beklentiniz nedir?'}
                    </h3>
                    <div className="space-y-3">
                      {timelines.map((tm) => {
                        const isSelected = timeline === tm.label;
                        return (
                          <div
                            key={tm.id}
                            onClick={() => setTimeline(tm.label)}
                            className={`p-5 rounded-2xl cursor-pointer border transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/20'
                                : 'bg-white/5 border-white/10 hover:border-cyan-500/30'
                            }`}
                          >
                            <div>
                              <span className="font-bold text-white text-sm sm:text-base block">{tm.label}</span>
                              <span className="text-gray-400 text-xs font-light">{tm.desc}</span>
                            </div>
                            <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-cyan-400 bg-cyan-400 text-black' : 'border-gray-600'
                            }`}>
                              {isSelected && <CheckCircle2 size={16} />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Client Contact Form */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {language === 'EN' ? '4. Please enter your contact information so I can reach you:' : '4. Sizinle iletişime geçebilmemiz için bilgilerinizi giriniz:'}
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1">
                            {language === 'EN' ? 'Full Name *' : 'Adınız Soyadınız *'}
                          </label>
                          <input
                            type="text"
                            required
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            placeholder="Örn: Furkan Masraf"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1">
                            {language === 'EN' ? 'Email Address *' : 'E-posta Adresiniz *'}
                          </label>
                          <input
                            type="email"
                            required
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            placeholder="furkan@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1">
                            {language === 'EN' ? 'Phone / WhatsApp (Optional)' : 'Telefon / WhatsApp (İsteğe Bağlı)'}
                          </label>
                          <input
                            type="tel"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            placeholder="+90 5XX XXX XX XX"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1">
                            {language === 'EN' ? 'Selected Scope Summary' : 'Seçilen Proje Özeti'}
                          </label>
                          <div className="px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                            {projectType} • {priority}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-gray-300 mb-1">
                          {language === 'EN' ? 'Project Notes / Special Requirements' : 'Proje Notlarınız veya Özel İstekleriniz'}
                        </label>
                        <textarea
                          rows={3}
                          value={projectNotes}
                          onChange={(e) => setProjectNotes(e.target.value)}
                          placeholder={language === 'EN' ? "Write a short summary of your project..." : "Projeniz hakkında kısa bir açıklama yazabilirsiniz..."}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm resize-none"
                        ></textarea>
                      </div>

                      {errorMessage && (
                        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                          {errorMessage}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                      >
                        {loading ? t.wizard.submitting : (
                          <>
                            <Send size={18} />
                            <span>{t.wizard.submit}</span>
                          </>
                        )}
                      </button>

                    </form>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(prev => prev - 1)}
                      className="px-5 py-2.5 rounded-xl glass-panel text-gray-300 hover:text-white border border-white/10 text-xs font-mono flex items-center gap-2 transition-all"
                    >
                      <ArrowLeft size={14} />
                      <span>{t.wizard.prev}</span>
                    </button>
                  ) : <div></div>}

                  {step < 4 && (
                    <button
                      type="button"
                      onClick={() => setStep(prev => prev + 1)}
                      className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-xs font-mono flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
                    >
                      <span>{t.wizard.next}</span>
                      <ArrowRight size={14} />
                    </button>
                  )}
                </div>

              </div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
