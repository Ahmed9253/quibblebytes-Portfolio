import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-white bg-[url('/src/assets/footer.jpg')] bg-cover bg-center overflow-hidden">
      {/* Overlay */}
      <div className="w-full bg-black/80 px-6 md:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          {/* Logo + Address + Social */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-[#32fa5b] mr-2">qb</span>
              <span className="text-xl font-semibold text-[#32fa5b]">
                Quibble
              </span>
              <span className="text-xl font-semibold text-white">Byte</span>
            </div>
            <p className="text-sm leading-relaxed">
              Office no 2, Kareem Arcade, <br />
              Main GT Road, Rawalpindi
            </p>

            <p className="mt-4 font-bold text-sm text-white">FOLLOW US</p>
            <div className="flex gap-3 mt-2">
              <FaFacebookF className="text-[#32fa5b] hover:scale-110 transition cursor-pointer" />
              <FaTwitter className="text-[#32fa5b] hover:scale-110 transition cursor-pointer" />
              <FaInstagram className="text-[#32fa5b] hover:scale-110 transition cursor-pointer" />
              <FaLinkedinIn className="text-[#32fa5b] hover:scale-110 transition cursor-pointer" />
              <FaWhatsapp className="text-[#32fa5b] hover:scale-110 transition cursor-pointer" />
            </div>
          </div>

          {/* links */}
          <div>
            <h3 className="font-bold mb-3">QuibbleByte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#32fa5b]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#32fa5b]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#32fa5b]">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#32fa5b]">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-[#32fa5b]">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-[#32fa5b]">Web Development</span>
              </li>
              <li>
                <span className="hover:text-[#32fa5b]">Web Design</span>
              </li>
              <li>
                <span className="hover:text-[#32fa5b]">App Development</span>
              </li>
              <li>
                <span className="hover:text-[#32fa5b]">App Design</span>
              </li>
              <li>
                <span className="hover:text-[#32fa5b]">Google Ads</span>
              </li>
              <li>
                <span className="hover:text-[#32fa5b]">Facebook Ads</span>
              </li>
            </ul>
          </div>

          {/* contact information */}
          <div>
            <h3 className="font-bold mb-3">Contact No</h3>
            <ul className="space-y-2 text-sm">
              <li>+92 342 XXX XXXX</li>
              <li>+92 333 XXX XXXX</li>
              <li>+92 347 XXX XXXX</li>
              <li>quibblebyte@outlook.com</li>
            </ul>
          </div>

          {/* newletter box */}
          <div className="max-w-full flex flex-col items-center ">
            <h3 className="font-bold mb-4 text-white text-lg">
              READY TO GET STARTED?
            </h3>

            <form className="w-full flex flex-col items-center justify-center sm:flex-row gap-3 sm:gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:w-[260px] 
                md:w-[400px] px-4 py-2 rounded-md bg-white text-black text-sm placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className=" bg-green-500 px-5 py-2 rounded-md text-sm font-semibold text-black hover:bg-green-600 cursor-pointer transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 text-sm bg-black text-white border-t border-gray-800">
        Copyright © 2025 QuibbleByte All rights reserved
      </div>
    </footer>
  );
}
