import { type PersonalInfo, type SkillCategory, type Project, type Experience, type Education } from './types';

export const personalInfo: PersonalInfo = {
    name: 'Khanpara Drashti',
    title: 'Senior UI/UX Designer & Front-End Developer',
    location: 'Ahmedabad, India',
    email: 'khanparadrashti1605@gmail.com',
    phone: '+91 9033300167',
    summary: 'Senior UI/UX Designer & Front-End Developer with over 2 years of experience bridging the gap between complex design systems and scalable front-end architecture. Expert in Figma and React.js/TypeScript, with a proven track record of delivering user-centered interfaces that improve engagement and performance. Specialized in transforming high-fidelity prototypes into production-ready code while maintaining strict brand integrity and accessibility standards.',
    socials: {
        linkedin: 'https://www.linkedin.com/in/drashti-khanpara-3a3b83253/',
        github: 'https://github.com/Drashti1605',
    }
};

export const skills: SkillCategory[] = [
  {
    title: 'Design & UX',
    skills: [
      { name: 'UX Research' },
      { name: 'User Flow Design' },
      { name: 'Wireframing' },
      { name: 'Interactive Prototyping' },
      { name: 'UI Design' },
      { name: 'Visual Design Systems' },
    ],
  },
  {
    title: 'Front-End Development',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript (ES6+)' },
      { name: 'TypeScript' },
      { name: 'React.js' },
      { name: 'JSX' },
      { name: 'Responsive Web Design' },
      { name: 'Performance Optimization' },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Figma' },
      { name: 'Canva' },
      { name: 'Adobe Creative Suite' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'npm' },
      { name: 'REST APIs' },
      { name: 'Debugging' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'social-media-app',
    title: 'Social Media App & Webapp',
    description: 'A unified professional networking and freelance ecosystem that allows users to seamlessly toggle between hiring talent and finding work. The platform features a dual-mode interface, a high-value freelance marketplace, and a "swipe-to-match" opportunity finder.',
    tags: ['UI/UX', 'React.js', 'Firebase', 'Design System'],
    githubUrl: 'https://github.com/Drashti1605',
  },
  {
    id: 'dairy-hrms',
    title: 'Dairy HRMS',
    description: 'A comprehensive digital HR Management System to modernize the employee lifecycle for a large-scale cooperative. This React-based application transforms legacy administrative tasks into a responsive web experience, featuring automated payroll and real-time attendance tracking.',
    tags: ['UI/UX', 'React.js', 'HRMS', 'Dashboard'],
    githubUrl: 'https://github.com/Drashti1605',
  },
  {
    id: 'saas-dashboard',
    title: 'Screen as a Service App Dashboard',
    description: 'A clean and intuitive services management mobile app designed with a modern front-end dashboard. Includes user authentication, device monitoring, and detailed log reports. The UI focuses on simplicity, clarity, and quick access to essential operations.',
    tags: ['Front-End', 'Dashboard', 'UI Design', 'React.js'],
    githubUrl: 'https://github.com/Drashti1605',
  },
  {
    id: 'potato-app',
    title: 'Potato Farmer App Design',
    description: 'Designed a farmer-centric mobile app focused on potato cultivation. Created an intuitive UI/UX to deliver real-time crop guidance, weather updates, market prices, and advisory services, with an emphasis on simple navigation and local language support.',
    tags: ['UI/UX Design', 'Mobile App', 'Figma'],
    githubUrl: 'https://github.com/Drashti1605',
  },
  {
    id: 'training-dashboard',
    title: 'Training Centre Dashboard',
    description: 'Designed a user-centric, role-based dashboard for a training management system. Created intuitive UI/UX for Admin, Trainer, and Student roles with clear navigation, data visualization, and task flows to improve course and performance management.',
    tags: ['UI/UX Design', 'Dashboard', 'Figma', 'Design System'],
    githubUrl: 'https://github.com/Drashti1605',
  }
];

export const experience: Experience[] = [
    {
        company: 'AekAds',
        role: 'Sr. UI/UX developer & Front-End developer',
        period: 'March 2023 - Present',
        location: 'Gandhinagar, India',
        description: [
            'Lead the end-to-end design and development of responsive, high-traffic web interfaces using React.js and TypeScript.',
            'Architected and maintained a comprehensive Design System and reusable component library, reducing handoff time by 90%.',
            'Optimized front-end performance and accessibility (WCAG), improving Core Web Vitals.',
            'Collaborated with stakeholders to transform business requirements into intuitive wireframes and high-fidelity mockups.',
        ]
    },
    {
        company: 'Drop Techno Lab',
        role: 'UI/UX Designer & Front-End Developer',
        period: 'July 2021 - February 2023',
        location: 'Ahmedabad, India',
        description: [
            'Transitioned from design to development, building interactive web components using JavaScript, JSX, and React.js.',
            'Designed intuitive user interfaces using Figma and Canva, focusing on usability and modern aesthetic trends.',
            'Optimized front-end performance by implementing efficient CSS and modern JavaScript practices.',
            'Utilized npm and version control tools to manage dependencies and streamline development workflow.',
        ]
    }
];

export const education: Education[] = [
    {
        institution: 'Gujarat Technological University',
        degree: 'Bachelor of Engineering, Information Technology',
        period: '2022 - 2026',
    },
    {
        institution: 'Madhav International School',
        degree: 'HSC (12th Grade)',
        period: 'March 2022',
    },
    {
        institution: 'Madhav Vidhya Sankul',
        degree: 'SSC (10th Grade)',
        period: 'March 2020',
    },
]
