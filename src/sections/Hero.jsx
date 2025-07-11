'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaHandSparkles, FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineTerminal } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import { SiTypescript, SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiFramer, SiMongodb } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('code'); // 'code' or 'terminal'
  
  const floatingVariants = {
    animate: (delay = 0) => ({
      y: [0, -10, 0],
      transition: {
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    })
  };

  const techIcons = [
    { icon: <SiReact className="text-[#61DAFB]" />, name: 'React' },
    { icon: <SiNextdotjs className="text-gray-200" />, name: 'Next.js' },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, name: 'Tailwind' },
    { icon: <SiNodedotjs className="text-[#339933]" />, name: 'Node' },
    { icon: <FaAws className="text-[#FF9900]" />, name: 'AWS' },
    { icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' }
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-[#0f0c29] via-[#1e1b4b] to-[#24243e] text-white overflow-hidden"
      id="home"
    >
      {/* Animated Background Elements - Reduced size for mobile */}
      <motion.div 
        className="absolute top-[10%] left-[10%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#a855f7]/10 rounded-full blur-[60px] sm:blur-[100px] z-0"
        variants={floatingVariants}
        animate="animate"
        custom={0}
      />
      <motion.div 
        className="absolute bottom-[15%] right-[15%] w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-[#06b6d4]/10 rounded-full blur-[50px] sm:blur-[80px] z-0"
        variants={floatingVariants}
        animate="animate"
        custom={2}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl gap-8 py-12 sm:py-20">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">Sneha</span>{' '}
              <motion.span
                animate={{ rotate: [0, 14, -8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="inline-block"
              >
                <FaHandSparkles className="inline ml-1 text-yellow-300" />
              </motion.span>
            </h1>
            
            <motion.p
              className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Developer who engineers with empathy and precision. Whether architecting cloud-native solutions or crafting intuitive interfaces, I bridge technical complexity with genuine human needs.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1HNxrM7XKn-t7n6JULljSE33RxqEnx1kd"
                className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600/90 to-pink-500/90 hover:from-purple-700/90 hover:to-pink-600/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/20 overflow-hidden text-sm sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <FaDownload className="text-sm sm:text-lg opacity-80" />
                  Download Resume
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700/80 to-pink-600/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href="mailto:snehasinghaug09@gmail.com"
                className="group relative inline-flex items-center gap-2 sm:gap-3 border border-white/30 hover:border-transparent hover:bg-white/90 hover:text-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg overflow-hidden backdrop-blur-sm text-sm sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                  <HiOutlineMail className="text-sm sm:text-lg opacity-80" />
                  Hire Me
                </span>
                <span className="absolute inset-0 bg-white/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="mt-8 sm:mt-12 flex justify-center lg:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: <FaGithub />, url: "https://github.com/sneha097" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sneha-singh-b9b52723b/" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  className="text-lg sm:text-xl p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:text-purple-300 border border-white/5"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Tech Stack Badge */}
            <motion.div 
              className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span>Proudly built with:</span>
              <div className="flex gap-1">
                <SiNextdotjs className="text-white/80" />
                <SiTailwindcss className="text-cyan-400" />
                <SiFramer className="text-purple-400" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Interactive Code/Terminal Section - Made responsive */}
        <motion.div
          className="flex-1 flex items-center justify-center relative w-full mt-8 sm:mt-0"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md h-full">
            {/* Toggle Switch */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="inline-flex bg-gray-800/50 rounded-lg p-1 backdrop-blur-sm border border-gray-700/50">
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 sm:px-4 py-1 sm:py-2 rounded-md flex items-center gap-1 sm:gap-2 transition-all text-xs sm:text-sm ${activeTab === 'code' ? 'bg-purple-600/30 text-purple-100' : 'text-gray-400 hover:text-white'}`}
                >
                  <FaCode className="text-xs sm:text-sm" />
                  <span>Code</span>
                </button>
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`px-3 sm:px-4 py-1 sm:py-2 rounded-md flex items-center gap-1 sm:gap-2 transition-all text-xs sm:text-sm ${activeTab === 'terminal' ? 'bg-cyan-600/30 text-cyan-100' : 'text-gray-400 hover:text-white'}`}
                >
                  <HiOutlineTerminal className="text-xs sm:text-sm" />
                  <span>Terminal</span>
                </button>
              </div>
            </div>

            {/* Code Editor - Made responsive */}
            {activeTab === 'code' && (
              <motion.div
                className="relative w-full h-[220px] sm:h-64 bg-gray-900/70 rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[3%]" />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                
                <div className="p-4 sm:p-6 pt-10 sm:pt-12 font-mono text-xs sm:text-sm h-full overflow-auto">
                  <pre className="text-purple-300">const <span className="text-pink-300">profile</span> = {'{'}</pre>
                  <pre className="pl-3 sm:pl-4 text-cyan-300">  frontend: <span className="text-yellow-200">'Where design meets logic'</span>,</pre>
                  <pre className="pl-3 sm:pl-4 text-cyan-300">  backend: <span className="text-green-300">'Where data becomes useful'</span>,</pre>
                  <pre className="pl-3 sm:pl-4 text-cyan-300">  devops: <span className="text-pink-300">'Where dreams meet reality'</span></pre>
                  <pre className="text-purple-300">{'}'}</pre>
                  <div className="pl-3 sm:pl-4 flex flex-wrap gap-2 sm:gap-3 my-2 sm:my-3">
                    {techIcons.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="text-xl sm:text-2xl p-1 sm:p-2 bg-gray-800/50 rounded-lg">
                          {tech.icon}
                        </div>
                        <span className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 text-gray-400">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  animate={{ width: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
                />
              </motion.div>
            )}

            {/* Terminal - Made responsive */}
            {activeTab === 'terminal' && (
              <motion.div
                className="relative w-full h-[220px] sm:h-64 bg-gray-900/70 rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[3%]" />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                
                <div className="p-4 sm:p-6 pt-10 sm:pt-12 font-mono text-xs sm:text-sm h-full overflow-auto">
                  <p className="text-green-400">$ <span className="text-white">skills --list --category=technical</span></p>
                  <p className="text-cyan-300 ml-3 sm:ml-4">├─ <span className="text-pink-300">Frontend:</span> React, Next.js</p>
                  <p className="text-cyan-300 ml-3 sm:ml-4">├─ <span className="text-yellow-300">Backend:</span> Node.js, Express</p>
                  <p className="text-cyan-300 ml-3 sm:ml-4">├─ <span className="text-purple-300">Cloud:</span> AWS (EC2, S3)</p>
                  <p className="text-cyan-300 ml-3 sm:ml-4">└─ <span className="text-green-300">Tools:</span> Git, Docker</p>
                  
                  <p className="text-green-400 mt-2 sm:mt-4">$ <span className="text-white">skills --highlight</span></p>
                  <p className="text-cyan-300 ml-3 sm:ml-4">→ Architecting full-stack solutions</p>
                  
                  <p className="text-green-400 mt-2 sm:mt-4">$ <span className="text-white blink">_</span></p>
                </div>
              </motion.div>
            )}

            {/* Floating Elements - Smaller on mobile */}
            <motion.div
              className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 bg-gradient-to-br from-purple-600/80 to-pink-500/80 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-lg sm:text-xl">💻</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs sm:text-sm mb-1 sm:mb-2 text-white/50">Explore more</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowRight className="text-lg sm:text-xl transform rotate-90 opacity-70" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
      `}</style>
    </section>
  );
};

export default Hero;