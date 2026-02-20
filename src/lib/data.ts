import { type PersonalInfo, type SkillCategory, type Experience, type Achievement, type Education, type Project } from './types';

export const personalInfo: PersonalInfo = {
    name: 'Drashti Khanpara',
    titles: [
        'Senior UI/UX Designer & Front-End Developer',
        'User Experience Architect',
        'React.js Developer',
        'Figma Specialist',
        'Service Designer',
    ],
    location: 'Ahmedabad',
    email: 'khanparadrashti1605@gmail.com',
    phone: '+91 9033300167',
    summary: `Senior UI/UX Designer & Front-End Developer with proven expertise in architecting intuitive, scalable, and user-centered digital experiences that align business objectives with user needs. Adept at the end-to-end product design lifecycle, including UX research, information architecture, interaction design, wireframing, and high-fidelity prototyping. Highly skilled in translating complex functional requirements into seamless user journeys, leveraging Figma-driven design systems and modern front-end frameworks such as React.js to ensure pixel-perfect implementation and consistency across platforms. Demonstrates strong competency in usability optimization, accessibility standards, and performance-focused front-end engineering, enabling the delivery of responsive, visually refined, and high-impact interfaces. Recognized for effectively collaborating with cross-functional stakeholders, bridging the gap between design and development, and driving data-informed design decisions that enhance user engagement, product efficiency, and overall digital experience quality.`,
    socials: {
        linkedin: 'https://www.linkedin.com/in/drashti-khanpara-3a3b83253/',
        github: 'https://github.com/Drashti1605',
    }
};

export const skills: SkillCategory[] = [
  {
    title: 'UX & Research',
    skills: [
      { name: 'UX Research' },
      { name: 'User Flow Design' },
      { name: 'Wireframing & Information Architecture' },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Interactive Prototyping (Figma)' },
      { name: 'UI Design & Visual Design Principles' },
      { name: 'Responsive Design' },
      { name: 'Component-Based UI Architecture' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Frontend Development' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript (ES6)' },
      { name: 'React.js Development' },
      { name: 'Next.js Development' },
    ],
  },
  {
    title: 'Development',
    skills: [
      { name: 'REST API Integration' },
      { name: 'Performance Optimization' },
    ],
  },
  {
    title: 'Tools & Collaboration',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'npm / Package Management' },
    ],
  },
    {
    title: 'Collaboration',
    skills: [
      { name: 'Cross-Functional Collaboration' },
      { name: 'Agile / Team Workflow' },
    ],
  },
];

export const experience: Experience[] = [
    {
        company: 'Aek Ads',
        role: 'Sr. UI/UX developer & Front - End developer',
        period: '03/2025 - Present',
        location: 'Gandhinagar, India',
        description: [
            'Led end-to-end UI/UX design and front-end development of scalable, high-traffic web interfaces using Figma, React.js, and TypeScript.',
            'Translated complex product requirements into intuitive user flows, wireframes, and high-fidelity prototypes aligned with business goals.',
            'Developed and maintained a comprehensive design system and reusable component library to ensure design consistency and faster delivery.',
            'Collaborated closely with product managers, designers, and developers to refine UX strategies and improve usability.',
            'Optimized front-end performance, accessibility WCAG, and responsive behavior to enhance overall user experience.',
            'Ensured pixel-perfect implementation between Figma designs and production code.'
        ],
        skills: ['UI/UX Design', 'Frontend Development', 'React.js', 'TypeScript', 'Figma', 'Design Systems']
    },
    {
        company: 'Drop Techno Lab',
        role: 'UI/UX Designer & Front-End Developer',
        period: '07/2024 - 03/2025',
        location: 'Ahmedabad, India',
        description: [
            'Designed user-centered interfaces through UX research, wireframing, and interactive prototyping using Figma.',
            'Created scalable UI layouts aligned with modern design standards and usability principles.',
            'Built responsive web components using React.js, JavaScript JSX, and modern CSS practices.',
            'Collaborated with cross-functional teams to gather requirements and propose effective UI/UX solutions.',
            'Maintained structured design files and documented user flows for efficient development handoff.'
        ],
        skills: ['HTML/CSS', 'JavaScript', 'React.js', 'UI Design', 'Prototyping', 'Figma']
    }
];

