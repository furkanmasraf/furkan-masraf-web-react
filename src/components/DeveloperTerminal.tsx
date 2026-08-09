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

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = '';

    if (cmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    } else if (cmd === 'help') {
      outputNode = (
        <div className="space-y-1 text-xs font-mono text-gray-300">
          <p className="text-cyan-400 font-bold">Kullanılabilir Komutlar:</p>
          <p><span className="text-emerald-400 w-32 inline-block">help</span> : Komut kılavuzunu gösterir</p>
          <p><span className="text-emerald-400 w-32 inline-block">profile</span> : Profil özeti ve iletişim bilgilerini döndürür</p>
          <p><span className="text-emerald-400 w-32 inline-block">experience</span> : Doğuş Teknoloji, Fibabanka ve Bilyoner stajlarını listeler</p>
          <p><span className="text-emerald-400 w-32 inline-block">projects</span> : Geliştirilen backend projelerini ve teknolojilerini gösterir</p>
          <p><span className="text-emerald-400 w-32 inline-block">skills</span> : Tüm backend, database ve DevOps yeteneklerini sıralar</p>
          <p><span className="text-emerald-400 w-32 inline-block">certs</span> : Sertifikaları ve başarı belgelerini gösterir</p>
          <p><span className="text-emerald-400 w-32 inline-block">curl /api/v1/profile</span> : Raw Spring Boot JSON profil çıktısını simüle eder</p>
          <p><span className="text-emerald-400 w-32 inline-block">clear</span> : Terminal ekranını temizler</p>
        </div>
      );
    } else if (cmd === 'profile' || cmd === 'curl /api/v1/profile') {
      outputNode = (
        <pre className="text-xs font-mono text-emerald-300 bg-black/40 p-3 rounded border border-emerald-500/20 overflow-x-auto">
          {JSON.stringify(profile, null, 2)}
        </pre>
      );
    } else if (cmd === 'experience') {
      outputNode = (
        <div className="space-y-3 text-xs font-mono text-gray-300">
          {experiences.map(e => (
            <div key={e.id} className="p-2 bg-white/5 rounded border border-white/10">
              <span className="text-cyan-400 font-bold">{e.company}</span> - <span className="text-emerald-400">{e.role}</span> ({e.period})
              <ul className="list-disc pl-4 mt-1 space-y-0.5 text-gray-400 text-[11px]">
                {e.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'projects') {
      outputNode = (
        <div className="space-y-2 text-xs font-mono">
          {projects.map(p => (
            <div key={p.id} className="p-2 bg-white/5 rounded border border-white/10">
              <p className="text-cyan-300 font-bold">{p.title} [{p.category}]</p>
              <p className="text-gray-300 text-[11px]">{p.description}</p>
              <p className="text-emerald-400 text-[10px] mt-1">Stack: {p.technologies.join(', ')}</p>
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'skills') {
      outputNode = (
        <div className="grid grid-cols-2 gap-2 text-xs font-mono text-gray-300">
          {skills.map(s => (
            <div key={s.id} className="p-1.5 bg-white/5 rounded border border-white/10">
              <span className="text-cyan-400">{s.name}</span>: <span className="text-emerald-400">%{s.proficiencyPercentage}</span> ({s.category})
            </div>
          ))}
        </div>
      );
    } else if (cmd === 'certs') {
      outputNode = (
        <div className="space-y-1 text-xs font-mono text-gray-300">
          {certificates.map(c => (
            <p key={c.id}>• <span className="text-cyan-400 font-bold">{c.title}</span> - {c.issuer} ({c.issueYear})</p>
          ))}
        </div>
      );
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
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-3 text-xs text-gray-400 flex items-center gap-1.5">
              <TerminalIcon size={13} className="text-cyan-400" />
              furkanmasraf@backend-cli:~ (bash)
            </span>
          </div>

          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Terminal Logs Output */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {logs.map((log, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-cyan-400">
                <span>furkanmasraf@spring-boot:~$</span>
                <span className="text-white">{log.command}</span>
              </div>
              <div className="pl-4 border-l border-cyan-500/20">
                {log.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>

        {/* Terminal Command Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-[#0B0F17] border-t border-white/10 flex items-center gap-2">
          <span className="text-xs text-cyan-400 font-bold">furkanmasraf@spring-boot:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Komut yazın (örn: 'help', 'experience', 'projects')..."
            className="flex-1 bg-transparent border-none outline-none text-white text-xs font-mono placeholder-gray-600"
          />
          <button type="submit" className="text-cyan-400 hover:text-cyan-300 p-1">
            <CornerDownLeft size={14} />
          </button>
        </form>

      </div>
    </div>
  );
};
