export const tracksData = [
  {
    id: "cyber-security",
    title: "Cyber Security",
    tag: "POPULAR",
    stagesCount: 7,
    labsCount: 28,
    hoursCount: "44+",
    description: "Master offensive security, penetration testing, and red team enterprise tactics.",
    modules: [
      {
        id: 1,
        code: "MODULE 01",
        title: "Reconnaissance & OSINT",
        level: "Beginner",
        description: "Passive and active OSINT, footprinting, and attack surface mapping.",
        duration: "5h",
        labsCount: 4,
        x: 350,
        y: 75,
        topics: [
          "Subdomain & Asset Enumeration",
          "Passive DNS & Certificate Transparency",
          "Shodan, Censys & Google Dorking",
          "Social Engineering & Metadata Extraction"
        ]
      },
      {
        id: 2,
        code: "MODULE 02",
        title: "Network Discovery & Vulnerabilities",
        level: "Intermediate",
        description: "Port scanning, service enumeration, and automated vulnerability scanning.",
        duration: "6h",
        labsCount: 5,
        x: 950,
        y: 125,
        topics: [
          "Nmap Scripting Engine (NSE) & Stealth Scans",
          "Masscan High-Speed Network Recon",
          "Service Fingerprinting & Version Detection",
          "Automated Vulnerability Assessment"
        ]
      },
      {
        id: 3,
        code: "MODULE 03",
        title: "Exploitation & Post-Exploitation",
        level: "Intermediate",
        description: "Exploit execution, payload delivery, privilege escalation, and lateral movement.",
        duration: "7h",
        labsCount: 4,
        x: 1550,
        y: 75,
        topics: [
          "Metasploit & Custom Exploit Crafting",
          "Linux & Windows Local Privilege Escalation",
          "Credential Harvesting & Password Cracking",
          "Pivot Techniques & SSH Tunneling"
        ]
      },
      {
        id: 4,
        code: "MODULE 04",
        title: "Cloud Security & Containers",
        level: "Advanced",
        description: "AWS IAM misconfigurations, Docker breakouts, and Kubernetes cluster compromise.",
        duration: "8h",
        labsCount: 6,
        x: 2150,
        y: 125,
        topics: [
          "AWS IAM Policy Misconfigurations",
          "Docker Socket Hijacking & Escapes",
          "Kubernetes API Exploitation & RBAC",
          "Infrastructure as Code Auditing"
        ]
      },
      {
        id: 5,
        code: "MODULE 05",
        title: "AI & LLM Vulnerability Assessment",
        level: "Advanced",
        description: "Indirect prompt injection, RAG poisoning, model inversion, and jailbreaking tactics.",
        duration: "6h",
        labsCount: 5,
        x: 2750,
        y: 75,
        topics: [
          "Prompt Injection Attacks",
          "RAG Vector Database Poisoning",
          "LLM Agent Tool Hijacking & RCE",
          "Model Inversion & System Prompt Extraction"
        ]
      },
      {
        id: 6,
        code: "MODULE 06",
        title: "Red Team Adversarial Operations",
        level: "Expert",
        description: "Multi-stage enterprise attack chain, C2 infrastructure, and active directory takeover.",
        duration: "10h",
        labsCount: 8,
        x: 3350,
        y: 125,
        topics: [
          "Command & Control (C2) Infrastructure",
          "Active Directory Kerberoasting",
          "EDR Evasion & Process Hollowing",
          "Golden Ticket & Persistence Mechanics"
        ]
      },
      {
        id: 7,
        code: "FINAL STEP",
        title: "Certificate of Completion",
        level: "Certificate",
        description: "Official ISO/IEC 27001:2022 Coder Roots Certificate of Completion.",
        duration: "Instant",
        labsCount: 0,
        isCertificate: true,
        x: 3950,
        y: 75,
        topics: []
      }
    ]
  },
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    tag: "NEW RELEASE",
    stagesCount: 7,
    labsCount: 32,
    hoursCount: "50+",
    description: "Build full-stack web applications with MongoDB, Express.js, React.js, and Node.js.",
    modules: [
      {
        id: 1,
        code: "MODULE 01",
        title: "Modern JS ES6+ & DOM Fundamentals",
        level: "Beginner",
        description: "Master modern JavaScript, async/await, promises, closure, and ES modules.",
        duration: "6h",
        labsCount: 5,
        x: 350,
        y: 75,
        topics: [
          "Arrow Functions, Destructuring & Rest/Spread",
          "Asynchronous JS: Event Loop & Promises",
          "Fetch API, Axios & Async Handling",
          "DOM Manipulation & Event Listener Mechanics"
        ]
      },
      {
        id: 2,
        code: "MODULE 02",
        title: "React.js Architecture & Hooks",
        level: "Intermediate",
        description: "Component lifecycle, state management, custom hooks, and Tailwind styling.",
        duration: "8h",
        labsCount: 6,
        x: 950,
        y: 125,
        topics: [
          "useState, useEffect & useRef In-Depth",
          "Custom Hooks Development & Optimization",
          "Context API & Redux Toolkit State Management",
          "React Router v6 & Single Page Navigation"
        ]
      },
      {
        id: 3,
        code: "MODULE 03",
        title: "Node.js & Express.js REST APIs",
        level: "Intermediate",
        description: "Server architecture, middleware design, routing, and controller patterns.",
        duration: "7h",
        labsCount: 5,
        x: 1550,
        y: 75,
        topics: [
          "Node.js Event Loop & Module System",
          "Express Router & Custom Middleware Chains",
          "RESTful API Conventions & Error Handling",
          "File Uploads & Stream Management"
        ]
      },
      {
        id: 4,
        code: "MODULE 04",
        title: "MongoDB & Mongoose Data Modeling",
        level: "Advanced",
        description: "NoSQL schema design, indexing, complex aggregation pipelines, and ACID transactions.",
        duration: "8h",
        labsCount: 6,
        x: 2150,
        y: 125,
        topics: [
          "MongoDB Document Modeling & Schema Rules",
          "Mongoose Validation, Hooks & Population",
          "Aggregation Pipeline: $lookup, $group & $match",
          "Index Tuning & Performance Optimization"
        ]
      },
      {
        id: 5,
        code: "MODULE 05",
        title: "Full Stack Auth & Security",
        level: "Advanced",
        description: "JWT authentication, OAuth 2.0, HTTP-only cookies, password hashing, and CORS.",
        duration: "6h",
        labsCount: 5,
        x: 2750,
        y: 75,
        topics: [
          "Prompt Injection Attacks",
          "RAG Vector Database Poisoning",
          "LLM Agent Tool Hijacking & RCE",
          "Model Inversion & System Prompt Extraction"
        ]
      },
      {
        id: 6,
        code: "MODULE 06",
        title: "Docker Container & CI/CD Deployment",
        level: "Expert",
        description: "Containerize MERN apps with Docker Compose, Nginx reverse proxy, and Vercel/AWS.",
        duration: "9h",
        labsCount: 5,
        x: 3350,
        y: 125,
        topics: [
          "Multi-Stage Docker Builds for Node & React",
          "Docker Compose Networking & Service Links",
          "Nginx Reverse Proxy & SSL Configuration",
          "GitHub Actions CI/CD Pipeline Deployment"
        ]
      },
      {
        id: 7,
        code: "FINAL STEP",
        title: "Certificate of Completion",
        level: "Certificate",
        description: "Official ISO/IEC 27001:2022 Coder Roots Certificate of Completion.",
        duration: "Instant",
        labsCount: 0,
        isCertificate: true,
        x: 3950,
        y: 75,
        topics: []
      }
    ]
  }
];
