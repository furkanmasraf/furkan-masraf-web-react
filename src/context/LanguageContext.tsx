import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language, Translations } from '../i18n/translations';
import { translations } from '../i18n/translations';
import type { ProfileInfo, Experience, Project, Skill, Certificate, BlogPost } from '../types';
import { 
  PROFILE_TR, PROFILE_EN, 
  EXPERIENCES_TR, EXPERIENCES_EN, 
  PROJECTS_TR, PROJECTS_EN, 
  SKILLS_TR, SKILLS_EN, 
  CERTIFICATES_TR, CERTIFICATES_EN,
  BLOG_POSTS_TR, BLOG_POSTS_EN
} from '../i18n/dataTranslations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  getProfile: (_raw?: ProfileInfo) => ProfileInfo;
  getExperiences: (_raw?: Experience[]) => Experience[];
  getProjects: (_raw?: Project[]) => Project[];
  getBlogPosts: () => BlogPost[];
  getSkills: (_raw?: Skill[]) => Skill[];
  getCertificates: (_raw?: Certificate[]) => Certificate[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'EN' || saved === 'TR') ? saved : 'TR';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const getProfile = (_raw?: ProfileInfo): ProfileInfo => {
    return language === 'EN' ? PROFILE_EN : PROFILE_TR;
  };

  const getExperiences = (_raw?: Experience[]): Experience[] => {
    return language === 'EN' ? EXPERIENCES_EN : EXPERIENCES_TR;
  };

  const getProjects = (_raw?: Project[]): Project[] => {
    return language === 'EN' ? PROJECTS_EN : PROJECTS_TR;
  };

  const getBlogPosts = (): BlogPost[] => {
    return language === 'EN' ? BLOG_POSTS_EN : BLOG_POSTS_TR;
  };

  const getSkills = (_raw?: Skill[]): Skill[] => {
    return language === 'EN' ? SKILLS_EN : SKILLS_TR;
  };

  const getCertificates = (_raw?: Certificate[]): Certificate[] => {
    return language === 'EN' ? CERTIFICATES_EN : CERTIFICATES_TR;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t: translations[language],
      getProfile,
      getExperiences,
      getProjects,
      getBlogPosts,
      getSkills,
      getCertificates
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
