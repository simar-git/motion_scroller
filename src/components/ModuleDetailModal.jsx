import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Award } from "lucide-react";

export default function ModuleDetailModal({ module, onClose }) {
  if (!module) return null;

  // Certificate Modal Preview (Ultra-Clear High-Res Vector Certificate Component with Centered PNG Logo)
  if (module.isForm || module.isCertificate) {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/30 backdrop-blur-xs">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer"
          />

          {/* High Resolution Vector Certificate Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 z-10 flex flex-col gap-4"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#E6FAF5] text-[#00A884]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#0F172A]">
                    Coder Roots Official Certificate
                  </h2>
                  <p className="text-xs text-slate-500">
                    ISO/IEC 27001:2022 Certified Training Program
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-700 transition-colors rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Res Vector Certificate Frame */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-white p-7 flex flex-col justify-between select-none border-2 border-[#00A884] shadow-sm">
              
              {/* Corner Accents (Top Left) */}
              <svg className="absolute top-0 left-0 w-32 h-32 pointer-events-none z-0" viewBox="0 0 100 100">
                <path d="M 0 0 L 65 0 L 0 65 Z" fill="#00A884" opacity="0.85" />
                <path d="M 0 0 L 40 0 L 0 40 Z" fill="#0F172A" />
                <path d="M 0 20 L 85 0 L 100 0 L 0 30 Z" fill="#2CBA96" opacity="0.45" />
              </svg>

              {/* Corner Accents (Bottom Right) */}
              <svg className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none z-0" viewBox="0 0 100 100">
                <path d="M 100 100 L 35 100 L 100 35 Z" fill="#00A884" opacity="0.85" />
                <path d="M 100 100 L 60 100 L 100 60 Z" fill="#0F172A" />
                <path d="M 100 80 L 15 100 L 0 100 L 100 70 Z" fill="#2CBA96" opacity="0.45" />
              </svg>

              {/* Inner Border Line */}
              <div className="absolute inset-3.5 border border-[#00A884]/60 rounded-2xl pointer-events-none z-10" />

              {/* Top Header Row */}
              <div className="relative z-20 w-full flex items-center justify-center pt-0 min-h-[44px]">
                
                {/* Reference No Pushed Bit Further Left */}
                <div className="absolute -left-3 -top-1.5">
                  <span className="text-[10px] font-sans text-slate-600 font-medium">
                    Reference No. <span className="font-mono text-[#0F172A] border-b border-slate-400 px-2 font-semibold">________</span>
                  </span>
                </div>

                {/* Official Centered Coder Roots Logo PNG */}
                <div className="flex items-center justify-center text-center">
                  <img
                    src="/coderroots-logo.png"
                    alt="Coder Roots"
                    className="h-11 w-auto object-contain"
                  />
                </div>

                {/* Gold Star Award Medal (Top-Right) */}
                <div className="absolute right-1 top-0 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#d97706] via-[#f59e0b] to-[#fbbf24] border-2 border-white shadow-md flex items-center justify-center text-white text-sm font-bold font-sans">
                    ★
                  </div>
                  <div className="flex gap-0.5 -mt-1">
                    <div className="w-2 h-3.5 bg-[#b91c1c] rounded-b-xs" />
                    <div className="w-2 h-3.5 bg-[#b91c1c] rounded-b-xs" />
                  </div>
                </div>
              </div>

              {/* Center Body */}
              <div className="relative z-20 text-center my-auto flex flex-col items-center px-4">
                <h2
                  className="text-2xl font-black italic tracking-widest text-[#0F172A] uppercase mb-0.5"
                  style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
                >
                  CERTIFICATE OF COMPLETION
                </h2>
                
                <p className="text-xs font-sans text-slate-600 mb-3 italic">
                  This certificate is proudly presented to
                </p>

                <div className="w-4/5 pb-1 border-b border-slate-800 mb-3">
                  <span className="text-2xl font-bold text-[#00A884] tracking-wide font-sans">
                    Shyam Kumar
                  </span>
                </div>

                <p className="text-[10px] font-sans font-bold text-slate-800 uppercase tracking-widest mb-2">
                  FOR SUCCESSFULLY COMPLETING TRAINING IN
                </p>

                <div className="w-4/5 pb-1 border-b border-slate-700 mb-3">
                  <span className="text-sm font-bold text-[#0F172A] font-sans">
                    Cyber Security & AI Security Track
                  </span>
                </div>

                <div className="flex items-center justify-center gap-8 text-[11px] font-sans text-slate-600">
                  <span>From <strong className="border-b border-slate-400 px-3 text-[#0F172A]">Jan 2026</strong></span>
                  <span>To <strong className="border-b border-slate-400 px-3 text-[#0F172A]">Aug 2026</strong></span>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="relative z-20 flex items-end justify-between text-center px-2">
                <div className="flex flex-col items-center">
                  <svg width="90" height="22" viewBox="0 0 120 36" fill="none" className="mb-0.5">
                    <path d="M 6 24 C 20 8, 35 32, 50 14 C 62 2, 75 30, 88 18 C 95 12, 105 22, 114 16" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                  <div className="w-32 border-t border-slate-800 pt-0.5">
                    <span className="text-[10px] font-sans font-bold text-slate-700 block">
                      Director's Signature
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-6 h-6 rounded-full border border-slate-800 flex items-center justify-center text-[7px] font-bold text-slate-900 font-sans">
                      ISO
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center text-[7px] font-bold font-sans">
                      IAF
                    </div>
                  </div>
                  <span className="text-[9px] font-sans font-bold text-slate-700">
                    ISO/IEC- 27001:2022
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <svg width="90" height="22" viewBox="0 0 120 36" fill="none" className="mb-0.5">
                    <path d="M 10 20 C 25 10, 40 28, 55 12 C 70 24, 85 8, 100 20" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                  <div className="w-32 border-t border-slate-800 pt-0.5">
                    <span className="text-[10px] font-sans font-bold text-slate-700 block">
                      Instructor's Signature
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Verified Institution & ISO 27001 Accredited</span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-[#00A884] hover:bg-[#008f70] text-white rounded-xl font-semibold transition-colors shadow-sm"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // Standard Module Syllabus Modal
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-xs">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />

        {/* Minimalist Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-md p-6 z-10 flex flex-col gap-5"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-semibold text-slate-400">
                  {module.code}
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#E6FAF5] text-[#00A884] font-semibold border border-[#00A884]/30">
                  {module.level}
                </span>
              </div>
              <h2 className="text-lg font-bold text-[#0F172A] leading-snug">
                {module.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {module.description}
          </p>

          {/* Topics List */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Topics Covered
            </h4>
            <div className="space-y-1.5">
              {module.topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A884] shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Metadata & Action */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="text-xs text-slate-500 font-medium">
              ⏱ {module.duration} • 📖 {module.labsCount} Labs
            </div>

            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-[#00A884] hover:bg-[#008f70] text-white rounded-lg text-xs font-semibold transition-colors"
            >
              Start Module
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
