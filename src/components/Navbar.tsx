'use client';
import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import clsx from 'clsx';

const navlink = ['About', 'Work', 'Experience', 'Contact'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-[58px] flex items-center justify-between">
        {/* Logo */}
        <a href="#">

        <h1 className="head font-bold text-2xl sm:text-3xl text-gray-900 cursor-pointer transition-all duration-300">
          {'<NUEL />'}
        </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 transition-all duration-300">
          <ul className="flex gap-6 text-sm font-medium text-gray-700">
            {navlink.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
                      <a href="https://docs.google.com/document/d/1iBuuoVU1eM26WLPdp_N-zX5L97rzgZTyO4UHTBFnLVE/edit?usp=sharing" target='_blank'>
            <button className="bg-gray-900 text-white text-sm py-2 px-4 rounded-full hover:bg-gray-800 transition-all duration-200">
              Download CV
            </button>
                      </a>

          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu Animated */}
      <div
        className={clsx(
          'md:hidden overflow-hidden px-6 transition-all duration-300 ease-in-out',
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700 pt-4">
          {navlink.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="block py-1 hover:text-gray-900 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 my-6">
          <a href="https://docs.google.com/document/d/1iBuuoVU1eM26WLPdp_N-zX5L97rzgZTyO4UHTBFnLVE/edit?usp=sharing" target='_blank'>
          <button className="bg-gray-900 text-white text-sm py-2 px-4 rounded-full w-full hover:bg-gray-800 transition-all">
            Download CV
          </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
