// ============================================================
// portfolioData.js — GOGUL R Portfolio Data
// All content and links on the website are centralized here.
// ============================================================

export const personalInfo = {
  name: "GOGUL R",
  firstName: "GOGUL R",
  brandName: "GOGUL R", // shown in the preloader, navbar and footer
  title: "Java Software Engineer",
  location: "Perambalur, India",
  phone: "9600718969",
  emails: {
    primary: "gogulrajendran13@gmail.com",
    secondary: "",
  },
  summary:
    "Electronics and Communication Engineering graduate focused on building full-stack web applications using Java, JSP, Servlets, JDBC and MySQL.",
  resumeUrl: "/Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/gogulrajendran13-stack",
  linkedin: "https://www.linkedin.com/in/gogul6006",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm GOGUL R",
  titleHighlight: "Java Software Engineer",
  subtitle:
    "Electronics and Communication Engineering graduate focused on building full-stack web applications using Java, JSP, Servlets, JDBC and MySQL.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:gogulrajendran13@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">GOGUL R</span>, a passionate Java Software Engineer based in Perambalur, India. I have a strong foundation in Java programming, object-oriented concepts, database management, and web development, sharpening my skills through the placement training program at TAP Academy. Having developed full-stack web applications like easyBuy and IoT systems like Smart Shopping Trolley, I am eager to apply my technical and problem-solving skills to build scalable software solutions.`,
  techStack: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "JavaScript"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A systematic engineering approach from requirement analysis to solid deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyzing user requirements, database constraints, and planning software architecture.",
    },
    {
      number: "02",
      title: "Design",
      text: "Designing relational database schemas, entity relationships, and intuitive user workflows.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Writing clean, modular code with Core Java, Servlets, JDBC, and responsive web interfaces.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Testing CRUD operations, configuring Apache Tomcat server, and versioning with Git & GitHub.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }],
    },
    {
      title: "Backend",
      skills: [{ name: "Java Servlets" }, { name: "JSP" }, { name: "JDBC" }],
    },
    {
      title: "Frontend",
      skills: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "SQL" }],
    },
    {
      title: "Tools",
      skills: [
        { name: "Eclipse IDE" },
        { name: "Apache Tomcat" },
        { name: "Git" },
        { name: "GitHub" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Zonal Ball Badminton Tournament",
    description:
      "Secured Runner-up position in Zonal-level Ball Badminton competitions for two consecutive years, demonstrating athletic discipline and team collaboration.",
    role: "Team Player & Runner-up",
    badge: "Sports Achievement",
  },
  {
    title: "ADAS ECU Simulation & Testing Hackathon",
    description:
      "Participated in the final level hackathon, gaining practical exposure to automotive systems, Vector CANoe simulation, and CAPL scripting.",
    role: "Finalist Participant",
    badge: "Hackathon Finalist",
  },
  {
    title: "Embedded Systems & Microcontroller Workshop",
    description:
      "Explored Embedded C and microcontroller programming through hands-on technical activities and hardware interfacing.",
    role: "Technical Explorer",
    badge: "Hands-on Workshop",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Java Full Stack Development Intern",
    duration: "July 2026 – Present",
    skills: [
      "Core Java",
      "OOP & DSA",
      "Spring Fundamentals",
      "CRUD Operations",
      "Database Integration",
    ],
    tech: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
  },
  {
    organization: "THE MIND IT",
    role: "Java Full Stack Intern",
    duration: "July 2025 – August 2025",
    skills: [
      "Java Fundamentals",
      "OOP Concepts",
      "Frontend Development",
      "Database Integration",
    ],
    tech: [
      "Java",
      "Servlets",
      "JSP",
      "Spring",
      "MySQL",
      "JDBC",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex programming logic and database operations into clean, manageable steps.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Evaluating system bottlenecks, optimizing database queries, and designing logical flows.",
  },
  {
    name: "Adaptability",
    icon: "🔄",
    desc: "Quickly learning new frameworks, libraries, and engineering tools in fast-paced environments.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Prioritizing tasks and meeting project milestones effectively during development.",
  },
];

export const projects = [
  {
    id: "easybuy",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "easyBuy – E-Commerce Web Application",
    description:
      "Developed a full-stack e-commerce web application that allows users to register, log in, browse products, view details, manage shopping carts, save favorites to a wishlist, and manage orders through an intuitive shopping interface.",
    techTags: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    links: {
      github: "https://github.com/gogulrajendran13-stack",
      demo: "",
    },
    isFlagship: true,
  },
  {
    id: "smart-shopping-trolley",
    number: "02",
    badge: "IoT Project",
    title: "Smart Shopping Trolley – IoT-Based Smart Shopping System",
    description:
      "Developed an IoT-based smart shopping trolley that uses RFID technology to identify products and sensor-based weight measurement to support automated shopping operations with real-time display feedback.",
    techTags: [
      "C",
      "ESP32",
      "RFID",
      "HX711",
      "I2C",
      "SPI",
      "Wi-Fi",
      "OLED/TFT Display",
    ],
    links: {
      github: "https://github.com/gogulrajendran13-stack",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "daywise",
    number: "03",
    badge: "Productivity App",
    title: "dayWise – ToDo and Productivity Management Web Application",
    description:
      "Developed a Java-based productivity platform that helps users organize daily tasks, manage projects and categories, track goals, and improve productivity through a centralized dashboard.",
    techTags: [
      "Java",
      "Servlets",
      "JSP",
      "JDBC",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    links: {
      github: "https://github.com/gogulrajendran13-stack",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/gogul6006",
};

export const education = {
  degree: "B.E. Electronics and Communication Engineering",
  institution: "Government College of Engineering, Srirangam",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Software Engineer",
    "Java · Servlets · JDBC · MySQL",
    "Building scalable full-stack web solutions",
  ],
  credential: "B.E. Electronics and Communication Engineering",
  copyright: `© ${new Date().getFullYear()} GOGUL R | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

