import React from "react";
import logo from "../assets/logo.png";
import gripVertical from "../assets/grip-vertical.png";

const Header = () => {
  return (
    <div className="w-full bg-white" style={{ backgroundColor: '#fff'} }>
      <header className="w-full border-b border-gray-200 shadow-sm bg-white">
        <div className="w-full flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="Bluestock Logo" className="w-10 h-10 object-contain" />
            <span
              className="w-[161px] text-[25px] font-semibold leading-[25px] tracking-normal flex items-center"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, lineHeight: '25px', letterSpacing: '0', color: '#1E1E1E' }}
            >
              BLUESTOCK
            </span>
          </div>
          {/* Centered Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center gap-10 w-full">
            <a href="#" className="text-gray-700 font-semibold hover:text-blue-600 tracking-wide">PRODUCTS</a>
            <a href="#" className="text-gray-700 font-semibold hover:text-blue-600 tracking-wide">PRICING</a>
            <a href="#" className="text-gray-700 font-semibold hover:text-blue-600 tracking-wide">COMMUNITY</a>
            <a href="#" className="text-gray-700 font-semibold hover:text-blue-600 tracking-wide flex items-center gap-1">MEDIA <span className="inline-block align-middle text-xs">▼</span></a>
            <a href="#" className="text-gray-700 font-semibold hover:text-blue-600 tracking-wide flex items-center gap-1">SUPPORT <span className="inline-block align-middle text-xs">↗</span></a>
          </nav>
          {/* Actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="hidden md:inline text-gray-400 font-semibold">Sign In</span>
            <img src={gripVertical} alt="Menu" style={{ width: 64, height: 64, marginRight: 12 }} className="ml-2 object-contain" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header; 