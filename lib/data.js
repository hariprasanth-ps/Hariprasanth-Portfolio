export const profile = {
  name: 'Hariprasanth P S',
  shortName: 'Hariprasanth PS',
  role: 'Full-Stack Software Engineer',
  tagline:
    'I architect and optimize enterprise applications end to end — from ColdFusion front ends and REST APIs to the SQL and Spark pipelines that keep the data behind them reliable.',
  location: 'Chennai, India',
  email: 'penuhariprasanth@gmail.com',
  phone: '+91 8248754472',
  github: 'https://github.com/hariprasanth-ps',
  linkedin: 'https://www.linkedin.com/in/hariprasanth-ps/',
  resumeUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Hariprasanth.pdf`,
  yearsExperience: 4,
};

export const about = {
  heading: 'I build the connective tissue between enterprise systems and the data behind them.',
  paragraphs: [
    "I'm a full-stack software engineer with 4+ years of experience architecting and optimizing scalable enterprise applications — across CFML/ColdFusion, JavaScript, REST APIs, and SQL Server, mostly for enterprise telecommunications clients.",
    "A lot of my work comes down to two things: making systems faster and making data trustworthy. That's meant rewriting slow SQL queries to cut response times in half for tens of thousands of users, and building ETL pipelines that turned error-prone manual data entry into an automated process handling millions in receivables accurately.",
    "Outside of work, I'm usually listening to music, cooking something new, or picking apart whatever skill has caught my attention that month.",
  ],
  focusAreas: [
    {
      title: 'Full-Stack Development',
      description: 'Building and maintaining enterprise applications in ColdFusion, JavaScript, HTML5/CSS3, and REST APIs.',
    },
    {
      title: 'Performance & Databases',
      description: 'Optimizing SQL Server and Oracle queries, database design, and system performance under real load.',
    },
    {
      title: 'Data Pipelines & Automation',
      description: 'Designing ETL processes and CI/CD automation with Apache Spark and Azure DevOps.',
    },
  ],
};

export const skillGroups = [
  {
    category: 'Languages',
    note: 'Day-to-day tools',
    skills: ['JavaScript (ES6+)', 'Python', 'SQL', 'PL/SQL', 'CFML'],
  },
  {
    category: 'Frontend Development',
    note: 'Client-side',
    skills: ['HTML5', 'CSS3', 'AJAX', 'JSON', 'Responsive Design'],
  },
  {
    category: 'Backend Development',
    note: 'Services & APIs',
    skills: ['ColdFusion 2016/2021/2023', 'RESTful APIs', 'Microservices'],
  },
  {
    category: 'Databases',
    note: 'Storage & queries',
    skills: ['Oracle Database', 'SQL Server', 'MySQL', 'Query Optimization'],
  },
  {
    category: 'Data & Analytics',
    note: 'Moving and shaping data',
    skills: ['Apache Spark', 'Kafka', 'ETL Processes', 'Data Validation'],
  },
  {
    category: 'DevOps & Tools',
    note: 'Shipping software',
    skills: ['Git', 'GitHub', 'Azure DevOps', 'CI/CD', 'VS Code', 'Postman'],
  },
];

export const experience = [
  {
    role: 'Software Engineer',
    org: 'Prodapt Solutions',
    period: 'June 2022 – Present',
    summary:
      'Architecting full-stack applications for enterprise telecommunications clients — CFML, JavaScript, HTML5, and CSS3 on the front end, SQL Server and REST APIs behind them.',
    highlights: [
      'Built the Rapid Response Application (Windstream) in CFML/JavaScript, processing high-volume transaction requests at 99.2% uptime.',
      'Cut average response time 40% by finding database bottlenecks and rewriting SQL queries, improving experience for 50,000+ active users.',
      'Designed RESTful APIs consumed by 15+ third-party applications with zero downtime.',
      'Automated ETL pipelines for the Bad Debt Application, cutting manual data-import effort by 85% across $2M+ in receivables.',
      'Mentored 3 junior developers on full-stack best practices and code review standards.',
    ],
    isPlaceholder: false,
  },
];

export const achievements = [
  {
    title: 'Automated Data Validation Framework',
    description:
      'Engineered a data import, validation, and upload automation system — cutting manual effort 75%, processing errors 95%, and tripling operational throughput.',
  },
  {
    title: 'Azure DevOps KPI Reporting',
    description:
      'Built ticket-extraction and KPI-reporting automation on Azure DevOps APIs; recognized with Star Award of the Month.',
  },
  {
    title: 'Performance Excellence',
    description:
      'Consistently delivered optimized, production-quality code across 20+ deployments with strong reliability.',
  },
];

export const education = [
  {
    degree: 'B.E. in Computer Science and Engineering',
    school: "St. Joseph's College of Engineering, Chennai",
    period: 'June 2018 – June 2022',
    detail: 'CGPA: 8.2 / 10',
  },
];

export const projects = [
  {
    slug: 'plasmadonorapp2',
    name: 'plasmadonorapp2',
    tagline: 'Coordinating plasma donations',
    description:
      'A Flask web application for coordinating plasma donations, with an HTML/CSS front end over a Python backend.',
    stack: ['Python', 'Flask', 'HTML', 'CSS'],
    tags: ['Backend', 'Web App'],
    url: 'https://github.com/hariprasanth-ps/plasmadonorapp2',
    featured: true,
    verified: true,
  },
  {
    slug: 'alexaskill',
    name: 'alexaskill',
    tagline: 'Voice-driven COVID information',
    description:
      "A custom Alexa skill (alexa_covid) built in Python to deliver COVID-related information through voice interactions.",
    stack: ['Python', 'Alexa Skills Kit'],
    tags: ['Voice', 'Python'],
    url: 'https://github.com/hariprasanth-ps/alexaskill',
    verified: true,
  },
  {
    slug: 'intern-ml',
    name: 'intern_ML',
    tagline: 'Serving ML models two ways',
    description:
      'Internship machine learning work spanning both Flask and FastAPI patterns for serving models over an API.',
    stack: ['Python', 'Flask', 'FastAPI'],
    tags: ['Machine Learning', 'Backend'],
    url: 'https://github.com/hariprasanth-ps/intern_ML',
    verified: true,
  },
  {
    slug: 'intern-project-docs',
    name: 'intern_projectDocs',
    tagline: 'Internship reference notes',
    description:
      'Reference notes from an internship covering Joblib for model persistence, Prophet for time-series forecasting, and Python environment setup with venv and pip.',
    stack: ['Python', 'Prophet', 'Joblib'],
    tags: ['Machine Learning', 'Notes'],
    url: 'https://github.com/hariprasanth-ps/intern_projectDocs',
    verified: true,
  },
];

export const certifications = [
  {
    name: 'JavaScript - The Complete Guide 2024 (Beginner + Advanced)',
    issuer: 'Udemy',
    year: '2024',
    url: 'https://www.udemy.com/certificate/UC-0825e5f1-517f-417b-8ac2-45aa3509776a/',
  },
  {
    name: 'Academy Accreditation - Databricks Fundamentals',
    issuer: 'Databricks Academy',
    year: '2025',
    url: 'https://www.credential.net/c555fa9b-9226-4e6e-86f7-55b51167ce2f#acc.bPDUm1Zl',
  },
  {
    name: 'Academy Accreditation - AI Agent Fundamentals',
    issuer: 'Databricks Academy',
    year: '2025',
    url: 'https://www.credential.net/e097d68d-a1aa-48b9-a451-3020f9cc6ec6#acc.DRmOC7Bc',
  },
];

// Add real testimonials here as { quote, name, role } — the section only
// renders if this array is non-empty, so it's safe to leave as-is.
export const testimonials = [];

export const stagesNav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
