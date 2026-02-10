import { type PersonalInfo, type SkillCategory, type Project, type Experience, type Achievement, type Education } from './types';

export const personalInfo: PersonalInfo = {
    name: 'Drashti Kahanpara',
    titles: [
        'Senior UI/UX Developer', 
        'Front-End Developer', 
        'UI Designer', 
        'UX Designer',
        'Web Developer Associate',
        'Service Designer',
        'User Experience Architecture Senior Analyst',
        'User Experience Engineering Senior Manager'
    ],
    location: 'Ahmedabad, India',
    email: 'drashtikahanpara@example.com',
    phone: '+91 1234567890',
    summary: 'A passionate and creative developer specializing in UI/UX and front-end development. I love crafting beautiful, intuitive, and highly functional user experiences. Eager to leverage modern web technologies to create elegant and efficient solutions.',
    socials: {
        linkedin: 'https://www.linkedin.com/in/drashtikahanpara',
        github: 'https://github.com/drashtikahanpara',
    }
};

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
      { name: 'Webpack' },
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
    githubUrl: 'https://github.com/drashtikahanpara',
    liveUrl: '#',
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    description: 'A responsive dashboard for content creators to manage posts, view analytics, and engage with their audience across multiple platforms.',
    tags: ['React.js', 'Data Visualization', 'API Integration'],
    githubUrl: 'https://github.com/drashtikahanpara',
    liveUrl: '#',
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management tool that allows teams to create, assign, and track tasks with real-time updates.',
    tags: ['React.js', 'Firebase', 'Real-time', 'UI/UX'],
    githubUrl: 'https://github.com/drashtikahanpara',
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
        degree: 'Bachelor of Engineering in Information Technology',
        institution: 'Gujarat Technological University',
        period: '2018 - 2022'
    }
]
