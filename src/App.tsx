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
  fetchCertificates,
  FALLBACK_PROFILE,
  FALLBACK_EXPERIENCES,
  FALLBACK_PROJECTS,
  FALLBACK_SKILLS,
  FALLBACK_CERTIFICATES
} from './services/api';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ClientBenefitsSection } from './components/ClientBenefitsSection';
import { ProjectWizard } from './components/ProjectWizard';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { DeveloperTerminal } from './components/DeveloperTerminal';
import { Footer } from './components/Footer';

export function App() {
  const [profile, setProfile] = useState<ProfileInfo>(FALLBACK_PROFILE);
  const [experiences, setExperiences] = useState<Experience[]>(FALLBACK_EXPERIENCES);
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);
  const [skills, setSkills] = useState<Skill[]>(FALLBACK_SKILLS);
  const [certificates, setCertificates] = useState<Certificate[]>(FALLBACK_CERTIFICATES);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      const p = await fetchProfileInfo();
      setProfile(p);

      const exp = await fetchExperiences();
      setExperiences(exp);

      const proj = await fetchProjects();
      setProjects(proj);

      const sk = await fetchSkills();
      setSkills(sk);

      const cert = await fetchCertificates();
      setCertificates(cert);
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

  return (
    <div className="min-h-screen bg-[#080C14] text-gray-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Navigation Header */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection profile={profile} />
        <ClientBenefitsSection />
        <ProjectWizard />
        <AboutSection />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
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

export default App;
