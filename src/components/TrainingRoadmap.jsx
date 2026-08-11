import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import ModuleCard from "./ModuleCard";
import CyberMascot from "./CyberMascot";
import ModuleDetailModal from "./ModuleDetailModal";

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
  const halfDx = (p1.x - p0.x) / 2;

  const c1 = { x: p0.x + halfDx, y: p0.y };
  const c2 = { x: p0.x + halfDx, y: p1.y };

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

export default function TrainingRoadmap({ track }) {
  const modulesData = track ? track.modules : [];
  const [activeModuleId, setActiveModuleId] = useState(1);
  const [activeModalModule, setActiveModalModule] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  const containerRef = useRef(null);

  // TRISEC LABS PINNED STICKY SCROLL PATTERN:
  // Target outer container for vertical scroll progress [0, 1]
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Ultra-Smooth Premium Spring physics for buttery natural page scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.0001
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard Arrow Keys support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalModule) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        jumpToModule(Math.min(modulesData.length, activeModuleId + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        jumpToModule(Math.max(1, activeModuleId - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModuleId, activeModalModule, modulesData.length]);

  // Translate canvas to center active module horizontally
  const startX = windowWidth / 2 - 350;
  const endX = windowWidth / 2 - 3950;
  const translateX = useTransform(smoothProgress, [0, 1], [startX, endX]);

  // GRADUAL BACKGROUND & VECTOR PATTERN FADE-OUT: Fades away as Certificate approaches (t = 0.84 -> 0.96)
  const bgAndMascotOpacity = useTransform(smoothProgress, [0.84, 0.96], [1, 0]);

  // SMOOTH HEADER FADE OUT: Top active track heading smoothly fades out (1 -> 0) when Certificate arrives
  const headerOpacity = useTransform(smoothProgress, [0.82, 0.93], [1, 0]);

  // SMOOTH VERTICAL OFFSET: Shifts certificate to exact middle (-20px)
  const certificateY = useTransform(smoothProgress, [0.84, 0.96], [0, -20]);

  // HERO ZOOM: Starts at 0.95x tile size and expands smoothly to 1.22x
  const certificateScale = useTransform(
    smoothProgress,
    [0.82, 0.90, 0.97, 1.0],
    [0.95, 1.05, 1.15, 1.22]
  );

  // Ultra-Soft Ambient Glowing Shadow that blends seamlessly without harsh cutoffs
  const certificateShadow = useTransform(
    smoothProgress,
    [0.82, 0.90, 0.97, 1.0],
    [
      "0px 4px 15px rgba(0, 168, 132, 0.08)",
      "0px 10px 25px rgba(0, 168, 132, 0.15)",
      "0px 20px 45px rgba(0, 168, 132, 0.24)",
      "0px 25px 60px -10px rgba(0, 168, 132, 0.32)"
    ]
  );

  // LAPTOP MASCOT COORDINATES: Positioned ON TOP of the top edge of the module cards (y - 48)
  const robotX = useTransform(smoothProgress, (t) => getBezierPointAt(t, modulesData).x - 24);
  const robotY = useTransform(smoothProgress, (t) => getBezierPointAt(t, modulesData).y - 48);

  useEffect(() => {
    const unsubProgress = smoothProgress.on("change", (latest) => {
      const index = Math.min(
        modulesData.length - 1,
        Math.max(0, Math.round(latest * (modulesData.length - 1)))
      );
      if (modulesData[index]) {
        setActiveModuleId(modulesData[index].id);
      }
    });

    return () => {
      unsubProgress();
    };
  }, [smoothProgress, modulesData]);

  const jumpToModule = (id) => {
    if (!containerRef.current) return;
    const targetProgress = (id - 1) / (modulesData.length - 1);
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: containerTop + targetProgress * containerHeight,
      behavior: "smooth"
    });
    setActiveModuleId(id);
  };

  // Generate SVG Bezier path string
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
    /* Outer Tall Scroll Track Container: Pins section during vertical page scroll */
    <div
      ref={containerRef}
      className="relative w-full h-[320vh] bg-white font-sans"
    >
      {/* Sticky Viewport Window: Pins right below top sticky navbar (top-[64px]) */}
      <div className="sticky top-[64px] w-full h-[calc(100vh-64px)] overflow-hidden flex flex-col justify-between items-center border-t border-b border-slate-100 bg-white">

        {/* Dynamic Vector Pattern Overlay Layer across Entire Viewport */}
        <motion.div
          style={{ opacity: bgAndMascotOpacity }}
          className="absolute inset-0 w-full h-full bg-vector-pattern pointer-events-none z-0"
        />

        {/* Selected Track Active Title & Metrics Header (Always 100% Visible Below Sticky Navbar) */}
        <motion.div
          style={{ opacity: headerOpacity }}
          className="relative z-20 text-center pt-6 sm:pt-8 pb-2 px-4 max-w-3xl mx-auto transition-opacity duration-300 pointer-events-none"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-2">
            {track?.title}
          </h2>
          <div className="w-24 h-1 bg-[#00A884] rounded-full mx-auto mb-3 shadow-[0_0_12px_rgba(0,168,132,0.6)]" />
          <div className="flex items-center justify-center gap-5 text-xs sm:text-sm font-semibold text-slate-600">
            <span><strong className="text-[#0F172A]">{track?.stagesCount}</strong> Stages</span>
            <span className="text-slate-300">•</span>
            <span><strong className="text-[#0F172A]">{track?.labsCount}</strong> Labs</span>
            <span className="text-slate-300">•</span>
            <span><strong className="text-[#0F172A]">{track?.hoursCount}</strong> Hours</span>
          </div>
        </motion.div>

        {/* Interactive Scroller Canvas Area */}
        <div className="relative w-full h-[480px] overflow-visible flex items-center justify-center z-10 my-auto">
          
          {/* Draggable & Animatable Canvas */}
          <motion.div
            style={{ x: translateX }}
            drag="x"
            dragConstraints={{ left: endX - 200, right: startX + 200 }}
            className="absolute w-[4400px] h-[480px] top-0 left-0"
          >
            {/* SVG Bezier Path Layer */}
            <motion.svg
              style={{ opacity: bgAndMascotOpacity }}
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
            >
              <defs>
                <linearGradient id="coderrootsGreenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00A884" stopOpacity="1" />
                  <stop offset="50%" stopColor="#2CBA96" stopOpacity="1" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
                </linearGradient>

                <filter id="tealGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Dashed Track Line */}
              <path
                d={generateSvgPath()}
                fill="none"
                stroke="#00A884"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                opacity="0.3"
              />

              {/* Dynamic Scroll-Driven Animated Pure Green Path Line */}
              <motion.path
                d={generateSvgPath()}
                fill="none"
                stroke="url(#coderrootsGreenGradient)"
                strokeWidth="4"
                filter="url(#tealGlow)"
                style={{
                  pathLength: smoothProgress
                }}
              />
            </motion.svg>

            {/* Continuous Floating Laptop Icon along Bezier Curve - PLACED ON TOP OF TILES (z-50) */}
            <motion.div
              style={{
                x: robotX,
                y: robotY,
                opacity: bgAndMascotOpacity
              }}
              className="absolute z-50 pointer-events-none"
            >
              <CyberMascot />
            </motion.div>

            {/* Module Cards Placed Along the Roadmap */}
            {modulesData.map((module) => {
              const isActive = activeModuleId === module.id;
              const isCert = module.id === 7;

              return (
                <div
                  key={module.id}
                  style={{
                    position: "absolute",
                    left: `${module.x - (isCert ? 240 : 185)}px`,
                    top: `${module.y}px`
                  }}
                  className={isCert ? "z-40" : "z-20"}
                >
                  <ModuleCard
                    module={module}
                    trackTitle={track?.title}
                    isActive={isActive}
                    onClick={() => jumpToModule(module.id)}
                    onOpenModal={(mod) => {
                      if (!mod.isCertificate && !mod.isForm) {
                        setActiveModalModule(mod);
                      }
                    }}
                    customScale={isCert ? certificateScale : undefined}
                    customShadow={isCert ? certificateShadow : undefined}
                    customOpacity={!isCert ? bgAndMascotOpacity : undefined}
                    customY={isCert ? certificateY : undefined}
                  />
                </div>
              );
            })}
          </motion.div>

        </div>

        {/* Empty Bottom Spacer */}
        <div className="h-4" />
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
