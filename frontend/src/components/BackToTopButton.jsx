import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.round((scrolled / height) * 100);
      setScrollPercent(percent);
      setVisible(scrolled > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative group bg-[#32fa5b] hover:bg-white text-black px-4 py-3 rounded-full shadow-xl flex items-center space-x-2"
        aria-label="Scroll to top"
      >
        {/* ring */}
        <svg className="w-6 h-6 transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#00000033"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831"
            fill="none"
            stroke="#18174a"
            strokeWidth="3"
            strokeDasharray={`${scrollPercent}, 100`}
          />
        </svg>

        {/* arrow Icon */}
        <FaArrowUp className="text-lg" />

        {/* label for large screens */}
        <span className="hidden md:inline font-semibold">Back to Top</span>
      </button>
    </div>
  );
}
