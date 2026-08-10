import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, Terminal, CheckCircle2, Award, Cpu } from "lucide-react";

export default function ModuleDetailModal({ module, onClose }) {
  const [selectedLab, setSelectedLab] = useState(module?.labs?.[0] || null);
  const [isLaunching, setIsLaunching] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState(null);

  if (!module) return null;

  const handleLaunchLab = (lab) => {
    setIsLaunching(true);
    setTerminalOutput([
      `[+] Initializing Trisec Cyber Range isolated cloud pod for ${lab.title}...`,
      `[+] Provisioning Kali AttackBox instance v2026.2...`,
      `[+] Binding target IP: 10.12.48.109 / Subnet /32`,
      `[+] Loading vulnerability scenario payload: ${lab.id}`,
      `[SUCCESS] Lab Environment Ready! Web CLI Access established at https://lab-${lab.id}.triseclabs.internal`
    ]);

    setTimeout(() => {
      setIsLaunching(false);
    }, 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-slate-500">{module.code}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-red-50 text-red-600 font-semibold border border-red-200">
                    {module.level}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900">{module.title}</h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Column */}
            <div className="md:col-span-5 space-y-5">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Module Overview
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  {module.description}
                </p>
              </div>

              {/* Topics Covered */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Curriculum Topics ({module.topics.length})</span>
                  <Award className="w-3.5 h-3.5 text-red-500" />
                </h4>
                <div className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-center">
                  <div className="text-xs text-slate-400">Duration</div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">{module.duration}</div>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-center">
                  <div className="text-xs text-slate-400">Hands-on</div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">{module.labsCount} Labs</div>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-center">
                  <div className="text-xs text-slate-400">Skills</div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">{module.skillsCount} Badges</div>
                </div>
              </div>
            </div>

            {/* Right Column: Labs & Terminal */}
            <div className="md:col-span-7 flex flex-col space-y-4">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Hands-on Labs ({module.labs.length})</span>
                <span className="text-xs text-red-600 font-medium">Cloud Environment</span>
              </h4>

              {/* Lab List */}
              <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
                {module.labs.map((lab) => {
                  const isSelected = selectedLab?.id === lab.id;
                  return (
                    <div
                      key={lab.id}
                      onClick={() => setSelectedLab(lab)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-red-50 border-red-300 text-slate-900 shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                          isSelected ? "bg-red-500 text-white" : "bg-slate-200 text-slate-600"
                        }`}>
                          {lab.id.split("-")[1]}
                        </div>
                        <div>
                          <div className="text-xs font-bold">{lab.title}</div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-2">
                            <span>⏱ {lab.duration}</span>
                            <span>•</span>
                            <span className={lab.difficulty === "Hard" ? "text-red-600" : "text-amber-600"}>
                              {lab.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedLab(lab);
                          handleLaunchLab(lab);
                        }}
                        className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Launch</span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Terminal Sandbox */}
              <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-200 flex flex-col justify-between min-h-[160px]">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                    <span className="text-slate-300 ml-2">bash - trisec-attackbox@{selectedLab?.id || "preview"}</span>
                  </div>
                  <span>SANDBOX POD</span>
                </div>

                <div className="space-y-1 overflow-y-auto max-h-36 py-1 text-slate-300">
                  {isLaunching ? (
                    <div className="flex items-center gap-2 text-red-400 py-4 justify-center">
                      <Cpu className="w-5 h-5 animate-spin" />
                      <span>PROVISIONING ISOLATED CYBER CONTAINER...</span>
                    </div>
                  ) : terminalOutput ? (
                    terminalOutput.map((line, idx) => (
                      <div key={idx} className={line.includes("SUCCESS") ? "text-emerald-400 font-bold" : "text-slate-300"}>
                        {line}
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="text-slate-500"># Click 'Launch' to start isolated sandbox pod for {selectedLab?.title}</div>
                      <div className="text-slate-400">$ trisec-cli lab status --target {selectedLab?.id}</div>
                      <div className="text-slate-500">[INFO] Target environment ready for deployment.</div>
                      <div className="text-red-400">$ ready to launch...</div>
                    </>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">TRISEC CLOUD ENGINE v4.2</span>
                  <button
                    disabled={isLaunching}
                    onClick={() => handleLaunchLab(selectedLab || module.labs[0])}
                    className="px-4 py-1.5 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>LAUNCH LAB ENVIRONMENT</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
