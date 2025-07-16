import React from "react";
import { Rocket, LineChart, TrendingUp, Sparkles } from "lucide-react";

export default function MarqueeDivider() {
  const marqueeItems = [
    {
      icon: <Rocket className="w-5 h-5 text-green-400" />,
      text: "Empower Your Brand",
    },
    {
      icon: <LineChart className="w-5 h-5 text-white" />,
      text: "Quibblebyte Delivers Results",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-green-400" />,
      text: "Let’s Build Something Amazing",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-white" />,
      text: "Marketing. Strategy. Growth.",
    },
  ];

  const renderMarqueeItems = () =>
    marqueeItems.map((item, index) => (
      <div key={index} className="flex items-center gap-2 shrink-0 px-6">
        {item.icon}
        <span className="text-lg md:text-xl font-semibold text-white">
          {item.text}
        </span>
      </div>
    ));

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-black via-green-900 to-black py-6 group">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-green-500 via-white to-green-500 shadow-md shadow-green-500/20" />

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-green-500 via-white to-green-500 shadow-md shadow-green-500/20" />

      {/* background overlay */}
      <div className="absolute inset-0 skew-y-2 bg-black opacity-20 pointer-events-none" />

      {/* edge fade hone ki animation */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

      {/* Marquee */}
      <div className="relative z-10 w-full overflow-hidden">
        <div
          className="flex group-hover:[animation-play-state:paused]"
          style={{
            animation: "scrollLeft 12s linear infinite",
            width: "max-content",
          }}
        >
          <div className="flex">{renderMarqueeItems()}</div>
          <div className="flex">{renderMarqueeItems()}</div>
        </div>
      </div>

      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}
