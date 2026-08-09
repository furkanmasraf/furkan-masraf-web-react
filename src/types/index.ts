export interface ProfileInfo {
  id?: number;
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  bio: string;
  university: string;
  department: string;
  graduationYear: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
  displayOrder: number;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  backendGithubUrl?: string;
  frontendGithubUrl?: string;
  featured: boolean;
  keyFeatures: string[];
  technologies: string[];
  displayOrder: number;
}

export interface Skill {
  id: number;
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'DevOps' | 'Testing' | 'Mobile';
  proficiencyPercentage: number;
  iconName: string;
  highlightText: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueYear: string;
  description: string;
  badgeCategory: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}
