import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full bg-white" style={{ backgroundColor: '#fff'} }>
      <header className="w-full border-b border-gray-200 shadow-sm bg-white">
        <div className="w-full flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="Bluestock Logo" className="w-10 h-10 object-contain" />
            <span className="w-[161px] h-[29px] text-[24px] font-extrabold tracking-tight text-gray-900 flex items-center" style={{lineHeight: '29px', letterSpacing: '0.01em', fontWeight: 900}}>BLUESTOCK</span>
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
            <button className="ml-2 p-2 rounded hover:bg-gray-100">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="2" rx="1"/><rect x="3" y="5" width="18" height="2" rx="1"/><rect x="3" y="17" width="18" height="2" rx="1"/></svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header; 