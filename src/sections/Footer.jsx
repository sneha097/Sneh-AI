// components/Footer.jsx

import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} className="text-white group-hover:scale-110 transition-transform" />,
      href: "https://github.com/sneha097",
      label: "GitHub",
      color: "hover:bg-purple-400/20 hover:border-purple-400/40",
    },
    {
      icon: <Linkedin size={20} className="text-white group-hover:scale-110 transition-transform" />,
      href: "https://www.linkedin.com/in/sneha-singh-b9b52723b/",
      label: "LinkedIn",
      color: "hover:bg-purple-400/20 hover:border-purple-400/40",
    },
    
    {
      icon: <Mail size={20} className="text-white group-hover:scale-110 transition-transform" />,
      href: "mailto:snehasinghaug09@gmail.com",
      label: "Email",
      color: "hover:bg-purple-400/20 hover:border-purple-400/40",
    },
  ];

  return (
    <footer className="relative pt-10 pb-6 bg-gradient-to-br from-[#0f0c29] via-[#1e1b4b] to-[#24243e] text-white overflow-hidden">
      {/* Glow Backgrounds */}
      <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-purple-400/10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[15%] right-[15%] w-80 h-80 bg-pink-400/10 rounded-full blur-[100px] z-0" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-14">
          {/* Brand */}
          <div className="text-center lg:text-left space-y-4">
            <a
              href="#home"
              className="text-4xl font-bold tracking-tight text-white hover:text-purple-300 transition-colors duration-300 inline-block"
            >
              Sneha<span className="text-purple-400">.</span>
            </a>
            <p className="text-[15px] text-gray-400/90 max-w-md leading-relaxed font-light">
              Crafting digital experiences that merge elegance with performance, one line of code at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center lg:text-right">
            <h3 className="text-lg font-medium mb-5 text-gray-300 tracking-wider">
              Connect With Me
            </h3>
            <div className="flex justify-center lg:justify-end gap-4">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`
                    group w-12 h-12 rounded-full flex items-center justify-center
                    border border-gray-700/50 bg-gray-800/40 backdrop-blur-sm
                    ${item.color} transition-all duration-300
                  `}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent my-10" />

        {/* Copyright */}
        <div className="text-center space-y-1">
          <p className="text-sm text-gray-500/80 tracking-wide font-light">
            © {currentYear} <span className="font-medium text-gray-300/90">Sneha</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-600/70 font-light">
            Made with <span className="text-purple-400/80">passion</span> and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
