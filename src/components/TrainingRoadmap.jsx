import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import ModuleCard from "./ModuleCard";
import CyberMascot from "./CyberMascot";
import ModuleDetailModal from "./ModuleDetailModal";

export const modulesData = [
  {
    id: 1,
    code: "MODULE 01",
    title: "Reconnaissance & OSINT",
    level: "Beginner",
    description: "Passive and active OSINT, footprinting, and attack surface mapping.",
    duration: "5h",
    labsCount: 4,
    skillsCount: 2,
    x: 350,
    y: 280,
    topics: [
      "Subdomain & Asset Enumeration",
      "Passive DNS & Certificate Transparency",
      "Shodan, Censys & Google Dorking",
      "Social Engineering & Metadata Extraction"
    ],
    labs: [
      { id: "lab-101", title: "Target Asset Surface Discovery", difficulty: "Easy", duration: "45m" },
      { id: "lab-102", title: "Automated Subdomain Bruteforcing", difficulty: "Easy", duration: "60m" },
      { id: "lab-103", title: "Exploiting Exposed Cloud Storage & S3 Buckets", difficulty: "Medium", duration: "90m" },
      { id: "lab-104", title: "OSINT Threat Intelligence Mapping", difficulty: "Medium", duration: "60m" }
    ]
  },
  {
    id: 2,
    code: "MODULE 02",
    title: "Network Discovery & Vulnerability Assessment",
    level: "Intermediate",
    description: "Port scanning, service enumeration, and automated vulnerability scanning.",
    duration: "6h",
    labsCount: 5,
    skillsCount: 3,
    x: 950,
    y: 340,
    topics: [
      "Nmap Scripting Engine (NSE) & Stealth Scans",
      "Masscan High-Speed Network Recon",
      "Service Fingerprinting & Version Detection",
      "Automated Vulnerability Assessment with Nessus"
    ],
    labs: [
      { id: "lab-201", title: "Evasion Techniques in Nmap Scanning", difficulty: "Medium", duration: "60m" },
      { id: "lab-202", title: "SMB & Active Directory Reconnaissance", difficulty: "Medium", duration: "75m" },
      { id: "lab-203", title: "Custom NSE Script Development", difficulty: "Hard", duration: "90m" },
      { id: "lab-204", title: "Vulnerability Scanning & CVSS Scoring", difficulty: "Medium", duration: "60m" },
      { id: "lab-205", title: "Network Service Enumeration", difficulty: "Medium", duration: "75m" }
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
    skillsCount: 2,
    x: 1550,
    y: 270,
    topics: [
      "Metasploit & Custom Exploit Crafting",
      "Linux & Windows Local Privilege Escalation",
      "Credential Harvesting & Password Cracking",
      "Pivot Techniques & SSH Tunneling"
    ],
    labs: [
      { id: "lab-301", title: "Buffer Overflow & Memory Exploitation", difficulty: "Hard", duration: "120m" },
      { id: "lab-302", title: "Linux Kernel & SUID Exploitation", difficulty: "Medium", duration: "90m" },
      { id: "lab-303", title: "Windows Token Impersonation & Potato Attacks", difficulty: "Hard", duration: "105m" },
      { id: "lab-304", title: "Pivoting Through Multi-Homed Hosts", difficulty: "Hard", duration: "105m" }
    ]
  },
  {
    id: 4,
    code: "MODULE 04",
    title: "Cloud Security & Container Hacking",
    level: "Advanced",
    description: "AWS IAM misconfigurations, Docker breakouts, and Kubernetes cluster compromise.",
    duration: "8h",
    labsCount: 6,
    skillsCount: 4,
    x: 2150,
    y: 340,
    topics: [
      "AWS IAM Policy Misconfigurations & Privilege Escalation",
      "Docker Socket Hijacking & Container Escapes",
      "Kubernetes API Exploitation & RBAC Bypass",
      "Cloud Infrastructure as Code (IaC) Auditing"
    ],
    labs: [
      { id: "lab-401", title: "AWS IAM Policy Escalation Chains", difficulty: "Hard", duration: "90m" },
      { id: "lab-402", title: "Docker Socket Container Breakout", difficulty: "Hard", duration: "90m" },
      { id: "lab-403", title: "Kubernetes Secret Extraction & Pod Compromise", difficulty: "Hard", duration: "120m" },
      { id: "lab-404", title: "CloudTrail Evasion & Anti-Forensics", difficulty: "Hard", duration: "90m" },
      { id: "lab-405", title: "Terraform Misconfiguration Exploitation", difficulty: "Medium", duration: "60m" },
      { id: "lab-406", title: "Serverless Lambda Function Injection", difficulty: "Medium", duration: "75m" }
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
    skillsCount: 3,
    x: 2750,
    y: 270,
    topics: [
      "Direct & Indirect Prompt Injection Attacks",
      "Retrieval-Augmented Generation (RAG) Vector Poisoning",
      "AI Agent Tool Hijacking & Remote Code Execution",
      "Model Inversion & System Prompt Extraction"
    ],
    labs: [
      { id: "lab-501", title: "Indirect Prompt Injection via Web Scraping", difficulty: "Medium", duration: "60m" },
      { id: "lab-502", title: "Poisoning Vector Databases in RAG Pipelines", difficulty: "Hard", duration: "90m" },
      { id: "lab-503", title: "Hijacking LLM Agent Function Calls", difficulty: "Hard", duration: "90m" },
      { id: "lab-504", title: "Bypassing Guardrails via Multi-turn Jailbreaks", difficulty: "Medium", duration: "60m" },
      { id: "lab-505", title: "Model Inversion & System Prompt Extraction", difficulty: "Medium", duration: "60m" }
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
    skillsCount: 5,
    x: 3350,
    y: 340,
    topics: [
      "Command & Control (C2) Infrastructure Setup",
      "Active Directory Kerberoasting & AS-REP Roasting",
      "EDR Evasion & Process Hollowing",
      "Golden Ticket & Persistence Mechanics"
    ],
    labs: [
      { id: "lab-601", title: "C2 Infrastructure Malleable Profile Design", difficulty: "Hard", duration: "90m" },
      { id: "lab-602", title: "Active Directory Domain Escalation", difficulty: "Hard", duration: "120m" },
      { id: "lab-603", title: "Bypassing Endpoint Detection & Response (EDR)", difficulty: "Expert", duration: "150m" },
      { id: "lab-604", title: "Golden & Silver Ticket Forgery", difficulty: "Hard", duration: "90m" },
      { id: "lab-605", title: "Kerberoasting & Offline Hash Cat Cracking", difficulty: "Medium", duration: "60m" },
      { id: "lab-606", title: "NTLM Relay & AD CS Certificate Abuse", difficulty: "Expert", duration: "120m" },
      { id: "lab-607", title: "DLL Side-Loading & Process Injection", difficulty: "Hard", duration: "90m" },
      { id: "lab-608", title: "Final Enterprise Red Team Assessment", difficulty: "Expert", duration: "240m" }
    ]
  }
];

// Helper to calculate (x, y, angle) on cubic Bezier curve at progress t [0, 1]
function getBezierPointAt(t, modules) {
  if (!modules || modules.length === 0) return { x: 0, y: 0, angle: 0 };
  if (modules.length === 1) return { x: modules[0].x, y: modules[0].y, angle: 0 };

  const numSegments = modules.length - 1;
  const clampedT = Math.max(0, Math.min(1, t));
  const segmentProgress = clampedT * numSegments;
  const i = Math.min(numSegments - 1, Math.floor(segmentProgress));
  const u = segmentProgress - i;

  const p0 = modules[i];
  const p1 = modules[i + 1];
  const dx = (p1.x - p0.x) / 2;

  const c1 = { x: p0.x + dx, y: p0.y };
  const c2 = { x: p0.x + dx, y: p1.y };

  const invU = 1 - u;
  const invU2 = invU * invU;
  const invU3 = invU2 * invU;
  const u2 = u * u;
  const u3 = u2 * u;

  const x = invU3 * p0.x + 3 * invU2 * u * c1.x + 3 * invU * u2 * c2.x + u3 * p1.x;
  const y = invU3 * p0.y + 3 * invU2 * u * c1.y + 3 * invU * u2 * c2.y + u3 * p1.y;

  const dxTangent = 3 * invU2 * (c1.x - p0.x) + 6 * invU * u * (c2.x - c1.x) + 3 * u2 * (p1.x - c2.x);
  const dyTangent = 3 * invU2 * (c1.y - p0.y) + 6 * invU * u * (c2.y - c1.y) + 3 * u2 * (p1.y - c2.y);
  const angle = (Math.atan2(dyTangent, dxTangent) * 180) / Math.PI;

  return { x, y, angle };
}

export default function TrainingRoadmap() {
  const [activeModuleId, setActiveModuleId] = useState(1);
  const [activeModalModule, setActiveModalModule] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  // Raw Motion Value for scroll progress [0, 1]
  const rawProgress = useMotionValue(0);

  // Smooth spring physics for fluid motion
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.0001
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intercept mouse wheel & trackpad to advance/rewind horizontal progress smoothly
  useEffect(() => {
    const handleWheel = (e) => {
      if (activeModalModule) return; // Allow modal scroll

      e.preventDefault();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      const step = delta / 1800;

      rawProgress.set(Math.max(0, Math.min(1, rawProgress.get() + step)));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeModalModule, rawProgress]);

  // Touch Swipe navigation support
  const touchStartY = useRef(0);
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (activeModalModule) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (activeModalModule) return;
      e.preventDefault();
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;
      touchStartY.current = currentY;

      const step = deltaY / 1200;
      rawProgress.set(Math.max(0, Math.min(1, rawProgress.get() + step)));
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeModalModule, rawProgress]);

  // Keyboard Arrow Keys support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalModule) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        jumpToModule(Math.min(modulesData.length, activeModuleId + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        jumpToModule(Math.max(1, activeModuleId - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModuleId, activeModalModule]);

  // Translate canvas to center active module horizontally
  const startX = windowWidth / 2 - 350;
  const endX = windowWidth / 2 - 3350;
  const translateX = useTransform(smoothProgress, [0, 1], [startX, endX]);

  // Robot coordinates & tilt angle transforms
  const robotX = useTransform(smoothProgress, (t) => getBezierPointAt(t, modulesData).x - 22);
  const robotY = useTransform(smoothProgress, (t) => getBezierPointAt(t, modulesData).y - 65);
  const robotAngle = useTransform(smoothProgress, (t) => getBezierPointAt(t, modulesData).angle);

  const [currentAngle, setCurrentAngle] = useState(0);

  useEffect(() => {
    const unsubAngle = robotAngle.on("change", (latest) => setCurrentAngle(latest));
    const unsubProgress = smoothProgress.on("change", (latest) => {
      const index = Math.min(
        modulesData.length - 1,
        Math.max(0, Math.round(latest * (modulesData.length - 1)))
      );
      setActiveModuleId(modulesData[index].id);
    });

    return () => {
      unsubAngle();
      unsubProgress();
    };
  }, [robotAngle, smoothProgress]);

  const jumpToModule = (id) => {
    const targetProgress = (id - 1) / (modulesData.length - 1);
    rawProgress.set(targetProgress);
    setActiveModuleId(id);
  };

  // SVG Bezier path string
  const generateSvgPath = () => {
    if (modulesData.length === 0) return "";
    let path = `M ${modulesData[0].x} ${modulesData[0].y}`;

    for (let i = 0; i < modulesData.length - 1; i++) {
      const p1 = modulesData[i];
      const p2 = modulesData[i + 1];
      const dx = (p2.x - p1.x) / 2;
      const control1X = p1.x + dx;
      const control1Y = p1.y;
      const control2X = p1.x + dx;
      const control2Y = p2.y;

      path += ` C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${p2.x} ${p2.y}`;
    }
    return path;
  };

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-slate-50 select-none font-sans overflow-hidden cursor-grab active:cursor-grabbing"
      style={{
        backgroundImage: "radial-gradient(#cbd5e1 1.2px, transparent 1.2px)",
        backgroundSize: "40px 40px"
      }}
    >
      {/* 100% Fixed Viewport Pin - Clean Light Theme */}
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        
        {/* Draggable & Animatable Canvas */}
        <motion.div
          style={{ x: translateX }}
          drag="x"
          dragConstraints={{ left: endX - 200, right: startX + 200 }}
          className="absolute w-[3800px] h-[700px] top-[calc(50%-350px)] left-0"
        >
          {/* SVG Bezier Path Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Background Red Dashed Path Line */}
            <path
              d={generateSvgPath()}
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Continuous Flying Robot Mascot along Bezier Curve */}
          <motion.div
            style={{
              x: robotX,
              y: robotY
            }}
            className="absolute z-40 pointer-events-none"
          >
            <CyberMascot angle={currentAngle} />
          </motion.div>

          {/* Module Cards Placed Along the Roadmap */}
          {modulesData.map((module) => {
            const isActive = activeModuleId === module.id;

            return (
              <div
                key={module.id}
                style={{
                  position: "absolute",
                  left: `${module.x - 175}px`,
                  top: `${module.y}px`
                }}
                className="z-20"
              >
                <ModuleCard
                  module={module}
                  isActive={isActive}
                  onClick={() => jumpToModule(module.id)}
                  onOpenModal={(mod) => setActiveModalModule(mod)}
                />
              </div>
            );
          })}
        </motion.div>

      </div>

      {/* Modal Drawer */}
      {activeModalModule && (
        <ModuleDetailModal
          module={activeModalModule}
          onClose={() => setActiveModalModule(null)}
        />
      )}
    </div>
  );
}
