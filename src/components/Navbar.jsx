'use client';
import React, { useState } from 'react';
import { Menu, X, Home, User, LayoutList, FileText, Bot, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
  { name: 'Home', href: '#home', icon: <Home size={18} /> },
  { name: 'About', href: '#about', icon: <User size={18} /> },
  { name: 'Projects', href: '#projects-section', icon: <LayoutList size={18} /> },
  { name: 'Resume', href: '#resume', icon: <FileText size={18} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
  {
    name: 'SnehAI',
    href: '/assets/images/sneh-AI.png',
    icon: (
      <Bot
        size={18}
        className="text-purple-400 group-hover:text-pink-400 transition duration-300 animate-pulse"
      />
    ),
    special: true,
  },
];


  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f0c29]/90 backdrop-blur border-b border-white/10 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            SS.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ name, href, icon, special }) => (
            <a
              key={name}
              href={href}
              className={`group flex items-center gap-2 text-sm font-medium transition-all relative py-1 ${
                special
                  ? 'px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-md hover:scale-105'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {icon}
              <span
                className={`${
                  special
                    ? 'font-semibold'
                    : 'relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 group-hover:after:w-full after:bg-purple-500 after:transition-all after:duration-300'
                }`}
              >
                {name}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0f0c29]/95 backdrop-blur px-6 pb-6 space-y-4"
        >
          {navLinks.map(({ name, href, icon, special }) => (
            <a
              key={name}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 text-sm font-medium transition-all ${
                special
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full shadow hover:scale-105'
                  : 'text-gray-200 hover:text-white hover:underline underline-offset-4'
              }`}
            >
              {icon}
              {name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
