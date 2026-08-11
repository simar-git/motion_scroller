import React from "react";
import { motion } from "motion/react";
import { Clock, BookOpen, Shield, ChevronRight } from "lucide-react";

export default function ModuleCard({ module, isActive, onClick, onOpenModal }) {
  const getLevelBadge = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-[#E6FAF5] text-[#00A884] border-[#00A884]/30";
      case "Intermediate":
        return "bg-[#EEEDFD] text-[#605BE5] border-[#605BE5]/30";
      case "Advanced":
      case "Expert":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <motion.div
      layout
      onClick={onClick}
      whileHover={{ scale: isActive ? 1.04 : 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`relative w-[350px] p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
        isActive
          ? "bg-white border-2 border-[#00A884] shadow-[0_8px_25px_rgba(0,168,132,0.22)] scale-105 z-30"
          : "bg-white border border-slate-200 shadow-md hover:border-slate-300 z-10 opacity-90 hover:opacity-100"
      }`}
    >
      {/* Coder Roots Active Node Number Badge */}
      <div
        className={`absolute -top-4 -left-4 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
          isActive
            ? "bg-[#00A884] text-white shadow-lg shadow-[#00A884]/40 scale-110"
            : "bg-slate-400 text-white"
        }`}
      >
        {module.id}
      </div>

      {/* Header Row: Module Code & Level */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
          {module.code}
        </span>
        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${getLevelBadge(module.level)}`}>
          {module.level}
        </span>
      </div>

      {/* Main Title */}
      <h3 className="text-lg font-bold text-[#0F172A] mb-2 leading-tight">
        {module.title}
      </h3>

      {/* Subtitle Description */}
      <p className="text-sm text-slate-600 mb-4 leading-relaxed min-h-[38px]">
        {module.description}
      </p>

      {/* Horizontal Divider */}
      <div className="w-full h-[1px] bg-slate-100 mb-3" />

      {/* Metadata Icons Row */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#00A884]" />
          <span>{module.duration}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-[#00A884]" />
          <span>{module.labsCount} Labs</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[#00A884]" />
          <span>{module.skillsCount} Skills</span>
        </div>
      </div>

      {/* Coder Roots Teal Action Button on Active Card */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 pt-3 border-t border-slate-100"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(module);
            }}
            className="w-full py-1.5 px-3 bg-[#E6FAF5] hover:bg-[#D0F7EE] border border-[#00A884]/40 rounded-lg text-xs font-semibold text-[#00A884] flex items-center justify-center gap-1.5 transition-all group"
          >
            <span>View Syllabus</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#00A884] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
