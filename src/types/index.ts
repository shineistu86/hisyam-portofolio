export interface Profile {
  name: string;
  nickname: string;
  profession: string;
  experience: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
  languages: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'tool' | 'design' | 'soft';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string[];
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface Project {
  title: string;
  category: 'web' | 'data' | 'mobile' | 'desktop';
  tech: string[];
  description: string;
  link?: string;
  image?: string;
}

export interface Statistic {
  label: string;
  value: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
