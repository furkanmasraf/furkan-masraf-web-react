import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import type { ProfileInfo, ContactFormData } from '../types';
import { sendContactMessage, sanitizeLinkedinUrl } from '../services/api';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactSectionProps {
  profile: ProfileInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const res = await sendContactMessage(formData);
    setLoading(false);

    if (res.success) {
      setStatusMessage({ type: 'success', text: res.message });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }
    } else {
      setStatusMessage({ type: 'error', text: res.message });
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Mail size={14} />
            <span>İLETİŞİM VE PROJE GÖRÜŞMELERİ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Benimle <span className="text-gradient-cyan">İletişime Geçin</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Yeni projeler, backend iş fırsatları veya teknik sohbetler için doğrudan mesaj bırakabilirsiniz:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-400">E-POSTA ADRESİ</span>
                  <span className="text-white font-semibold text-sm sm:text-base font-mono">{profile.email}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(profile.email, 'email')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Kopyala"
              >
                {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-gray-400">TELEFON</span>
                  <span className="text-white font-semibold text-sm sm:text-base font-mono">{profile.phone}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(profile.phone, 'phone')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Kopyala"
              >
                {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Social Accounts Quick Links */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <span className="block text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                SOSYAL MEDYA & PLATFORMLAR
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white text-xs font-mono transition-all"
                >
                  <GithubIcon size={18} className="text-cyan-400" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={sanitizeLinkedinUrl(profile.linkedinUrl)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white text-xs font-mono transition-all"
                >
                  <LinkedinIcon size={18} className="text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl border border-cyan-500/30 shadow-2xl space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-gray-300 font-medium">Adınız Soyadınız *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-gray-500 font-light transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-gray-300 font-medium">E-posta Adresiniz *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ahmet@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-gray-500 font-light transition-all"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-gray-300 font-medium">Konu Başlığı *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="İş Fırsatı / Proje İş Birliği Hakkında"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-gray-500 font-light transition-all"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-gray-300 font-medium">Mesajınız *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detaylı mesajınızı buraya yazabilirsiniz..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-gray-500 font-light transition-all resize-none"
                ></textarea>
              </div>

              {/* Status Alert Banner */}
              {statusMessage && (
                <div className={`p-4 rounded-xl flex items-center gap-3 text-xs font-mono ${
                  statusMessage.type === 'success' 
                    ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}>
                  {statusMessage.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Gönderiliyor...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Mesajı Spring REST API'ye İlet</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
