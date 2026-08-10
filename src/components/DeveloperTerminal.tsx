import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import type { ProfileInfo, Experience, Project, Skill, Certificate } from '../types';

interface DeveloperTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  certificates: Certificate[];
}

interface CommandLog {
  command: string;
  output: string | React.ReactNode;
}

export const DeveloperTerminal: React.FC<DeveloperTerminalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  projects,
  skills,
  certificates
}) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: 'system.init',
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-cyan-400 font-bold">★ Furkan Masraf Developer CLI v1.0.0 [Spring Boot & React Interop] ★</p>
          <p className="text-gray-400">Yazılımcılar için interaktif terminal arayüzü. Komut listesi için <span className="text-emerald-400 font-bold">'help'</span> yazın.</p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      onClose();
      const el = document.getElementById(sectionId);
      if (el) {
        const navbarOffset = 75;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 500);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = '';

    // Extract section target if command is like 'goto about' or 'cd projects'
    let targetSection = '';
    if (cmd.startsWith('goto ') || cmd.startsWith('cd ') || cmd.startsWith('navigate ')) {
      targetSection = cmd.replace(/^(goto|cd|navigate)\s+/, '').trim();
    }

    // Direct section navigation aliases
    const sectionMap: Record<string, string> = {
      'hero': 'hero',
      'home': 'hero',
      'anasayfa': 'hero',
      'ana sayfa': 'hero',
      'about': 'about',
      'hakkımda': 'about',
      'hakkimda': 'about',
      'experience': 'experience',
      'exp': 'experience',
      'deneyim': 'experience',
      'staj': 'experience',
      'projects': 'projects',
      'projeler': 'projects',
      'proje': 'projects',
      'skills': 'skills',
      'yetenekler': 'skills',
      'certs': 'certificates',
      'certificates': 'certificates',
      'sertifikalar': 'certificates',
      'contact': 'contact',
      'iletişim': 'contact',
      'iletisim': 'contact',
      'wizard': 'wizard',
      'isbirligi': 'wizard',
      'teklif': 'wizard'
    };

    const resolvedSection = sectionMap[targetSection] || sectionMap[cmd];

    if (cmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    } else if (resolvedSection) {
      outputNode = (
        <div className="text-xs font-mono text-cyan-300 space-y-1">
          <p className="font-bold">▶ #{resolvedSection} bölümüne yönlendiriliyorsunuz...</p>
        </div>
      );
      scrollToSection(resolvedSection);
    } else if (cmd === 'help') {
      outputNode = (
        <div className="space-y-1.5 text-xs font-mono text-gray-300">
          <p className="text-cyan-400 font-bold">Kullanılabilir Komutlar & Bölüm Yönlendirmeleri:</p>
          <p><span className="text-emerald-400 w-36 inline-block">goto &lt;bölüm&gt;</span> : Sayfa bölümüne kaydırır (örn: <span className="text-cyan-300">goto about</span>, <span className="text-cyan-300">goto projects</span>)</p>
          <p><span className="text-emerald-400 w-36 inline-block">about / hakkımda</span> : Hakkımda bölümüne gider</p>
          <p><span className="text-emerald-400 w-36 inline-block">experience / staj</span> : Kurumsal tecrübeler bölümüne gider</p>
          <p><span className="text-emerald-400 w-36 inline-block">projects / projeler</span> : Projeler bölümüne gider</p>
          <p><span className="text-emerald-400 w-36 inline-block">skills / yetenekler</span> : Yetenekler bölümüne gider</p>
          <p><span className="text-emerald-400 w-36 inline-block">certs / sertifikalar</span> : Sertifikalar bölümüne gider</p>
          <p><span className="text-emerald-400 w-36 inline-block">wizard / teklif</span> : İş birliği sihirbazına gider</p>
          <p><span className="text-emerald-400 w-36 inline-block">contact / iletişim</span> : İletişim bölümüne gider</p>
          <p><span className="text-emerald-400 w-36 inline-block">profile</span> : Profil özeti JSON verisini döndürür</p>
          <p><span className="text-emerald-400 w-36 inline-block">curl /api/v1/profile</span> : Raw Spring Boot JSON profil çıktısını simüle eder</p>
          <p><span className="text-emerald-400 w-36 inline-block">clear</span> : Terminal ekranını temizler</p>
        </div>
      );
    } else if (cmd === 'profile' || cmd === 'curl /api/v1/profile') {
      outputNode = (
        <pre className="text-xs font-mono text-emerald-300 bg-black/40 p-3 rounded border border-emerald-500/20 overflow-x-auto">
          {JSON.stringify(profile, null, 2)}
        </pre>
      );
    } else if (cmd === 'experience' || cmd === 'exp' || cmd === 'staj' || cmd === 'deneyim') {
      outputNode = (
        <div className="space-y-3 text-xs font-mono text-gray-300">
          <p className="text-cyan-400 font-bold">▶ #experience (Kurumsal Tecrübeler) bölümüne yönlendiriliyorsunuz...</p>
          {experiences.map(e => (
            <div key={e.id} className="p-2 bg-white/5 rounded border border-white/10">
              <span className="text-cyan-400 font-bold">{e.company}</span> - <span className="text-emerald-400">{e.role}</span> ({e.period})
            </div>
          ))}
        </div>
      );
      scrollToSection('experience');
    } else if (cmd === 'projects' || cmd === 'projeler' || cmd === 'proje') {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          <p className="text-cyan-400 font-bold">▶ #projects (Projeler) bölümüne yönlendiriliyorsunuz...</p>
          {projects.map(p => (
            <div key={p.id} className="p-2 bg-white/5 rounded border border-white/10">
              <p className="text-cyan-300 font-bold">{p.title} [{p.category}]</p>
            </div>
          ))}
        </div>
      );
      scrollToSection('projects');
    } else if (cmd === 'skills' || cmd === 'yetenekler') {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          <p className="text-cyan-400 font-bold">▶ #skills (Yetenekler) bölümüne yönlendiriliyorsunuz...</p>
          <div className="grid grid-cols-2 gap-2 text-gray-300">
            {skills.map(s => (
              <div key={s.id} className="p-1.5 bg-white/5 rounded border border-white/10">
                <span className="text-cyan-400">{s.name}</span>: <span className="text-emerald-400">%{s.proficiencyPercentage}</span>
              </div>
            ))}
          </div>
        </div>
      );
      scrollToSection('skills');
    } else if (cmd === 'certs' || cmd === 'certificates' || cmd === 'sertifikalar') {
      outputNode = (
        <div className="space-y-1 text-xs font-mono text-gray-300">
          <p className="text-cyan-400 font-bold mb-1">▶ #certificates (Sertifikalar) bölümüne yönlendiriliyorsunuz...</p>
          {certificates.map(c => (
            <p key={c.id}>• <span className="text-cyan-400 font-bold">{c.title}</span> - {c.issuer}</p>
          ))}
        </div>
      );
      scrollToSection('certificates');
    } else if (cmd === 'about' || cmd === 'hakkımda' || cmd === 'hakkimda') {
      outputNode = (
        <p className="text-cyan-400 text-xs font-mono font-bold">▶ #about (Hakkımda) bölümüne yönlendiriliyorsunuz...</p>
      );
      scrollToSection('about');
    } else if (cmd === 'contact' || cmd === 'iletişim' || cmd === 'iletisim') {
      outputNode = (
        <p className="text-cyan-400 text-xs font-mono font-bold">▶ #contact (İletişim) bölümüne yönlendiriliyorsunuz...</p>
      );
      scrollToSection('contact');
    } else if (cmd === 'wizard' || cmd === 'teklif' || cmd === 'isbirligi') {
      outputNode = (
        <p className="text-cyan-400 text-xs font-mono font-bold">▶ #wizard (İş Birliği Sihirbazı) bölümüne yönlendiriliyorsunuz...</p>
      );
      scrollToSection('wizard');
    } else if (cmd === 'hero' || cmd === 'home' || cmd === 'anasayfa') {
      outputNode = (
        <p className="text-cyan-400 text-xs font-mono font-bold">▶ #hero (Ana Sayfa) bölümüne yönlendiriliyorsunuz...</p>
      );
      scrollToSection('hero');
    } else {
      outputNode = (
        <span className="text-red-400 text-xs font-mono">
          Komut bulunamadı: '{cmd}'. Kullanılabilir komutları görmek için 'help' yazın.
        </span>
      );
    }

    setLogs(prev => [...prev, { command: inputVal, output: outputNode }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl h-[550px] bg-[#070A10] rounded-2xl border border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden font-mono">
        
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[#0F1623] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-600 transition-colors" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" onClick={onClose}></div>
            <span className="ml-2 text-xs text-gray-400 flex items-center gap-1.5">
              <TerminalIcon size={14} className="text-cyan-400" />
              <span>FurkanMasraf CLI -- bash -- 80x24</span>
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Terminal Output Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {logs.map((log, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-400 font-bold">furkan@masraf-dev</span>
                <span className="text-gray-500">:~#</span>
                <span className="text-white font-semibold">{log.command}</span>
              </div>
              <div className="pl-4">
                {log.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <form onSubmit={handleCommand} className="p-3 bg-[#0C121D] border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 text-xs font-bold shrink-0">furkan@masraf-dev:~#</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Komut yazın (örn: help, goto about, projects, skills, contact)..."
            className="flex-1 bg-transparent border-none outline-none text-xs text-cyan-300 font-mono placeholder:text-gray-600"
          />
          <button type="submit" className="text-gray-500 hover:text-cyan-400 transition-colors p-1">
            <CornerDownLeft size={14} />
          </button>
        </form>

      </div>
    </div>
  );
};
