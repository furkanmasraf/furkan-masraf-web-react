import { useState, useEffect } from 'react';
import type { 
  ProfileInfo, 
  Experience, 
  Project, 
  Skill, 
  Certificate 
} from './types';
import { 
  fetchProfileInfo, 
  fetchExperiences, 
  fetchProjects, 
  fetchSkills, 
  fetchCertificates
} from './services/api';

import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { DeveloperTerminal } from './components/DeveloperTerminal';
import { Footer } from './components/Footer';

import { BlogSection } from './components/BlogSection';

function MainLayout() {
  const { getProfile, getExperiences, getProjects, getBlogPosts, getSkills, getCertificates } = useLanguage();

  const [rawProfile, setRawProfile] = useState<ProfileInfo | undefined>(undefined);
  const [rawExperiences, setRawExperiences] = useState<Experience[] | undefined>(undefined);
  const [rawProjects, setRawProjects] = useState<Project[] | undefined>(undefined);
  const [rawSkills, setRawSkills] = useState<Skill[] | undefined>(undefined);
  const [rawCertificates, setRawCertificates] = useState<Certificate[] | undefined>(undefined);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const p = await fetchProfileInfo();
        setRawProfile(p);

        const exp = await fetchExperiences();
        setRawExperiences(exp);

        const proj = await fetchProjects();
        setRawProjects(proj);

        const sk = await fetchSkills();
        setRawSkills(sk);

        const cert = await fetchCertificates();
        setRawCertificates(cert);
      } catch (err) {
        console.warn('API fetch fallback:', err);
      }
    }

    loadData();
  }, []);

  // Keyboard shortcut (Ctrl+K or Cmd+K) to open Developer CLI Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const profile = getProfile(rawProfile);
  const experiences = getExperiences(rawExperiences);
  const projects = getProjects(rawProjects);
  const blogPosts = getBlogPosts();
  const skills = getSkills(rawSkills);
  const certificates = getCertificates(rawCertificates);

  return (
    <div className="min-h-screen bg-[#080C14] text-gray-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Navigation Header */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection profile={profile} />
        <AboutSection />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <BlogSection posts={blogPosts} />
        <SkillsSection skills={skills} />
        <CertificatesSection certificates={certificates} />
        <ContactSection profile={profile} />
      </main>

      {/* Floating Speed Dial Contact Widget (WhatsApp, Email, Phone, LinkedIn) */}
      <FloatingContactWidget />

      {/* Footer */}
      <Footer profile={profile} />

      {/* Developer CLI Terminal Modal */}
      <DeveloperTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        profile={profile}
        experiences={experiences}
        projects={projects}
        skills={skills}
        certificates={certificates}
      />

    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}

export default App;
