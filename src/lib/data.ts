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
        company: 'Creative Labs',
        role: 'Senior UI/UX Designer',
        period: '2021 - Present',
        location: 'Remote',
        description: [
            'Led the design of a new flagship product, from concept to launch.',
            'Conducted user research and testing to inform design decisions.',
            'Created wireframes, prototypes, and high-fidelity mockups.',
            'Collaborated with developers to ensure faithful implementation of designs.',
        ]
    },
    {
        company: 'Design Hub',
        role: 'UI/UX Designer',
        period: '2019 - 2021',
        location: 'Ahmedabad, India',
        description: [
            'Designed and improved user interfaces for various web and mobile applications.',
            'Worked closely with product managers to define feature requirements.',
            'Contributed to the development of a new design system.',
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
