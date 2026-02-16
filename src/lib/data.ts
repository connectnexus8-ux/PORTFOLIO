import { type PersonalInfo, type SkillCategory, type Experience, type Achievement, type Education, type Project } from './types';

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

export const experience: Experience[] = [
    {
        company: 'AekAds',
        role: 'Sr. UI/UX developer & Front - End developer',
        period: '03/2025 - Present',
        location: 'Gandhinagar',
        description: [
            'Led the design and development of user-centric web applications, improving user satisfaction by 25%.',
            'Built and maintained a component library in React, increasing development speed and ensuring brand consistency.',
            'Collaborated with product managers to define requirements and translate them into responsive UI designs and functional frontend code.'
        ],
        skills: ['UI/UX Design', 'Frontend Development', 'React.js', 'Design Systems', 'Figma']
    },
    {
        company: 'Drop Techno Lab',
        role: 'UI/UX Designer & Front-End Developer',
        period: '07/2024 - 03/2025',
        location: 'Ahmedabad, India',
        description: [
            'Designed and implemented responsive user interfaces for various client projects.',
            'Created wireframes, mockups, and prototypes to communicate design ideas.',
            'Worked closely with backend developers to integrate APIs and ensure seamless user experiences.'
        ],
        skills: ['HTML/CSS', 'JavaScript', 'UI Design', 'Prototyping', 'API Integration']
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
  {
    title: 'Service Designer',
    description: 'Issued by Udemy.',
    year: 'May 2024',
  },
  {
    title: 'User Experience Architecture, Senior Analyst',
    description: 'Issued by Accenture.',
    year: 'May 2024',
  },
    {
    title: 'User Experience Engineering, Senior Manager',
    description: 'Issued by Accenture.',
    year: 'May 2024',
  },
];

export const projects: Project[] = [
    {
        title: 'Aookly Networking App & Web Platform',
        description: '• Led end-to-end UI/UX design for both the mobile application and web platform, creating a consistent, user-centric experience across devices.\n• Conducted user research, defined user flows, and designed wireframes and high-fidelity prototypes to ensure intuitive navigation and seamless interaction.\n• Designed complete visual systems including layout structures, typography, color schemes, and reusable design components to maintain product consistency and scalability.\n• Contributed significantly to the React.js web application development (~50%), building responsive, component-based interfaces using modern front-end practices.\n• Implemented reusable UI components, optimized performance, and ensured cross-device compatibility for both desktop and mobile web experiences.\n• Collaborated closely with developers and stakeholders to translate design concepts into functional, high-quality product features aligned with business and user needs.',
        tags: ['UI/UX Design', 'React.js', 'Mobile App', 'Web Platform'],
        liveUrl: 'https://play.google.com/store/apps/details?id=com.aookly.networking&pcampaignid=web_share',
    },
    {
        title: 'BKhetiBuddy – Admin Panel (Web & Mobile Platform)',
        description: '• Led the complete UI/UX design for the BKhetiBuddy ecosystem, covering both the web application (admin panel) and mobile app interfaces, ensuring a consistent and user-centric design system across platforms.\n• For the Admin Web Platform, designed end-to-end user experiences including information architecture, user flows, wireframes, and high-fidelity prototypes focused on clarity, usability, and efficient task management for administrators.\n• Contributed significantly to the React.js frontend development, implementing responsive layouts, reusable UI components, and interactive dashboards to ensure optimal performance and seamless user experience across devices.\n• Designed and structured data-driven dashboards, enabling easy monitoring of agricultural operations, user management, analytics insights, and system workflows through intuitive visual hierarchies and clean UI patterns.\n• Collaborated closely with developers and stakeholders to translate complex business requirements into scalable design solutions, emphasizing accessibility, performance optimization, and maintainable design systems.\n• Key Skills & Areas: End-to-end UI/UX Design, React.js Frontend Contribution, Admin Panel & Dashboard Design, Responsive Web Application Design, Design Systems & Component Architecture, Usability & Performance Optimization.',
        tags: ['UI/UX Design', 'React.js', 'Admin Panel', 'Dashboards'],
        liveUrl: 'https://admin.prod.khetibuddy.com/admin/sys/auth/login',
    },
    {
        title: 'Banas Potato Farmer App & Web Platform',
        description: '• Led the complete end-to-end UI/UX design for the BKhetiBuddy ecosystem, covering both the mobile application and admin web platform, ensuring a consistent and user-centric design system across all touchpoints.\n• Designed the Admin Web Platform experience from information architecture to user flows, wireframes, and high-fidelity prototypes, focusing on clarity, usability, and efficient task management for administrators.\n• Contributed extensively to React.js frontend development, building responsive layouts, reusable UI components, and interactive interfaces for seamless cross-device performance.\n• Created data-driven dashboards with clear visual hierarchies to simplify monitoring of agricultural operations, analytics insights, user management, and workflow tracking.\n• Collaborated closely with developers and stakeholders to translate complex business requirements into scalable, accessible, and performance-optimized design solutions.\n• Specialized in end-to-end UI/UX design, admin panel & dashboard design, responsive web applications, design systems, component architecture, and usability optimization.',
        tags: ['UI/UX Design', 'React.js', 'Web Platform', 'Agri-Tech'],
        liveUrl: 'https://play.google.com/store/apps/details?id=com.banaspotato.farmer&pcampaignid=web_share',
    }
];
