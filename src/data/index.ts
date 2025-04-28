import { Project, Certificate, Education, Training, SkillCategory } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'ReadMeCraft',
    description: 'GitHub Profile README generator with React, TypeScript, and AI-powered suggestions.',
    githubUrl: 'https://github.com/tarunerror/readmeCraft',
    demoUrl: 'https://readme-craft.netlify.app/',
    image: 'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Feb 2025',
    technologies: ['React', 'TypeScript', 'AI Integration'],
  },
  {
    id: '2',
    title: 'AuraChat',
    description: 'AI Chatbot with Mistral AI models, React, TypeScript, deployed on Netlify.',
    githubUrl: 'https://github.com/tarunerror/AuraChat',
    demoUrl: 'https://aurachat.netlify.app/',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Feb 2025',
    technologies: ['React', 'TypeScript', 'Mistral AI', 'Netlify'],
  },
  {
    id: '3',
    title: 'Hotel Booking System',
    description: 'Full-stack PG room booking system with authentication and payment gateway.',
    githubUrl: 'https://github.com/tarunerror/pgroombooking',
    demoUrl: 'https://roomiehotels.netlify.app/',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Dec 2024',
    technologies: ['Full Stack', 'Authentication', 'Payment Gateway'],
  },
  {
    id: '4',
    title: 'Modern Shop E-Commerce',
    description: 'E-commerce platform with React, TypeScript, Tailwind CSS, cart management.',
    githubUrl: 'https://github.com/tarunerror/e-commerce',
    demoUrl: 'https://modernshopp.netlify.app/',
    image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'Dec 2024',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'E-Commerce'],
  }
];

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Server-Side JavaScript with Node.js',
    issuer: 'NIIT',
    date: 'Oct 2024',
    url: 'https://coursera.org/share/bcb0f50c6551fe091276549bb4218c13'
  },
  {
    id: '2',
    title: 'Algorithms on Strings',
    issuer: 'UC San Diego',
    date: 'Sep 2024',
    url: 'https://coursera.org/share/362c1d9fc074a37398563164321572a3'
  },
  {
    id: '3',
    title: 'Dynamic Programming, Greedy Algorithms',
    issuer: 'Coursera',
    date: 'Aug 2024',
    url: 'https://coursera.org/share/9ece6140c82ba0d06cd4add90ce4740d'
  },
  {
    id: '4',
    title: 'Exploratory Data Analysis for ML',
    issuer: 'IBM',
    date: 'Aug 2024',
    url: 'https://coursera.org/share/9fdf711b933b56daba4dbeaac7423e7f'
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Lovely Professional University',
    degree: 'B.Tech in Computer Science and Engineering',
    period: 'Since Aug 2022',
    details: 'CGPA: 6.58'
  },
  {
    id: '2',
    institution: 'B.S. Public School',
    degree: 'Intermediate',
    period: 'March 2021',
    details: 'Percentage: 89%'
  },
  {
    id: '3',
    institution: 'St. Vivekanand Public School',
    degree: 'Matriculation',
    period: 'March 2020',
    details: 'Percentage: 94%'
  }
];

export const training: Training[] = [
  {
    id: '1',
    title: 'Core And Advance Java',
    institution: 'Board Infinity',
    period: 'June 2024',
    highlights: [
      'OOP principles',
      'Multithreading',
      'RESTful APIs',
      'Eclipse IDE',
      'Git',
      'Singleton & Factory patterns'
    ],
    certificateUrl: 'https://drive.google.com/file/d/12NWNN9m1a8klC7OtgYlQXnKwGBo-9-la/view'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: '1',
    title: 'Languages',
    skills: [
      { id: '1-1', name: 'Java', proficiency: 4 },
      { id: '1-2', name: 'C++', proficiency: 4 },
      { id: '1-3', name: 'JavaScript', proficiency: 4 },
      { id: '1-4', name: 'PHP', proficiency: 3 },
      { id: '1-5', name: 'TypeScript', proficiency: 4 },
      { id: '1-6', name: 'Shell', proficiency: 3 }
    ]
  },
  {
    id: '2',
    title: 'Frameworks',
    skills: [
      { id: '2-1', name: 'React.js', proficiency: 4 },
      { id: '2-2', name: 'Node.js', proficiency: 4 },
      { id: '2-3', name: 'Express.js', proficiency: 4 },
      { id: '2-4', name: 'Next.js', proficiency: 3 },
      { id: '2-5', name: 'Spring Boot', proficiency: 3 },
      { id: '2-6', name: 'Laravel', proficiency: 3 }
    ]
  },
  {
    id: '3',
    title: 'Tools/Platforms',
    skills: [
      { id: '3-1', name: 'MongoDB', proficiency: 4 },
      { id: '3-2', name: 'PostgreSQL', proficiency: 4 },
      { id: '3-3', name: 'MySQL', proficiency: 4 },
      { id: '3-4', name: 'Firebase', proficiency: 3 },
      { id: '3-5', name: 'Docker', proficiency: 3 },
      { id: '3-6', name: 'Git', proficiency: 4 }
    ]
  },
  {
    id: '4',
    title: 'Development',
    skills: [
      { id: '4-1', name: 'REST APIs', proficiency: 4 },
      { id: '4-2', name: 'GraphQL', proficiency: 3 },
      { id: '4-3', name: 'CI/CD', proficiency: 3 },
      { id: '4-4', name: 'Testing', proficiency: 4 },
      { id: '4-5', name: 'AWS', proficiency: 3 },
      { id: '4-6', name: 'DevOps', proficiency: 3 }
    ]
  },
  {
    id: '5',
    title: 'CS Fundamentals',
    skills: [
      { id: '5-1', name: 'Data Structures', proficiency: 4 },
      { id: '5-2', name: 'Algorithms', proficiency: 4 },
      { id: '5-3', name: 'System Design', proficiency: 3 },
      { id: '5-4', name: 'OOP', proficiency: 4 },
      { id: '5-5', name: 'Design Patterns', proficiency: 3 }
    ]
  },
  {
    id: '6',
    title: 'Soft Skills',
    skills: [
      { id: '6-1', name: 'Problem Solving', proficiency: 4 },
      { id: '6-2', name: 'Communication', proficiency: 4 },
      { id: '6-3', name: 'Team Leadership', proficiency: 3 },
      { id: '6-4', name: 'Agile/Scrum', proficiency: 4 },
      { id: '6-5', name: 'Time Management', proficiency: 4 }
    ]
  }
];

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/tarunerror',
  github: 'https://github.com/tarunerror',
  email: 'mailto:its.tarun01@gmail.com',
  resume: 'https://drive.google.com/file/d/19PQHmTjNvtjts9ZR76FvEUtC_RC54Wrw/view?usp=sharing',
  phone: '+91-8937011417'
};