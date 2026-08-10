import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { ProfileInfo } from '../types';
import { Mail, ArrowRight, ShieldCheck, Server, Database, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { sanitizeLinkedinUrl } from '../services/api';

interface HeroSectionProps {
  profile: ProfileInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  const roles = [
    "Backend Developer",
    "Java & Spring Boot Specialist",
    "Microservices & Resilience Engineer",
    "Clean Code & AOP Advocate"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 70);
    } else if (isDeleting && displayText !== '') {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 40);
    } else if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      
      {/* Dynamic Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono w-fit shadow-lg shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Available for Backend Engineering Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
                Merhaba, Ben <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  FURKAN MASRAF
                </span>
              </h1>

              {/* Animated Typing Role Subtitle */}
              <div className="h-10 flex items-center font-mono text-xl sm:text-2xl text-gray-300 font-semibold">
                <span className="text-cyan-400 mr-2">&gt;</span>
                <span>{displayText}</span>
                <span className="w-2.5 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
              </div>
            </div>

            {/* Brief Bio Summary */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Doğuş Teknoloji ve Fibabanka stajlarında edindiğim <strong className="text-white font-medium">Retry şablonları (Resilience4j)</strong>, <strong className="text-white font-medium">Redis Caching</strong>, <strong className="text-white font-medium">Clean Code refactoring</strong> ve <strong className="text-white font-medium">AOP loglama</strong> deneyimleriyle yüksek performanslı Spring Boot RESTful sistemler inşa ediyorum.
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Java 17/21', 'Spring Boot 3', 'Spring Data JPA', 'PostgreSQL', 'Redis', 'Docker', 'C# / .NET'].map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Projelerimi İncele</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-gray-200 hover:text-white border border-white/15 hover:border-cyan-500/40 text-sm font-semibold hover:bg-white/5 transition-all"
              >
                <Mail size={18} className="text-cyan-400" />
                <span>İletişime Geç</span>
              </a>
            </div>

            {/* Direct Social Links & Contact Info */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10 text-gray-400">
              <a 
                href={profile.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors text-xs font-mono"
              >
                <GithubIcon size={18} />
                <span>github.com/furkanmasraf</span>
              </a>
              <a 
                href={sanitizeLinkedinUrl(profile.linkedinUrl)} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors text-xs font-mono"
              >
                <LinkedinIcon size={18} />
                <span>linkedin.com/in/furkan-masraf</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Interactive Code & Architecture Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl glass-panel-glow p-6 border border-cyan-500/30 shadow-2xl overflow-hidden group">
              
              {/* Top Window Header Controls */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-gray-400">FurkanMasrafController.java</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <ShieldCheck size={14} />
                  <span>SPRING BOOT LIVE</span>
                </div>
              </div>

              {/* Code Snippet Display */}
              <div className="font-mono text-xs text-gray-300 space-y-2 leading-relaxed overflow-x-auto">
                <p className="text-purple-400">@RestController</p>
                <p className="text-purple-400">@RequestMapping(<span className="text-emerald-300">"/api/v1/engineer"</span>)</p>
                <p className="text-purple-400">@RequiredArgsConstructor</p>
                <p><span className="text-cyan-400">public class</span> <span className="text-yellow-300">PortfolioApplication</span> &#123;</p>
                
                <div className="pl-4 border-l-2 border-cyan-500/30 space-y-1">
                  <p className="text-gray-500">// Enterprise Microservices Core</p>
                  <p><span className="text-cyan-400">private final</span> <span className="text-blue-300">ResilienceService</span> retryService;</p>
                  <p><span className="text-cyan-400">private final</span> <span className="text-blue-300">RedisCacheManager</span> cacheManager;</p>
                  
                  <p className="pt-2 text-purple-400">@GetMapping(<span className="text-emerald-300">"/architecture"</span>)</p>
                  <p><span className="text-cyan-400">public</span> ResponseEntity&lt;Profile&gt; getSpecs() &#123;</p>
                  <p className="pl-4 text-emerald-400">return ResponseEntity.ok(Profile.builder()</p>
                  <p className="pl-8 text-gray-300">.developer(<span className="text-emerald-300">"Furkan Masraf"</span>)</p>
                  <p className="pl-8 text-gray-300">.stack(<span className="text-emerald-300">"Java 17, Spring Boot 3, PostgreSQL"</span>)</p>
                  <p className="pl-8 text-gray-300">.resilience(<span className="text-emerald-300">"Resilience4j Retry, AOP Logging"</span>)</p>
                  <p className="pl-8 text-gray-300">.status(<span className="text-emerald-300">"READY_TO_BUILD"</span>)</p>
                  <p className="pl-4 text-emerald-400">.build());</p>
                  <p className="pl-2">&#125;</p>
                </div>
                
                <p>&#125;</p>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <Server size={18} className="mx-auto text-cyan-400 mb-1" />
                  <span className="block text-[11px] font-semibold text-gray-200">Spring Boot</span>
                  <span className="block text-[9px] font-mono text-gray-400">REST APIs</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <Database size={18} className="mx-auto text-emerald-400 mb-1" />
                  <span className="block text-[11px] font-semibold text-gray-200">PostgreSQL</span>
                  <span className="block text-[9px] font-mono text-gray-400">Data JPA</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <Layers size={18} className="mx-auto text-purple-400 mb-1" />
                  <span className="block text-[11px] font-semibold text-gray-200">Redis & AOP</span>
                  <span className="block text-[9px] font-mono text-gray-400">Fault Tolerant</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
