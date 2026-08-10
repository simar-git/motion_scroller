import React from "react";
import { motion } from "motion/react";
import { Clock, BookOpen, Shield, ChevronRight, Terminal } from "lucide-react";

export default function ModuleCard({ module, isActive, onClick, onOpenModal }) {
  const getLevelBadge = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Intermediate":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Advanced":
      case "Expert":
        return "bg-red-50 text-red-700 border-red-200";
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
          ? "bg-white border-2 border-red-500 shadow-2xl scale-105 z-30"
          : "bg-white border border-slate-200 shadow-md hover:border-slate-300 z-10 opacity-90 hover:opacity-100"
      }`}
    >
      {/* Node Number Badge */}
      <div
        className={`absolute -top-4 -left-4 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
          isActive
            ? "bg-red-500 text-white shadow-lg shadow-red-500/40 scale-110"
            : "bg-slate-400 text-white"
        }`}
      >
        {module.id}
      </div>

      {/* Header Row: Module Code & Level */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {module.code}
        </span>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${getLevelBadge(module.level)}`}>
          {module.level}
        </span>
      </div>

      {/* Main Title */}
      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
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
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>{module.duration}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
          <span>{module.labsCount} Labs</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-slate-400" />
          <span>{module.skillsCount} Skills</span>
        </div>
      </div>

      {/* Inspect Button on Active Card */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(module);
            }}
            className="w-full py-2 px-3 bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl text-xs font-semibold text-red-600 flex items-center justify-center gap-2 transition-all group"
          >
            <Terminal className="w-3.5 h-3.5 text-red-600" />
            <span>INSPECT SYLLABUS & LABS</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
