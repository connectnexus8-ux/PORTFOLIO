import { type PersonalInfo, type SkillCategory, type Project, type Experience, type Achievement, type Education, type AboutCard } from './types';
import { Code, Heart, Coffee, Award } from 'lucide-react';

export const personalInfo: PersonalInfo = {
    name: 'Venisha Kalola',
    titles: [
        'Software Developer',
        'MERN Stack Developer',
        'Flutter Developer',
    ],
    location: 'Ahmedabad, India',
    email: 'venishakalola@example.com',
    phone: '+91 1234567890',
    summary: `I'm a passionate Software Developer specializing in MERN stack and Flutter development. Currently pursuing my B.Tech in Computer Engineering at Sardar Patel Institute of Technology with a minor in Management and Finance from S.P. Jain Institute.
My journey in tech has been driven by a desire to create impactful solutions. From developing QR code-based applications that enhance hotel guest experiences to building health-focused mobile apps, I'm constantly seeking new challenges.
When I'm not coding, you can find me mentoring students, participating in hackathons, or volunteering. I believe in using technology to make a positive difference in people's lives.`,
    socials: {
        linkedin: 'https://www.linkedin.com/in/venishakalola',
        github: 'https://github.com/venishakalola',
    }
};

export const aboutCards: AboutCard[] = [
    {
        icon: Code,
        text: 'Solved 600+ questions on LeetCode with a 100+ day streak',
    },
    {
        icon: Heart,
        text: 'Volunteered at NGO Abhyudaya providing education to school children',
    },
    {
        icon: Coffee,
        text: 'Taught 11th-12th grade Science Students at Arihant Carmel Classes',
    },
    {
        icon: Award,
        text: '4x Hackathon Winner including the Bit N Build International Hackathon and 1x Ideathon Winner',
    }
];

export const skills: SkillCategory[] = [
  {
    title: 'Front-End',
    skills: [
      { name: 'React.js' },
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3 / SASS' },
      { name: 'Tailwind CSS' },
      { name: 'Flutter' },
    ],
  },
  {
    title: 'Back-End',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'Mongoose' },
      { name: 'REST APIs' },
      { name: 'Firebase' },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'npm / yarn' },
      { name: 'Figma' },
      { name: 'Postman' },
      { name: 'Agile/Scrum' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, user authentication, and order management using the MERN stack.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    githubUrl: 'https://github.com/venishakalola',
    liveUrl: '#',
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    description: 'A responsive dashboard for content creators to manage posts, view analytics, and engage with their audience across multiple platforms.',
    tags: ['React.js', 'Data Visualization', 'API Integration'],
    githubUrl: 'https://github.com/venishakalola',
    liveUrl: '#',
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management tool that allows teams to create, assign, and track tasks with real-time updates.',
    tags: ['React.js', 'Firebase', 'Real-time', 'UI/UX'],
    githubUrl: 'https://github.com/venishakalola',
    liveUrl: '#',
  }
];

export const experience: Experience[] = [
    {
        company: 'Tech Solutions Inc.',
        role: 'MERN Stack Developer',
        period: '2022 - Present',
        location: 'Remote',
        description: [
            'Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js.',
            'Collaborated with designers to implement responsive user interfaces and new features.',
            'Integrated third-party APIs for payment processing and social media logins.',
            'Optimized application performance, resulting in a 20% reduction in load times.',
        ]
    },
    {
        company: 'Web Innovators',
        role: 'Junior Web Developer',
        period: '2021 - 2022',
        location: 'Ahmedabad, India',
        description: [
            'Assisted in building and testing user-facing features for client websites using React.js.',
            'Converted UI/UX designs from Figma into pixel-perfect, functional code.',
            'Gained hands-on experience with version control (Git) and agile development methodologies.',
        ]
    }
];

export const achievements: Achievement[] = [
  {
    title: 'Hackathon Winner',
    description: 'First place in the National Level "CodeFest 2023" for developing an innovative social networking app.',
    year: '2023',
  },
  {
    title: 'Certified React Developer',
    description: 'Completed the Advanced React Developer certification, mastering complex state management and performance optimization.',
    year: '2022',
  },
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to several open-source projects, including a popular UI component library.',
    year: 'Ongoing',
  },
];

export const education: Education[] = [
    {
        degree: 'Bachelor of Technology in Computer Engineering',
        institution: 'Sardar Patel Institute of Technology',
        period: '2021 - 2025'
    },
    {
        degree: 'Minor in Management and Finance',
        institution: 'S.P. Jain Institute',
        period: '2022 - 2024'
    }
]
