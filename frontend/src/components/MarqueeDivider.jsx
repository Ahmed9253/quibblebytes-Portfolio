import React from "react";

export default function MarqueeDivider() {
  const content = (
    <div className="flex items-center gap-8 text-lg md:text-2xl font-semibold whitespace-nowrap">
      <span className="text-green-400">|Empower Your Brand</span>
      <span className="text-white">| Quibblebyte Delivers Results</span>
      <span className="text-green-400">| Let’s Build Something Amazing</span>
      <span className="text-white mx-[50px]">| Marketing. Growth.</span>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-black via-green-900 to-black py-4 group">
      {/* Skewed overlay */}
      <div className="absolute inset-0 skew-y-2 bg-black opacity-30 pointer-events-none" />

      {/* Smooth marquee scroll */}
      <div className="relative z-10 w-full overflow-hidden">
        <div
          className="flex animate-marquee group-hover:[animation-play-state:paused]"
          style={{
            animation: "scrollLeft 12s linear infinite",
          }}
        >
          <div className="flex min-w-full">{content}</div>
          <div className="flex min-w-full">{content}</div>
        </div>
      </div>

      {/* Inline keyframes for perfect scroll */}
      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
}
