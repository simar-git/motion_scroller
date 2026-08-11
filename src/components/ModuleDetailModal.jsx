import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export default function ModuleDetailModal({ module, onClose }) {
  if (!module) return null;

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

        {/* Coder Roots Styled Minimalist Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-xl p-6 z-10 flex flex-col gap-5"
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
              className="px-4 py-1.5 bg-[#00A884] hover:bg-[#008f70] text-white rounded-lg text-xs font-semibold shadow-md shadow-[#00A884]/20 transition-colors"
            >
              Start Module
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
