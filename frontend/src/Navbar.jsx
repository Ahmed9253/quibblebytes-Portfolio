import { FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="w-full">
      {/* Email Bar */}
      <div className="bg-[#32fa5b] flex justify-center items-center py-1 border-b border-black">
        <FaEnvelope className="mr-2 text-black" />
        <span className="text-black font-medium">quibblebyte@outlook.com</span>
      </div>
      {/* Main Navbar */}
      <nav className="bg-[#18174a] flex items-center px-8 py-2">
        {/* Logo */}
        <div className="flex items-center mr-10">
          {/* Replace with your logo SVG or image if available */}
          <div className="text-3xl font-bold text-[#32fa5b] mr-2">qb</div>
          <span className="text-xl font-semibold text-[#32fa5b]">Quibble</span>
          <span className="text-xl font-semibold text-white">Byte</span>
        </div>
        {/* Nav Links Centered */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-6 items-center">
            <li>
              <a href="#" className="px-4 py-1 rounded-full border border-[#32fa5b] text-white bg-transparent hover:bg-[#32fa5b] hover:text-black transition font-normal">Home</a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-[#32fa5b] transition">About Us</a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-[#32fa5b] transition">Services</a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:text-[#32fa5b] transition">Projects</a>
            </li>
            <li>
              <a href="#blogs" className="text-white hover:text-[#32fa5b] transition">Blogs</a>
            </li>
          </ul>
        </div>
        {/* Contact Us on Right */}
        <div className="ml-10">
          <a href="#contact" className="text-white font-bold hover:text-[#32fa5b] transition border-l border-[#32fa5b] pl-6">CONTACT US</a>
        </div>
      </nav>
    </div>
  );
} 