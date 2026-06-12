export const CONFIG = {
  name: "Syed Hussain",
  title: "Full Stack Developer",
  tagline: "I build scalable full-stack, cloud-native, and AI-enabled applications across frontend, backend, and deployment pipelines.",
  location: "St. Louis, MO",
  email: "syedf.hussain7@gmail.com",
  phone: "347-891-6304",
  github: "https://github.com/forhadh030",
  linkedin: "",
  linkedinStatus: "LinkedIn currently unavailable",
  resumeUrl: "/Syed_Hussain_Resume.pdf",
  careerStartDate: "2021-10-01",
  contactForm: {
    provider: "Web3Forms",
    endpoint: "https://api.web3forms.com/submit",
  },

  about: `I'm a results-driven Full Stack Developer with {experienceYears} years of experience delivering scalable, high-performance applications across frontend, backend, and cloud environments.

My work spans Java, Spring Boot, Angular, React, Python, AWS, CI/CD automation, Kubernetes deployments, and Retrieval-Augmented Generation systems. I enjoy building maintainable systems that move cleanly from code to production.`,

  stats: [
    { value: "experienceYears", label: "Years exp.", dynamic: true },
    { value: "4", label: "Professional roles" },
    { value: "3", label: "Certifications" },
  ],

  heroCard: [
    { label: "Role", value: "Full Stack" },
    { label: "Location", value: "St. Louis" },
    { label: "Status", value: "Open" },
    { label: "Stack", value: "Java/React" },
  ],

  profileCode: [
    ["name", '"Syed Hussain"'],
    ["role", '"Full Stack Developer"'],
    ["location", '"St. Louis, MO"'],
    ["languages", '["Java", "Python", "JavaScript"]'],
    ["focus", '"Cloud + RAG + Enterprise Apps"'],
    ["status", '"Open to opportunities"'],
  ],

  projects: [
    {
      title: "Quiz App",
      description: "Trivia quiz with category and difficulty selection, powered by the Open Trivia DB API. Built with Next.js and React 19 using TypeScript, Tailwind, Radix UI, and schema-validated forms for type-safe question handling and scoring.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind"],
      link: "https://github.com/forhadh030/quiz-app",
      year: "2025",
    },
    {
      title: "Car Factory Frontend",
      description: "Inventory management UI for a car factory backend — searchable, sortable vehicle listings rendered with MUI Data Grid, with CRUD flows against a REST API. React + Vite with Material UI theming.",
      tags: ["React", "Vite", "Material UI", "Data Grid"],
      link: "https://github.com/forhadh030/CarFactoryFrontend",
      year: "2023",
    },
    {
      title: "Flask Car Inventory",
      description: "Flask REST backend for vehicle inventory with SQLAlchemy models, token-authenticated endpoints, and full CRUD routes — the server side counterpart to the car factory frontend.",
      tags: ["Python", "Flask", "Backend", "Inventory"],
      link: "https://github.com/forhadh030/flask_car_inventory",
      year: "2022",
    },
    {
      title: "Weather API",
      description: "Live weather lookup app consuming a third-party weather API — async fetch with error handling for invalid locations, and DOM rendering of current conditions in vanilla JavaScript.",
      tags: ["API", "Weather Data", "JavaScript", "Integration"],
      link: "https://github.com/forhadh030/weather_api",
      year: "2022",
    },
  ],

  skills: [
    { category: "Frontend", items: ["Angular", "React", "JavaScript", "TypeScript", "HTML5", "SCSS", "JSP"] },
    { category: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "Python", "FastAPI", "Flask"] },
    { category: "Data & APIs", items: ["MySQL", "PostgreSQL", "REST", "WSDL", "Postman", "SOAPUI", "Vector Databases"] },
    { category: "Cloud & DevOps", items: ["AWS ECS", "Fargate", "EC2", "S3", "Docker", "Kubernetes", "ArgoCD", "Jenkins"] },
    { category: "Tools & Practices", items: ["Git", "GitHub", "GitLab", "JIRA", "Confluence", "Splunk", "Agile", "CI/CD"] },
    { category: "AI", items: ["RAG", "LLM Integration", "Embeddings", "AI Inference"] },
  ],

  experience: [
    {
      role: "Full Stack Developer",
      company: "Accenture Federal Services - Project FearItself",
      period: "August 2025 - Present",
      description: "Engineered a RAG pipeline using Python, FastAPI/Flask, and React; integrated vector databases for low-latency document retrieval; built Jenkins CI/CD from GitHub commits to container images; supported ArgoCD and Kubernetes deployments for an AI inference engine.",
    },
    {
      role: "Full Stack Developer",
      company: "Accenture Federal Services - Project Midnight Express",
      period: "March 2025 - July 2025",
      description: "Architected backend-to-backend integrations with Spring Boot, RestTemplate, and RetryTemplate; containerized microservices with Docker and AWS ECS Fargate; maintained endpoint reliability with JUnit and Postman; documented system architecture and integration workflows in Confluence.",
    },
    {
      role: "Full Stack Developer",
      company: "Accenture Federal Services - Project Hemingway",
      period: "February 2024 - February 2025",
      description: "Modernized full-stack applications by connecting legacy JSP pages with AngularJS components; built backend services with Spring Boot, Hibernate, MySQL, and WSDL integrations; configured Jenkins pipelines and used Splunk to troubleshoot production issues.",
    },
    {
      role: "Full Stack Developer",
      company: "LENET",
      period: "October 2021 - January 2024",
      description: "Contributed across the SDLC for enterprise applications; developed responsive Angular 17 interfaces; migrated AngularJS and jQuery components; built RESTful endpoints with Java, Spring MVC, Hibernate, and MySQL; supported Agile delivery through JIRA workflows.",
    },
  ],

  education: [
    {
      degree: "Bachelor of Business Administration",
      school: "CUNY Lehman College",
      period: "January 2015",
    },
  ],

  certifications: [
    "AWS Cloud Practitioner",
    "Google Cloud Practitioner",
    "CompTIA Security+",
  ],
};

export const NAV_ITEMS = ["About", "Projects", "Skills", "Experience", "Credentials", "Contact"];
export const QUICK_PROMPTS = ["What stack do you use?", "Is Syed available?", "Tell me about his RAG work"];
