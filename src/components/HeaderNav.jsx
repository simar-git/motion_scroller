import React from "react";
import { Shield, ChevronLeft, ChevronRight, Play, Pause, Compass, MousePointer, RotateCcw } from "lucide-react";

export default function HeaderNav({
  activeId,
  totalModules,
  onPrev,
  onNext,
  selectedFilter,
  onSelectFilter,
  viewMode,
  onToggleViewMode,
  isAutoPlaying,
  onToggleAutoPlay,
  onResetView
}) {
  const filters = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];
  const progressPercent = Math.round((activeId / totalModules) * 100);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#090a0f]/90 backdrop-blur-xl border-b border-[#1c202e] px-4 md:px-8 py-3 flex flex-col lg:flex-row items-center justify-between gap-4">
      {/* Brand & Section Identifier */}
      <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(255,51,68,0.3)]">
            <Shield className="w-4 h-4 text-red-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-widest text-white">TRISEC LABS</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 font-semibold border border-red-500/30">
                BETA
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">Cybersecurity Training Roadmap</div>
          </div>
        </div>

        {/* Mobile Step Prev/Next */}
        <div className="flex lg:hidden items-center gap-1.5">
          <button
            onClick={onPrev}
            className="p-1.5 bg-[#141724] border border-[#252b3d] rounded-lg text-slate-300 hover:text-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-slate-300 px-1">
            {activeId}/{totalModules}
          </span>
          <button
            onClick={onNext}
            className="p-1.5 bg-[#141724] border border-[#252b3d] rounded-lg text-slate-300 hover:text-white"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Center: Module Progress & Filter Tags */}
      <div className="flex items-center gap-6 w-full lg:w-auto justify-center">
        {/* Progress Tracker */}
        <div className="hidden sm:flex items-center gap-3 bg-[#111420] px-3.5 py-1.5 rounded-xl border border-[#202536]">
          <div className="text-xs font-mono text-slate-400 whitespace-nowrap">
            MODULE <span className="text-red-400 font-bold">0{activeId}</span> / 0{totalModules}
          </div>
          <div className="w-24 h-2 bg-[#1b2030] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500 shadow-[0_0_8px_rgba(255,51,68,0.8)]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="text-[11px] font-mono text-slate-400">{progressPercent}%</div>
        </div>

        {/* Difficulty Filter Pills */}
        <div className="flex items-center gap-1 bg-[#10131e] p-1 rounded-xl border border-[#1e2334]">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onSelectFilter(filter)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                selectedFilter === filter
                  ? "bg-red-500/20 text-red-400 font-bold border border-red-500/40 shadow-[0_0_10px_rgba(255,51,68,0.2)]"
                  : "text-slate-400 hover:text-slate-200 hover:bg-[#181c2b]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Right Controls Bar */}
      <div className="hidden lg:flex items-center gap-3">
        {/* Auto Tour Toggle */}
        <button
          onClick={onToggleAutoPlay}
          className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-2 transition-all ${
            isAutoPlaying
              ? "bg-red-500 text-white border-red-400 shadow-[0_0_15px_rgba(255,51,68,0.5)]"
              : "bg-[#121522] border-[#222738] text-slate-300 hover:border-slate-600"
          }`}
        >
          {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          <span>{isAutoPlaying ? "PAUSE TOUR" : "AUTO TOUR"}</span>
        </button>

        {/* View Mode Toggle */}
        <button
          onClick={onToggleViewMode}
          className="px-3 py-1.5 bg-[#121522] border border-[#222738] hover:border-slate-600 rounded-xl text-xs font-mono text-slate-300 flex items-center gap-2 transition-all"
        >
          {viewMode === "scroll" ? (
            <>
              <Compass className="w-3.5 h-3.5 text-red-400" />
              <span>SCROLL PATH</span>
            </>
          ) : (
            <>
              <MousePointer className="w-3.5 h-3.5 text-amber-400" />
              <span>FREE PAN</span>
            </>
          )}
        </button>

        {/* Reset View */}
        <button
          onClick={onResetView}
          title="Reset Camera View"
          className="p-2 bg-[#121522] border border-[#222738] hover:border-slate-600 rounded-xl text-slate-400 hover:text-white transition-all"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Prev & Next Buttons */}
        <div className="flex items-center gap-1 pl-2 border-l border-[#1e2334]">
          <button
            onClick={onPrev}
            className="p-2 bg-[#121522] border border-[#222738] hover:border-red-500/50 rounded-xl text-slate-300 hover:text-white transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onNext}
            className="p-2 bg-[#121522] border border-[#222738] hover:border-red-500/50 rounded-xl text-slate-300 hover:text-white transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
