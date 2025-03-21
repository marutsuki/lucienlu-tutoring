type Difficulty = "Introductory" | "Beginner" | "Intermediate" | "Advanced";

export const difficultyDescriptions: Record<Difficulty, string> = {
  Introductory: "Recommended for students with no prior experience.",
  Beginner:
    "Recommended for students with basic knowledge of programming constructs and concepts.",
  Intermediate:
    "Recommended for students with decent exposure to software development via 2 or more tools.",
  Advanced:
    "Recommended for students that can confidently design and build a piece of software.",
};

type StudentCategory =
  | "Primary School Students"
  | "High School Students"
  | "University Students"
  | "Professional Developers"
  | "Non-Technical Professionals"
  | "VCE Students"
  | "HSC Students";

type ServiceTarget = StudentCategory;

export type TutoringService = {
  name: string;
  description?: string;
  points?: {
    title: string;
    description: string;
  }[];
  difficulty?: Difficulty;
  recommendedFor?: ServiceTarget[];
  techs?: string[];
  url: string;
  imageUrl: string;
};

type ServiceGroup = {
  name: string;
  services: TutoringService[];
};

export const tutoringServices: ServiceGroup[] = [
  {
    name: "General",
    services: [
      {
        name: "Web Development",
        url: "/web-dev",
        imageUrl: "/web-dev.jpg",
        description: `Learn how to build websites and web applications from scratch and manage the infrastructure of your software by harnessing the power of cloud.\n
              With flexibility in which technologies you want to use,
              this course will cover front-end UI development, back-end server development, database maintenance and migrations, and finally DevOps processes such as CI/CD, containerization, infra via code, on one of the big 3 cloud providers.`,
        techs: [
          "HTML",
          "CSS/SCSS",
          "Tailwind",
          "JavaScript/TypeScript",
          "React",
          "Java and Spring",
          "Node.js and Express",
          "SQL (Postgres)",
          "Docker",
          "GCP (Google Cloud Platform) or AWS (Amazon Web Services)",
        ],
        points: [
          {
            title: "Full-Stack Mastery",
            description:
              "Learn the complete web development lifecycle, from frontend UI/UX design to backend logic, database management, and cloud integrations and deployment. Gain hands-on experience with modern frameworks and best practices.",
          },
          {
            title: "Industry-Ready Skills",
            description:
              "Master CI/CD pipelines, cloud integrations, and scalable architectures to prepare for real-world development environments. Build projects that reflect in-demand industry standards.",
          },
          {
            title: "Personalized Mentorship & Practical Learning",
            description:
              "Get direct guidance from an experienced developer, with tailored lessons and hands-on projects that reinforce learning. Go beyond theory with real-world scenarios and debugging strategies.",
          },
        ],
        recommendedFor: ["University Students", "Professional Developers"],
        difficulty: "Advanced",
      },
      {
        name: "Web Development (Simple)",
        url: "/web-dev-simple",
        imageUrl: "/web-dev-simple.jpg",
        description: `A streamlined introduction to web development.\n
              This course covers the fundamentals of building a full-stack web application, including front-end development, back-end logic, and database integration, without the need for cloud, CI/CD, or containerization.`,
        techs: [
          "HTML",
          "CSS",
          "JavaScript/TypeScript",
          "React",
          "Node.js and Express",
          "SQL (SQLite) or NoSQL (MongoDB)",
        ],
        points: [
          {
            title: "Fundamental Web Development",
            description:
              "Learn how to structure, style, and develop interactive web applications with a focus on HTML, CSS, and JavaScript.",
          },
          {
            title: "Backend and Database Integration",
            description:
              "Understand how to build and connect a backend API with a database, handling user interactions and data management efficiently.",
          },
          {
            title: "Hands-On, No DevOps Complexity",
            description:
              "Deploy and run your web applications locally without worrying about cloud infrastructure, making it easier to grasp core development concepts.",
          },
        ],
        recommendedFor: ["High School Students", "University Students"],
        difficulty: "Intermediate",
      },
      {
        name: "Object Oriented Design",
        url: "/oop",
        imageUrl: "/oop.jpg",
        description: `Master the principles of Object-Oriented Programming (OOP) and design patterns.\n
              This course will teach you how to structure software using OOP concepts, focusing on encapsulation, inheritance, polymorphism, and abstraction.\n
              Learn how to apply these concepts to real-world applications and improve your software design skills.`,
        techs: ["Java", "TypeScript", "UML Diagram Tools"],
        points: [
          {
            title: "Solid OOP Foundations",
            description:
              "Gain a deep understanding of object-oriented principles such as encapsulation, inheritance, polymorphism, and abstraction.",
          },
          {
            title: "Design Patterns and Best Practices",
            description:
              "Learn how to implement proven design patterns to write maintainable, scalable, and reusable code.",
          },
          {
            title: "Practical Application",
            description:
              "Apply OOP principles to real-world projects and understand how to design software that is robust and adaptable.",
          },
        ],
        recommendedFor: [
          "High School Students",
          "University Students",
          "Professional Developers",
        ],
        difficulty: "Intermediate",
      },
      {
        name: "Introductory",
        url: "/introductory",
        imageUrl: "/introductory.jpg",
        description: `A beginner-friendly introduction to programming and software development.\n
              This course is designed for complete beginners who want to understand the fundamentals of coding, logic, and problem-solving.`,
        techs: ["Python", "JavaScript", "Scratch (for visual programming)"],
        points: [
          {
            title: "Learn to Code from Scratch",
            description:
              "No prior experience needed—start with the basics of programming logic and syntax through Python or Visual Programming.",
          },
          {
            title: "Problem-Solving and Computational Thinking",
            description:
              "Develop essential problem-solving skills and understand how computers process instructions.",
          },
          {
            title: "Project-Based Learning",
            description:
              "Work on beginner-friendly coding projects that reinforce key programming concepts in an engaging way.",
          },
        ],
        recommendedFor: ["High School Students", "Non-Technical Professionals"],
        difficulty: "Introductory",
      },
    ],
  },
  {
    name: "High School Curriculum",
    services: [
      {
        name: "HSC Software Design and Development",
        url: "/hsc-sdd",
        imageUrl: "/hsc-sdd.jpg",
        description:
          "Ace the HSC Software Design and Development course with targeted, expert-led tutoring. This course covers every core topic from the NSW Stage 6 SDD syllabus, including problem-solving techniques, software development cycles, algorithms, data structures, and object-oriented design. Learn how to write, plan, and evaluate software in alignment with HSC marking criteria, and gain confidence in both theory and practical skills.",
        techs: [
          "JavaScript",
          "Node.js",
          "Java",
          "Python",
          "UML",
          "Pseudocode",
          "HSC-style Exam Questions",
        ],
        points: [
          {
            title: "HSC Syllabus Mastery",
            description:
              "Covers all syllabus dot points including development methodologies, social and ethical issues, algorithm design, and software solutions using both procedural and OOP approaches.",
          },
          {
            title: "Past Paper Practice & Exam Prep",
            description:
              "Work through past HSC questions, receive model answers, and get insider tips on how to approach both short-answer and extended response sections.",
          },
          {
            title: "1:1 Feedback & Progress Tracking",
            description:
              "Stay on top of your progress with regular feedback, individual help, and personalized support tailored to your school assessments and exam goals.",
          },
        ],
        recommendedFor: ["High School Students", "HSC Students"],
        difficulty: "Intermediate",
      },
      {
        name: "VCE Software Development",
        url: "/vce-ac",
        imageUrl: "/vce-ac.jpg",
        description:
          "Boost your VCE Software Development results with expert tutoring designed around the VCAA study design. This course guides students through the full Software Development Process, including problem analysis, design tools, development using real code, and evaluation techniques. Perfect for preparing for SACs, the SAT (School-Assessed Task), and the end-of-year exam — with a focus on the skills and theory that matter most.",
        techs: [
          "Java",
          "Python",
          "UML",
          "Pseudocode",
          "ER and Data Flow Diagrams",
          "VCAA Exam Practice",
        ],
        points: [
          {
            title: "Full Study Design Coverage",
            description:
              "Covers all areas of Units 3 & 4: problem-solving methodology, data and information, design tools, programming practice, and evaluation criteria.",
          },
          {
            title: "Software Development in Practice",
            description:
              "Learn how to build functional software solutions with structured and object-oriented code — tailored to the VCE SAT requirements.",
          },
          {
            title: "Exam Preparation That Works",
            description:
              "Practice with VCAA-style exam questions, receive high-scoring model responses, and learn time-saving strategies for both short- and extended-answer sections.",
          },
          {
            title: "Individualised Support & Progress Tracking",
            description:
              "Get help with your school-assessed tasks, SACs, and theory content through tailored lessons, 1-on-1 feedback, and regular skill check-ins.",
          },
        ],
        recommendedFor: ["High School Students", "VCE Students"],
        difficulty: "Intermediate",
      },
    ],
  },
  {
    name: "Elementary",
    services: [
      {
        name: "Coding for Kids",
        url: "/coding-for-kids",
        imageUrl: "/coding-for-kids.jpg",
        description: `A fun and interactive introduction to coding designed specifically for kids!\n
            This course makes learning to code exciting through games, animations, and simple projects.\n
            Kids will develop problem-solving skills and computational thinking while creating their own interactive stories, games, and mini-apps.`,
        techs: [
          "Scratch (Block-Based Programming)",
          "Python (Basic Syntax)",
          "Visual Programming Tools",
        ],
        points: [
          {
            title: "Creative and Fun Learning",
            description:
              "Kids will learn programming through games, animations, and storytelling, making coding an exciting adventure.",
          },
          {
            title: "Fundamentals of Coding",
            description:
              "Introduce key programming concepts like loops, conditions, and variables using simple, visual tools.",
          },
          {
            title: "Hands-On, Project-Based Approach",
            description:
              "Kids will be given the opportunity to work on a fun, interactive project that reinforces learning and lets kids express their creativity.",
          },
        ],
        recommendedFor: ["Primary School Students"],
        difficulty: "Introductory",
      },
    ],
  },
];
