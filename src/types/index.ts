export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
  image: string;
  date: string;
  technologies: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details: string;
}

export interface Training {
  id: string;
  title: string;
  institution: string;
  period: string;
  highlights: string[];
  certificateUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}