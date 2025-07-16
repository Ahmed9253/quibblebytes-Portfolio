import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-[#32fa5b] text-black p-3 rounded-full shadow-lg hover:bg-white transition duration-300"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  ) : null;
}

export default BackToTopButton;
