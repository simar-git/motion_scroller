import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ModuleCard({
  module,
  trackTitle,
  isActive,
  onClick,
  onOpenModal,
  customScale,
  customShadow,
  customOpacity,
  customY
}) {
  const formattedNumber = module.id < 10 ? `0${module.id}` : `${module.id}`;

  // Special Last Tile: Ultra-Clean High-Res Certificate Tile (w-[520px] max-w-[90vw] h-[340px])
  if (module.isForm || module.isCertificate) {
    return (
      <motion.div
        layout
        style={{
          scale: customScale || (isActive ? 1.05 : 0.95),
          boxShadow: customShadow || (isActive ? "0 20px 50px -10px rgba(0, 168, 132, 0.32), 0 0 30px rgba(0, 168, 132, 0.18)" : "0 4px 12px rgba(0,0,0,0.08)"),
          y: customY || 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className={`relative w-[520px] max-w-[90vw] h-[340px] rounded-3xl transition-colors duration-300 origin-center bg-white ${
          isActive
            ? "border-2 border-[#00A884] z-50 opacity-100"
            : "border border-slate-200/90 z-10 opacity-75"
        }`}
      >
        {/* Crystal Clear High-Resolution Vector Certificate Frame */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white p-5 sm:p-6 flex flex-col justify-between select-none border-2 border-[#00A884]">
          
          {/* Geometric Teal & Dark Slate Corner Accents (Top Left) */}
          <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none z-0" viewBox="0 0 100 100">
            <path d="M 0 0 L 65 0 L 0 65 Z" fill="#00A884" opacity="0.85" />
            <path d="M 0 0 L 40 0 L 0 40 Z" fill="#0F172A" />
            <path d="M 0 20 L 85 0 L 100 0 L 0 30 Z" fill="#2CBA96" opacity="0.45" />
          </svg>

          {/* Geometric Teal & Dark Slate Corner Accents (Bottom Right) */}
          <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none z-0" viewBox="0 0 100 100">
            <path d="M 100 100 L 35 100 L 100 35 Z" fill="#00A884" opacity="0.85" />
            <path d="M 100 100 L 60 100 L 100 60 Z" fill="#0F172A" />
            <path d="M 100 80 L 15 100 L 0 100 L 100 70 Z" fill="#2CBA96" opacity="0.45" />
          </svg>

          {/* Double Inner Border Line */}
          <div className="absolute inset-2.5 border border-[#00A884]/60 rounded-2xl pointer-events-none z-10" />

          {/* Top Header Row: Reference No, Centered Logo, Gold Award Badge */}
          <div className="relative z-20 w-full flex items-center justify-center pt-0 min-h-[36px]">
            <div className="absolute -left-1 -top-1">
              <span className="text-[9px] font-sans text-slate-600 font-medium">
                Ref. <span className="font-mono text-[#0F172A] border-b border-slate-400 px-1 font-semibold">________</span>
              </span>
            </div>

            <div className="flex items-center justify-center text-center">
              <img
                src="/coderroots-logo.png"
                alt="Coder Roots"
                className="h-8.5 w-auto object-contain"
              />
            </div>

            {/* Realistic 3D Gold Star Award Ribbon Medal PNG Asset */}
            <div className="absolute right-0 -top-1">
              <img
                src="/gold-award-badge.png"
                alt="Gold Award Medal"
                className="h-10 w-auto object-contain mix-blend-multiply pointer-events-none"
              />
            </div>
          </div>

          {/* Center Body: Serif Title, Presentation, Recipient & Track */}
          <div className="relative z-20 text-center my-auto flex flex-col items-center px-2">
            <h2
              className="text-lg font-black italic tracking-widest text-[#0F172A] uppercase mb-0.5"
              style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
            >
              CERTIFICATE OF COMPLETION
            </h2>
            
            <p className="text-[11px] font-sans text-slate-600 mb-1 italic">
              This certificate is proudly presented to
            </p>

            {/* Recipient Name Underline */}
            <div className="w-4/5 pb-0.5 border-b border-slate-800 mb-1.5">
              <span className="text-lg font-bold text-[#00A884] tracking-wide font-sans">
                Honey Singh
              </span>
            </div>

            <p className="text-[9px] font-sans font-bold text-slate-800 uppercase tracking-widest mb-1">
              FOR SUCCESSFULLY COMPLETING TRAINING IN
            </p>

            {/* Dynamic Track Title Underline */}
            <div className="w-4/5 pb-0.5 border-b border-slate-700 mb-1.5">
              <span className="text-xs font-bold text-[#0F172A] font-sans">
                {trackTitle ? `${trackTitle} Track` : "Cyber Security Track"}
              </span>
            </div>

            {/* Dates */}
            <div className="flex items-center justify-center gap-5 text-[10px] font-sans text-slate-600">
              <span>From <strong className="border-b border-slate-400 px-1.5 text-[#0F172A]">Jan 2026</strong></span>
              <span>To <strong className="border-b border-slate-400 px-1.5 text-[#0F172A]">Aug 2026</strong></span>
            </div>
          </div>

          {/* Bottom Row: Signatures & ISO/IEC 27001 Emblem */}
          <div className="relative z-20 flex items-end justify-between text-center px-1.5">
            <div className="flex flex-col items-center">
              <svg width="75" height="16" viewBox="0 0 120 36" fill="none" className="mb-0.5">
                <path d="M 6 24 C 20 8, 35 32, 50 14 C 62 2, 75 30, 88 18 C 95 12, 105 22, 114 16" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <div className="w-24 border-t border-slate-800 pt-0.5">
                <span className="text-[8px] font-sans font-bold text-slate-700 block">
                  Director's Signature
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-0.5">
                <div className="w-4 h-4 rounded-full border border-slate-800 flex items-center justify-center text-[5px] font-bold text-slate-900 font-sans">
                  ISO
                </div>
                <div className="w-4 h-4 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center text-[5px] font-bold font-sans">
                  IAF
                </div>
              </div>
              <span className="text-[7.5px] font-sans font-bold text-slate-700">
                ISO/IEC- 27001:2022
              </span>
            </div>

            <div className="flex flex-col items-center">
              <svg width="75" height="16" viewBox="0 0 120 36" fill="none" className="mb-0.5">
                <path d="M 10 20 C 25 10, 40 28, 55 12 C 70 24, 85 8, 100 20" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <div className="w-24 border-t border-slate-800 pt-0.5">
                <span className="text-[8px] font-sans font-bold text-slate-700 block">
                  Instructor's Signature
                </span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    );
  }

  // Standard Module Card
  return (
    <motion.div
      layout
      onClick={onClick}
      whileHover={{ scale: isActive ? 1.04 : 1.01, y: -2 }}
      style={{
        opacity: customOpacity !== undefined ? customOpacity : undefined
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`relative w-[360px] p-7 pt-9 rounded-3xl cursor-pointer transition-all duration-300 ${
        isActive
          ? "bg-white border-2 border-[#00A884] border-t-4 border-[#00A884] shadow-[0_12px_30px_rgba(0,168,132,0.18)] scale-105 z-30"
          : "bg-white/95 border border-slate-200/90 shadow-sm hover:border-slate-300 z-10 opacity-90 hover:opacity-100"
      }`}
    >
      {/* Coder Roots Squircle Green Number Badge */}
      <div
        className={`absolute -top-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg tracking-tight transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-b from-[#10B981] via-[#00A884] to-[#008f70] text-white shadow-[0_8px_16px_rgba(0,168,132,0.28)] scale-105"
            : "bg-slate-300 text-slate-700 shadow-xs"
        }`}
      >
        {formattedNumber}
      </div>

      {/* Main Title */}
      <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3 leading-tight tracking-tight">
        {module.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 mb-6 leading-relaxed font-normal min-h-[44px]">
        {module.description}
      </p>

      {/* Action Link at Bottom */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal(module);
        }}
        className="inline-flex items-center gap-2 text-sm font-bold text-[#00A884] hover:text-[#008f70] transition-all group"
      >
        <span>View Syllabus</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}
