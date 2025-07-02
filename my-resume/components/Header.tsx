"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Initials */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-[#D96C6C] hover:text-[#C75A5A] transition-colors duration-300"
            onClick={closeMenu}
          >
            UK
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/profile" className="nav-link">
              Profile
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col space-y-1 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-[#333333] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#333333] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#333333] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden mt-4 pb-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className="nav-link py-2" 
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="nav-link py-2" 
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="nav-link py-2" 
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              href="/profile" 
              className="nav-link py-2" 
              onClick={closeMenu}
            >
              Profile
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}