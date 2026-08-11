import React from "react";

export default function CyberMascot({ angle = 0 }) {
  return (
    <div
      className="relative flex flex-col items-center select-none"
      style={{
        transform: `rotate(${Math.max(-15, Math.min(15, angle))}deg)`,
        transition: "transform 0.15s ease-out"
      }}
    >
      {/* Coder Roots Simple Robot SVG Mascot */}
      <svg
        width="44"
        height="50"
        viewBox="0 0 64 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_12px_rgba(0,168,132,0.35)]"
      >
        {/* Antennas */}
        <path d="M 32 12 L 32 4" stroke="#00A884" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="3" r="3" fill="#00A884" />

        {/* Head */}
        <rect x="14" y="12" width="36" height="26" rx="7" fill="#ffffff" stroke="#00A884" strokeWidth="2.5" />

        {/* Visor */}
        <rect x="18" y="17" width="28" height="15" rx="5" fill="#0f172a" />
        
        {/* Glowing Coder Roots Teal Eyes */}
        <circle cx="26" cy="24" r="3" fill="#2CBA96" />
        <circle cx="38" cy="24" r="3" fill="#2CBA96" />

        {/* Neck */}
        <rect x="28" y="38" width="8" height="4" fill="#64748b" />

        {/* Body */}
        <rect x="16" y="42" width="32" height="22" rx="6" fill="#ffffff" stroke="#00A884" strokeWidth="2.5" />
        
        {/* Chest Button */}
        <circle cx="32" cy="50" r="3" fill="#605BE5" />

        {/* Left Arm holding Pad */}
        <path d="M 16 46 L 9 52 L 14 58" stroke="#00A884" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <rect x="4" y="50" width="10" height="11" rx="2" fill="#00A884" />

        {/* Right Arm */}
        <path d="M 48 46 L 55 52 L 50 58" stroke="#00A884" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Feet */}
        <rect x="22" y="64" width="6" height="5" rx="1.5" fill="#64748b" />
        <rect x="36" y="64" width="6" height="5" rx="1.5" fill="#64748b" />
      </svg>
    </div>
  );
}
