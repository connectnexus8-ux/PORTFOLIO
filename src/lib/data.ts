import { type PersonalInfo, type SkillCategory, type Project, type Experience, type Achievement, type Education, type AboutCard } from './types';
import { Code, Heart, Coffee, Award } from 'lucide-react';

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
    summary: `I'm a passionate and creative designer with a knack for crafting intuitive and beautiful user experiences. I thrive on solving complex problems and turning ideas into elegant, user-friendly designs.
My journey in design has been a continuous process of learning and evolving, always staying on top of the latest trends and technologies to create modern and effective solutions.
I believe that great design is not just about aesthetics, but about creating a seamless and enjoyable interaction between the user and the product.`,
    socials: {
        linkedin: 'https://www.linkedin.com/in/drashtikhanpara',
        github: 'https://github.com/drashtikhanpara',
    }
};

export const aboutCards: AboutCard[] = [
    {
        icon: Award,
        text: 'Winner of multiple design awards for innovative UI/UX solutions.',
    },
    {
        icon: Heart,
        text: 'Passionate about accessible design and creating inclusive digital experiences.',
    },
    {
        icon: Coffee,
        text: 'Always sketching and exploring new design concepts in my spare time.',
    },
    {
        icon: Code,
        text: 'Proficient in turning complex user requirements into simple, elegant designs.',
    }
];

export const skills: SkillCategory[] = [
  {
    title: 'Design & Prototyping',
    skills: [
      { name: 'Figma' },
      { name: 'Adobe XD' },
      { name: 'Sketch' },
      { name: 'Principle' },
      { name: 'User Research' },
      { name: 'Wireframing' },
    ],
  },
  {
    title: 'Front-End',
    skills: [
      { name: 'HTML5 & CSS3' },
      { name: 'JavaScript (ES6+)' },
      { name: 'React.js' },
      { name: 'Tailwind CSS' },
      { name: 'SASS' },
      { name: 'Storybook' },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Jira' },
      { name: 'Agile/Scrum' },
      { name: 'Design Systems' },
      { name: 'A/B Testing' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard UX/UI',
    description: 'A complete redesign of a SaaS dashboard, focusing on a cleaner user interface and improved user experience for data visualization and management.',
    tags: ['UX Design', 'UI Design', 'Figma', 'SaaS'],
    githubUrl: 'https://github.com/drashtikhanpara',
    liveUrl: '#',
  },
  {
    id: 'potato-app',
    title: 'Health & Wellness Mobile App',
    description: 'Designed a mobile application to help users track their fitness goals, and log meals. Focused on creating a simple and motivating user experience.',
    tags: ['UI Design', 'Mobile App', 'Figma', 'Prototyping'],
    githubUrl: 'https://github.com/drashtikhanpara',
    liveUrl: '#',
  },
  {
    id: 'dairy-hrms',
    title: 'HRMS Portal Redesign',
    description: 'Led the UI/UX redesign for an enterprise Human Resource Management System. The goal was to simplify complex workflows for employee management and payroll.',
    tags: ['Design System', 'UI/UX', 'Enterprise', 'Figma'],
    githubUrl: 'https://github.com/drashtikhanpara',
    liveUrl: '#',
  }
];

export const experience: Experience[] = [
    {
        company: 'AekAds',
        role: 'Sr. UI/UX developer & Front - End developer',
        period: '03/2025 - Present',
        location: 'Gandhinagar',
        description: [
            'Lead the end-to-end design and development of responsive, high-traffic web interfaces using React.js and TypeScript, ensuring 100% alignment between Figma prototypes and production code.',
            'Architected and maintained a comprehensive Design System and reusable component library, reducing design-to-development handoff time by 90%.',
            'Optimized front-end performance and accessibility (WCAG), resulting in a smoother user experience and improved Core Web Vitals for brand identity projects.',
            'Collaborated closely with stakeholders to transform complex business requirements into intuitive, user-centered wireframes and high-fidelity mockups using Figma and Adobe Creative Suite.'
        ]
    },
    {
        company: 'Drop Techno Lab',
        role: 'UI/UX Designer & Front-End Developer',
        period: '07/2024 - 03/2025',
        location: 'Ahmedabad, India',
        description: [
            'Transitioned from design to development, gaining hands-on experience in building interactive web components using JavaScript (JSX) and React.js.',
            'Designed intuitive user interfaces using Figma and Canva, focusing on usability and modern aesthetic trends for client projects.',
            'Optimized front-end performance by implementing efficient CSS and modern JavaScript practices during the development of responsive web pages.',
            'Utilized npm and version control tools to manage dependencies and streamline the development workflow within a collaborative team environment.'
        ]
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

export const education: Education[] = [
    {
        degree: 'Bachelor of Engineering (BE), Information Technology',
        institution: 'Gujarat Technological University (GTU)',
        period: '2022 - 2026'
    },
    {
        degree: 'Master of Design (M.Des.) in Interaction Design',
        institution: 'National Institute of Design',
        period: '2017 - 2019'
    },
    {
        degree: 'Bachelor of Engineering in Information Technology',
        institution: 'Nirma University',
        period: '2013 - 2017'
    }
]
