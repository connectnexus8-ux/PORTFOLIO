import type React from 'react';

export type PersonalInfo = {
    name: string;
    titles: string[];
    location: string;
    email: string;
    phone: string;
    summary: string;
    socials: {
        linkedin: string;
        github: string;
    };
};

export type Skill = {
  name: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location:string;
  description: string[];
  skills: string[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
};

export type Achievement = {
  title: string;
  description: string;
  year: string;
};

export type Project = {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
}
