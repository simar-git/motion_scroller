import React from "react";

export default function CyberMascot() {
  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Floating Level Laptop Code Icon Mascot */}
      <svg
        width="48"
        height="42"
        viewBox="0 0 64 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_10px_rgba(0,168,132,0.22)]"
      >
        {/* Laptop Screen Frame */}
        <rect x="8" y="4" width="48" height="32" rx="5" fill="#0F172A" stroke="#00A884" strokeWidth="2.5" />
        
        {/* Inner Code Screen */}
        <rect x="11" y="7" width="42" height="26" rx="3" fill="#090d16" />
        
        {/* Terminal Code Lines & Glowing Indicators */}
        <rect x="15" y="12" width="12" height="2.5" rx="1" fill="#00A884" />
        <rect x="29" y="12" width="16" height="2.5" rx="1" fill="#2CBA96" />
        <rect x="15" y="17" width="22" height="2.5" rx="1" fill="#10B981" />
        <rect x="15" y="22" width="14" height="2.5" rx="1" fill="#00A884" />
        <rect x="31" y="22" width="10" height="2.5" rx="1" fill="#2CBA96" />
        <circle cx="47" cy="23" r="1.5" fill="#10B981" />

        {/* Laptop Hinge */}
        <rect x="26" y="36" width="12" height="3" rx="1" fill="#64748B" />

        {/* Laptop Keyboard Base */}
        <path d="M 4 39 C 4 37.5, 6 37, 8 37 L 56 37 C 58 37, 60 37.5, 60 39 L 62 46 C 62 48, 60 49, 57 49 L 7 49 C 4 49, 2 48, 2 46 Z" fill="#FFFFFF" stroke="#00A884" strokeWidth="2" />

        {/* Touchpad */}
        <rect x="27" y="42" width="10" height="4" rx="1" fill="#F1F5F9" stroke="#00A884" strokeWidth="1" />
      </svg>
    </div>
  );
}
