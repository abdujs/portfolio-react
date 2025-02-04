// src/components/Header.jsx
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#blog", label: "Blog" },
    { href: "#mod", label: "Mod" },
  ];

  return (
    <header className="bg-gray-700 text-white p-4 flex justify-between items-center shadow-md fixed w-full top-0 z-50 transition-all duration-300 animate-bg">
      <div className="text-xl font-bold">My Portfolio</div>
      <nav className="hidden md:flex space-x-4">
        {menuItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:bg-blue-600 px-2 py-1 rounded transition-colors duration-300">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-blue-600 focus:outline-none transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-md rounded-md p-4 flex flex-col space-y-4 md:hidden transition-all duration-300">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="text-gray-700 hover:bg-blue-600 px-2 py-1 rounded transition-colors duration-300">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
