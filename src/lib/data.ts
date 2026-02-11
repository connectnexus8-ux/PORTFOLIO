import { type PersonalInfo, type SkillCategory, type Project, type Experience, type Achievement, type Education } from './types';

export const personalInfo: PersonalInfo = {
    name: 'Drashti Khanpara',
    titles: [
        'Senior ui/ux designer',
        'Front-End Developer',
        'UI Designer',
        'UX Designer',
        'Web Developer Associate',
        'Service Designer',
        'User Experience Architecture Senior Analyst',
        'User Experience Engineering Senior Manager'
    ],
    location: 'Ahmedabad, India',
    email: 'drashtikhanpara@example.com',
    phone: '+91 1234567890',
    summary: `I am a senior UI/UX and Front-End professional with a strong balance of design thinking, engineering expertise, and leadership experience, focused on building scalable, user-centered digital products.
I bring hands-on experience across UX architecture, interface design, and front-end development, translating complex business and user requirements into intuitive, high-performance solutions. From research and journey mapping to interaction design and modern front-end implementation, I ensure consistency, accessibility, and usability across platforms.
With a deep understanding of UX engineering principles, component-driven design systems, and modern web technologies, I collaborate closely with product, engineering, and stakeholder teams to bridge the gap between design vision and technical execution.
In leadership and senior analyst roles, I drive experience strategy, mentor teams, define UX standards, and influence product direction through data-informed insights and design excellence. I focus on aligning user needs with business goals while scaling design and development processes efficiently.
I believe exceptional experiences are created at the intersection of strategy, design, and technology, where thoughtful interactions, clean architecture, and strong execution come together to deliver meaningful impact.`,
    socials: {
        linkedin: 'https://www.linkedin.com/in/drashti-khanpara-3a3b83253/',
        github: 'https://github.com/Drashti1605',
    }
};

export const skills: SkillCategory[] = [
  {
    title: 'UX & Research',
    skills: [
      { name: 'UX Research & User Flows' },
      { name: 'UX Research' },
      { name: 'User Flow Design' },
      { name: 'Wireframing' },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Interactive Prototyping' },
      { name: 'UI Design' },
      { name: 'Visual Design Systems' },
      { name: 'Responsive Web Design' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Frontend Development' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'React.js Fundamentals' },
    ],
  },
  {
    title: 'Development',
    skills: [
      { name: 'Component-Based UI Development' },
      { name: 'API Integration' },
      { name: 'REST APIs' },
      { name: 'Performance Optimization' },
    ],
  },
  {
    title: 'Tools & Collaboration',
    skills: [
      { name: 'Version Control' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Problem Solving' },
      { name: 'Debugging' },
      { name: 'Collaboration with Designers' },
    ],
  },
    {
    title: 'Collaboration',
    skills: [
      { name: 'Collaboration with Developers' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard UX/UI',
    description: 'A complete redesign of a SaaS dashboard, focusing on a cleaner user interface and improved user experience for data visualization and management.',
    tags: ['UX Design', 'UI Design', 'Figma', 'SaaS'],
    githubUrl: 'https://github.com/Drashti1605',
    liveUrl: '#',
  },
  {
    id: 'potato-app',
    title: 'Health & Wellness Mobile App',
    description: 'Designed a mobile application to help users track their fitness goals, and log meals. Focused on creating a simple and motivating user experience.',
    tags: ['UI Design', 'Mobile App', 'Figma', 'Prototyping'],
    githubUrl: 'https://github.com/Drashti1605',
    liveUrl: '#',
  },
  {
    id: 'dairy-hrms',
    title: 'HRMS Portal Redesign',
    description: 'Led the UI/UX redesign for an enterprise Human Resource Management System. The goal was to simplify complex workflows for employee management and payroll.',
    tags: ['Design System', 'UI/UX', 'Enterprise', 'Figma'],
    githubUrl: 'https://github.com/Drashti1605',
    liveUrl: '#',
  }
];

export const experience: Experience[] = [
    {
        company: 'AekAds',
        role: 'Sr. UI/UX developer & Front - End developer',
        period: '03/2025 - Present',
        location: 'Gandhinagar',
        description: []
    },
    {
        company: 'Drop Techno Lab',
        role: 'UI/UX Designer & Front-End Developer',
        period: '07/2024 - 03/2025',
        location: 'Ahmedabad, India',
        description: []
    }
];

export const education: Education[] = [
    {
        institution: 'Gujarat Technological University GTU',
        degree: 'Bachelor of Engineering (BE), Information Technology',
        period: '2022 - 2026',
    }
];

export const achievements: Achievement[] = [
  {
    title: 'Awwwards Site of the Day',
    description: 'Recognized for outstanding UI/UX design on a client project, leading to increased user engagement by 40%.',
    year: '2023',
  },
  {
    title: 'Certified UX Professional',
    description: 'Achieved certification from the Nielsen Norman Group, demonstrating expertise in user experience best practices.',
    year: '2022',
  },
  {
    title: 'Design Mentor',
    description: 'Mentor aspiring designers on ADPList, helping them build their portfolios and navigate the design industry.',
    year: 'Ongoing',
  },
];
