import React, { useState } from "react";
import { motion } from "motion/react";
import { tracksData } from "../data/tracksData";
import TrainingRoadmap from "./TrainingRoadmap";
import { ShieldAlert, Layers } from "lucide-react";

export default function TechRoadmapsPage() {
  const [selectedTrack, setSelectedTrack] = useState(tracksData[0]);

  const getDomainIcon = (trackId) => {
    if (trackId === "cyber-security") {
      return <ShieldAlert className="w-5 h-5 text-[#00A884]" />;
    }
    return <Layers className="w-5 h-5 text-[#00A884]" />;
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-[#0F172A] font-sans">
      {/* Top Main Navigation Header (Clean Logo Left, Get Started Right) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-6 py-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <img
            src="/coderroots-logo.png"
            alt="Coder Roots Logo"
            className="h-9 w-auto object-contain"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#00A884] hover:bg-[#008f70] text-white text-xs sm:text-sm font-extrabold px-6 py-2.5 rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]">
            Get Started
          </button>
        </div>
      </header>

      {/* Main Page Body */}
      <main>
        {/* Technology Domain Selection Hero Section */}
        <section id="domains" className="pt-14 pb-10 px-6 max-w-5xl mx-auto text-center">
          {/* Main Hero Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-4 leading-tight">
            Choose Your Specialized Tech Track
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-9 font-medium">
            Select a domain below to launch its interactive step-by-step roadmap.
          </p>

          {/* Simple 2 Domain Cards Grid: Cyber Security & MERN Stack Development Only */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tracksData.map((track) => {
              const isSelected = selectedTrack.id === track.id;

              return (
                <motion.div
                  key={track.id}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedTrack(track);
                    const el = document.getElementById("roadmap");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-center items-center text-center min-h-[110px] ${
                    isSelected
                      ? "bg-white border-2 border-[#00A884] shadow-[0_12px_30px_rgba(0,168,132,0.18)] z-10"
                      : "bg-white border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Icon & Title */}
                  <div className="flex items-center justify-center gap-2.5 mb-1">
                    {getDomainIcon(track.id)}
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                      {track.title}
                    </h3>
                  </div>

                  {/* Stages & Lab Counts */}
                  <p className="text-xs font-medium text-slate-500">
                    {track.stagesCount} Stages • {track.labsCount} Labs
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Interactive Pinned Sticky Horizontal Scroll Bezier Roadmap Scroller */}
        <section id="roadmap" className="w-full">
          <TrainingRoadmap track={selectedTrack} />
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-[#0F172A] text-slate-400 py-6 px-6 border-t border-slate-800 text-xs relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/coderroots-logo.png"
              alt="Coder Roots Logo"
              className="h-6 w-auto object-contain brightness-200"
            />
            <span className="text-slate-500">|</span>
            <span>ISO/IEC 27001:2022 Certified Training Institution</span>
          </div>
          <div className="flex items-center gap-6 font-medium text-slate-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#verify" className="hover:text-white transition-colors">Verify Certificate</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
