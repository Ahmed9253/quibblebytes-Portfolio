import { useState } from "react";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Email Bar */}
      <div className="bg-[#32fa5b] flex justify-center items-center py-1 border-b border-black">
        <FaEnvelope className="mr-2 text-black" />
        <span className="text-black font-medium">quibblebyte@outlook.com</span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#18174a] flex items-center px-6 py-3 justify-between relative">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-3xl font-bold text-[#32fa5b] mr-2">qb</div>
          <span className="text-xl font-semibold text-[#32fa5b]">Quibble</span>
          <span className="text-xl font-semibold text-white">Byte</span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-6 items-center flex-1 justify-center">
          <li>
            <a
              href="#"
              className="px-4 py-1 rounded-full border border-[#32fa5b] text-white bg-transparent hover:bg-[#32fa5b] hover:text-black transition font-normal"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-[#32fa5b] transition"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-white hover:text-[#32fa5b] transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-[#32fa5b] transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#blogs"
              className="text-white hover:text-[#32fa5b] transition"
            >
              Blogs
            </a>
          </li>
        </ul>

        {/* Contact Link (Desktop) */}
        <div className="hidden md:block ml-10">
          <a
            href="#contact"
            className="text-white font-bold hover:text-[#32fa5b] transition border-l border-[#32fa5b] pl-6"
          >
            CONTACT US
          </a>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#18174a] border-t border-[#32fa5b] z-50 md:hidden animate-fadeIn">
            <ul className="flex flex-col items-center py-4 gap-4">
              <li>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-[#32fa5b]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-[#32fa5b]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-[#32fa5b]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-[#32fa5b]"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-[#32fa5b]"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-bold hover:text-[#32fa5b] border-t pt-2 border-[#32fa5b]"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* menu tab ki Animation mobile view main */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
}