export const education: Education[] = [
    {
        institution: 'Gujarat Technological University GTU',
        degree: 'Bachelor of Engineering (BE), Information Technology',
        period: '2022 - 2026',
    },
    {
        institution: 'Madhav International',
        degree: 'HSC - Science',
        period: '03/2022',
    },
    {
        institution: 'Madhav Vidhya Sankul',
        degree: 'SSC',
        period: '03/2020',
    }
];

export const achievements: Achievement[] = [
  {
    title: 'Multiple Certifications',
    description: 'Earned multiple professional certifications in UI/UX Design, Frontend Development, and Web Technologies, demonstrating strong expertise in user-centered design, modern interface tools, and practical implementation of responsive web applications. Recognized for continuous learning, skill development, and active contribution to real-world design and development projects.',
    year: 'Ongoing',
  }
];

export const projects: Project[] = [
    {
        title: 'Aookly Networking App & Web Platform',
        description: '• Led end-to-end UI/UX design for both the mobile application and web platform, creating a consistent, user-centric experience across devices.\n• Conducted user research, defined user flows, and designed wireframes and high-fidelity prototypes to ensure intuitive navigation and seamless interaction.\n• Designed complete visual systems including layout structures, typography, color schemes, and reusable design components to maintain product consistency and scalability.\n• Contributed significantly to the React.js web application development (~50%), building responsive, component-based interfaces using modern front-end practices.\n• Implemented reusable UI components, optimized performance, and ensured cross-device compatibility for both desktop and mobile web experiences.\n• Collaborated closely with developers and stakeholders to translate design concepts into functional, high-quality product features aligned with business and user needs.',
        tags: ['UI/UX Design', 'React.js', 'Mobile App', 'Web Platform'],
        liveUrl: 'https://play.google.com/store/apps/details?id=com.aookly.networking&pcampaignid=web_share',
        image: 'project-aookly',
    },
    {
        title: 'BKhetiBuddy – Admin Panel (Web & Mobile Platform)',
        description: '• Led the complete UI/UX design for the BKhetiBuddy ecosystem, covering both the web application (admin panel) and mobile app interfaces, ensuring a consistent and user-centric design system across platforms.\n• For the Admin Web Platform, designed end-to-end user experiences including information architecture, user flows, wireframes, and high-fidelity prototypes focused on clarity, usability, and efficient task management for administrators.\n• Contributed significantly to the React.js frontend development, implementing responsive layouts, reusable UI components, and interactive dashboards to ensure optimal performance and seamless user experience across devices.\n• Designed and structured data-driven dashboards, enabling easy monitoring of agricultural operations, user management, analytics insights, and system workflows through intuitive visual hierarchies and clean UI patterns.\n• Collaborated closely with developers and stakeholders to translate complex business requirements into scalable design solutions, emphasizing accessibility, performance optimization, and maintainable design systems.\n• Key Skills & Areas: End-to-end UI/UX Design, React.js Frontend Contribution, Admin Panel & Dashboard Design, Responsive Web Application Design, Design Systems & Component Architecture, Usability & Performance Optimization.',
        tags: ['UI/UX Design', 'React.js', 'Admin Panel', 'Dashboards'],
        liveUrl: 'https://admin.prod.khetibuddy.com/admin/sys/auth/login',
        image: 'project-khetibuddy',
    },
    {
        title: 'Banas Potato Farmer App & Web Platform',
        description: '• Led the complete end-to-end UI/UX design for the BKhetiBuddy ecosystem, covering both the mobile application and admin web platform, ensuring a consistent and user-centric design system across all touchpoints.\n• Designed the Admin Web Platform experience from information architecture to user flows, wireframes, and high-fidelity prototypes, focusing on clarity, usability, and efficient task management for administrators.\n• Contributed extensively to React.js frontend development, building responsive layouts, reusable UI components, and interactive interfaces for seamless cross-device performance.\n• Created data-driven dashboards with clear visual hierarchies to simplify monitoring of agricultural operations, analytics insights, user management, and workflow tracking.\n• Collaborated closely with developers and stakeholders to translate complex business requirements into scalable, accessible, and performance-optimized design solutions.\n• Specialized in end-to-end UI/UX design, admin panel & dashboard design, responsive web applications, design systems, component architecture, and usability optimization.',
        tags: ['UI/UX Design', 'React.js', 'Web Platform', 'Agri-Tech'],
        liveUrl: 'https://play.google.com/store/apps/details?id=com.banaspotato.farmer&pcampaignid=web_share',
        image: 'project-banas-potato',
    },
    {
        title: 'Abhayam Inventory Management System — Web Application Development',
        description: '• Led the development of a web-based Inventory Management System for Abhayam Polymers to streamline product tracking, stock monitoring, and secure user access.\n• Designed and implemented secure authentication workflows using email-based login and role-based access control to ensure data security and user permission management.\n• Built intuitive inventory management modules enabling users to efficiently add, update, delete, and monitor product stock levels in real time.\n• Developed a responsive and scalable user interface ensuring seamless usability across desktop, tablet, and mobile devices.\n• Structured the system architecture to be maintainable and scalable, supporting future feature expansion and performance optimization.\n• Implemented efficient data handling and real-time database integration to minimize manual errors and improve operational accuracy.\n• Deployed the application using modern cloud hosting practices to ensure reliability, accessibility, and continuous availability.',
        tags: ['UI/UX Design', 'React.js', 'Inventory Management', 'Authentication', 'Responsive Design', 'Real-time Data'],
        liveUrl: 'https://abhayaminventory.vercel.app/login',
        githubUrl: 'https://github.com/connectnexus8-ux/abhayaminventory',
        image: 'training-dashboard',
    },
    {
        title: 'Resume Builder Website – Web Application',
        description: '• Designed and developed a user-friendly web application that enables users to easily create, customize, and export professional resumes.\n• Created intuitive UI flows for resume creation, editing, and template selection to ensure a smooth and guided user experience.\n• Implemented multiple industry-specific resume templates, allowing users to generate personalized and visually appealing resumes.\n• Developed core features including PDF export functionality, profile image upload, and dark mode support for enhanced usability.\n• Built responsive, component-based interfaces using React.js, ensuring cross-device compatibility and optimized performance.\n• Integrated modern UI frameworks like Bootstrap and Chakra UI to maintain consistency, scalability, and clean visual design.\n• Collaborated on routing, navigation structure, and overall application architecture using React Router.',
        tags: ['UI/UX Design', 'React.js', 'Bootstrap', 'Chakra UI', 'React Router', 'React Icons', 'PDF Generation'],
        githubUrl: 'https://github.com/Drashti1605/Resume-Builder',
    },
    {
        title: 'Depression Prediction Platform – MindWatch',
        description: '• Designed complete end-to-end UI/UX, including information architecture, user flows, wireframes, and high-fidelity prototypes.\n• Developed a consistent design system with structured layouts, typography, color schemes, and reusable UI components.\n• Contributed to React.js frontend development, building responsive, component-based interfaces.\n• Implemented reusable UI components and optimized performance for seamless cross-device experience.\n• Collaborated with stakeholders to translate product requirements into scalable, user-centered solutions.',
        tags: ['UI/UX Design', 'React.js', 'Web Platform Development', 'Design Systems', 'Responsive Design', 'Usability & Accessibility'],
        githubUrl: 'https://github.com/Drashti1605/Depression-Predication',
    },
    {
        title: 'CO₂ Emission Calculator – Web Platform',
        description: '• Designed complete UI/UX experience, including layout structure, input flows, and result visualization screens.\n• Created clean and intuitive interface patterns to simplify complex environmental data interpretation.\n• Developed responsive front-end interface using modern web technologies.\n• Implemented interactive calculation logic and result display components.\n• Focused on usability, accessibility, and clear data presentation to enhance user understanding.',
        tags: ['UI/UX Design', 'Web Interface Development', 'Responsive Design', 'Data Visualization UI', 'User-Centered Design', 'Sustainability-Focused Product Design'],
        githubUrl: 'https://github.com/Drashti1605/CO2-Emission-Calculator',
    },
    {
        title: 'RouteOptimization Management System - UI/UX Design with React.js Implementation',
        description: '• Led the end-to-end UI/UX design of the Route Optimization Management System, conducting user research, defining personas, mapping user journeys, and creating structured user flows to simplify complex route planning workflows.\n• Designed detailed wireframes and high-fidelity prototypes focused on clarity, usability, and fast decision-making, enabling operations teams to efficiently manage routes, schedules, and logistics data.\n• Built a strong visual hierarchy and scalable component system, ensuring better data readability through clear typography, color coding, and structured dashboard layouts.\n• Contributed around 50% to front-end development using React.js, implementing reusable components, React Hooks, and responsive UI structures for dynamic data handling.\n• Developed interactive dashboards with filters, real-time data visualization, and intuitive navigation patterns to improve user productivity and operational efficiency.\n• Ensured pixel-perfect implementation, performance optimization, and cross-browser compatibility, maintaining design consistency across devices and delivering a smooth, responsive user experience.',
        tags: ['UI/UX Design', 'React.js', 'Dashboard', 'Route Management'],
        image: 'training-dashboard',
    },
    {
        title: 'CMS Admin Platform with Authentication - UI/UX Design & Responsive React.js Development',
        description: '• Led the end-to-end UI/UX design of a CMS Admin Platform, crafting structured admin workflows including login, registration, password recovery, OTP verification, and secure authentication flows to ensure a smooth and secure user experience.\n• Designed role-based access control interfaces, enabling administrators to manage permissions, user roles, and system access through clear navigation patterns and intuitive interaction models.\n• Created comprehensive user management dashboards, allowing efficient handling of user data, activity monitoring, status controls, and system operations with clean visual hierarchy and data clarity.\n• Built and maintained a scalable design system with reusable components, standardized UI patterns, and consistent styling to ensure uniformity across multiple CMS modules.\n• Contributed approximately 50% to React.js front-end development, implementing responsive layouts, reusable components, API integrations, and dynamic data rendering for real-time admin operations.\n• Focused strongly on usability, accessibility, and workflow efficiency, optimizing task flows, reducing cognitive load, and ensuring seamless performance across desktop and tablet devices.',
        tags: ['UI/UX Design', 'React.js', 'Admin Platform', 'CMS', 'Authentication'],
        image: 'training-dashboard',
    },
    {
        title: 'Animal BBRC Management Website & App Design',
        description: '• Led end-to-end UI/UX design for the Animal BBRC Management Website, focusing on building efficient data monitoring dashboards, workflow management systems, and reporting interfaces tailored for operational use.\n• Designed structured information architecture, user flows, wireframes, and high-fidelity UI layouts to simplify complex datasets and enable quick decision-making for administrators.\n• Created intuitive data visualization interfaces using clear visual hierarchies, charts, tables, and status indicators to make large volumes of operational data easy to understand and actionable.\n• Contributed around 50% to front-end development using React.js, implementing responsive layouts, reusable components, and integrating REST APIs for real-time data handling.\n• Ensured consistent design systems and UI patterns, maintaining scalability, usability, and seamless performance across different screen sizes and devices.\n• Focused on dashboard design, workflow optimization, responsive web application design, and performance-driven UI implementation to support smooth day-to-day management operations.',
        tags: ['UI/UX Design', 'React.js', 'Dashboard', 'Data Visualization'],
        image: 'training-dashboard',
    }
];
