export const LINKS = {
  github: 'https://github.com/vaibhavupadhyay',
  linkedin: 'https://www.linkedin.com/in/vaibhav-upadhyay-233556297',
  portfolio: 'https://vaibhavupadhyay.vercel.app',
  email: 'uvaibhav367@gmail.com',
  phone: '+91 7725998500',
  location: 'Jaipur, Rajasthan, India',
};

export const PROFILE = {
  name: 'Vaibhav Upadhyay',
  role: 'MERN Stack Developer',
  tagline:
    'Aspiring MERN Stack Developer with hands-on experience building full-stack web applications using React, Node.js, Express and MongoDB.',
  summary:
    'I build responsive, scalable web applications end to end — from RESTful APIs and MongoDB schemas to clean, accessible React interfaces. Currently seeking an entry-level developer role where I can apply my skills and grow as a software engineer.',
  initials: 'VU',
};

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const SKILL_GROUPS = [
  {
    title: 'Languages',
    items: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'C', 'C++'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'React Router', 'Hooks', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'CRUD'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'Mongoose ODM'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify'],
  },
];

export const PROJECTS = [
  {
    title: 'A.I Blog Application',
    tech: 'MERN Stack',
    description:
      'Built a full-stack blog platform with AI-powered content generation using React, Node.js, Express and MongoDB; designed RESTful APIs with Express and Mongoose for post CRUD operations, and developed a responsive React UI with hooks and React Router for dynamic post rendering.',
    features: [
      'RESTful CRUD API for posts',
      'AI-assisted draft generation',
      'React Router for dynamic routes',
      'Responsive, accessible UI',
    ],
    repo: 'https://github.com/vaibhavupadhyay/ai-blog-app',
    live: 'https://ai-blog-app.vercel.app',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    tech: 'React.js, CSS, EmailJS',
    description:
      'Developed a responsive single-page portfolio application showcasing skills and projects; implemented reusable components, smooth navigation and animations for enhanced UX, and integrated a functional contact form using EmailJS.',
    features: [
      'Reusable React components',
      'Smooth scroll navigation',
      'Dark / light theme',
      'Working contact form',
    ],
    repo: 'https://github.com/vaibhavupadhyay/portfolio-website',
    live: 'https://vaibhavupadhyay.vercel.app',
    featured: true,
  },
  {
    title: 'JavaScript Calculator',
    tech: 'HTML, CSS, JavaScript',
    description:
      'Built an interactive calculator performing arithmetic operations with a clean, responsive UI; implemented calculation logic using vanilla JavaScript event handling and DOM manipulation.',
    features: [
      'Vanilla JS event handling',
      'DOM manipulation',
      'Keyboard support',
      'Responsive layout',
    ],
    repo: 'https://github.com/vaibhavupadhyay/javascript-calculator',
    live: 'https://vaibhavupadhyay.github.io/javascript-calculator/',
    featured: false,
  },
  {
    title: 'Website UI Clone',
    tech: 'HTML5, CSS3',
    description:
      'Developed a pixel-perfect clone of a website interface using HTML5 and CSS3; replicated layout with accurate spacing, typography and colour schemes, ensured responsiveness across devices, and used semantic HTML and organised CSS for accessibility and maintainability.',
    features: [
      'Pixel-accurate layout',
      'Semantic HTML5',
      'Flexbox & Grid',
      'Mobile responsive',
    ],
    repo: 'https://github.com/vaibhavupadhyay/website-ui-clone',
    live: 'https://vaibhavupadhyay.github.io/website-ui-clone/',
    featured: false,
  },
];

export const EDUCATION = [
  {
    degree: 'B.Tech — Electronics & Communication',
    institution: 'Jaipur Engineering College and Research Centre',
    year: '2021 — 2025',
    score: 'CGPA: 7.8',
  },
  {
    degree: 'Senior Secondary (Class XII)',
    institution: "Saint Anselm's Pink City School",
    year: '2020 — 2021',
    score: '87.6%',
  },
  {
    degree: 'Secondary (Class X)',
    institution: "Saint Anselm's Pink City School",
    year: '2018 — 2019',
    score: '91.6%',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Front-End Development',
    issuer: 'Internzvalley',
    period: 'Apr — Jun 2023',
    description:
      'Learnt the basics of HTML5, CSS3, Flexbox, Grid and how to build responsive layouts using semantic HTML and clean CSS. Focused on spacing, typography and making websites look clean and accessible. Final project: a Website UI Clone that works well across all screen sizes.',
  },
  {
    title: 'Introduction to JavaScript',
    issuer: 'Learn and Build',
    period: 'May — Jun 2024',
    description:
      'Learnt modern JavaScript (ES6+) including DOM manipulation, event handling, closures and Promises / async-await. Practised concepts like hoisting, scope and async programming through small hands-on exercises. Final project: a JavaScript Calculator built with vanilla JavaScript.',
  },
];

export const ACTIVITIES = [
  { text: 'Participated in Code Fiesta Hackathon at GIT, Jaipur', year: '2023' },
  { text: 'Won gold medal in 400m and silver medal in 800m race', year: '2018' },
  { text: 'Attended IEEE Seminar at JECRC', year: '2023' },
  { text: "Runner-up in Football — Xavier's Cup", year: '2019' },
];
