'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaMobile, FaDatabase, FaCreativeCommonsPdAlt } from 'react-icons/fa';

const About = () => {
  const skills = [
    { icon: <FaCode />, name: 'Frontend' },
    { icon: <FaServer />, name: 'Backend' },
    { icon: <FaDatabase />, name: 'Database' },
    { icon: <FaCloud />, name: 'Cloud' },
    { icon: <FaMobile />, name: 'Responsive' },
    { icon: <FaCreativeCommonsPdAlt />, name: 'Design Systems' }
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-[50vh] px-4 py-12 md:py-16 bg-gradient-to-br from-[#0f0c29] via-[#1e1b4b] to-[#24243e] text-white flex items-center justify-center overflow-hidden"
      
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-[20%] left-[10%] w-[200px] h-[200px] bg-[#a855f7]/10 rounded-full blur-[80px] z-0"
        animate={{ 
          y: [0, -15, 0],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute bottom-[15%] right-[15%] w-[180px] h-[180px] bg-[#06b6d4]/10 rounded-full blur-[60px] z-0"
        animate={{ 
          y: [0, -15, 0],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
      />
      <motion.div 
        className="absolute top-[30%] right-[20%] w-[150px] h-[150px] bg-[#ec4899]/10 rounded-full blur-[50px] z-0"
        animate={{ 
          y: [0, -15, 0],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }
        }}
      />

      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 z-10">
        {/* Image Container with Decorations */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative w-full max-w-sm"
        >
          <div className="relative aspect-[3/4]">
            {/* Decorative layers */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rotate-6 scale-105 opacity-70 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
              animate={{
                rotate: [6, 8, 6],
                transition: { duration: 8, repeat: Infinity }
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b]/50 to-[#24243e]/50 -rotate-6 scale-105 opacity-60 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
              animate={{
                rotate: [-6, -8, -6],
                transition: { duration: 8, repeat: Infinity, delay: 2 }
              }}
            />

            {/* Main image */}
            <div className="relative w-full h-full overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%]">
              <Image
                src="/assets/images/SNEHA-1.jpg"
                alt="Sneha Singh"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Animated corner decorations */}
            <motion.div 
              className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-purple-400/50"
              whileHover={{ scale: 1.2 }}
            />
            <motion.div 
              className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-pink-400/50"
              whileHover={{ scale: 1.2 }}
            />
          </div>

          {/* Floating icon */}
          <motion.div
            className="absolute -top-4 -right-4 bg-[#1e1b4b] border border-purple-400/30 w-12 h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
            animate={{ 
              rotate: 360,
              y: [0, -5, 0],
              transition: { 
                rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                y: { duration: 3, repeat: Infinity }
              }
            }}
          >
            <FaCode className="text-purple-300 text-lg" />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
          >
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              Me
            </span>
          </motion.h2>

          <motion.p 
            className="text-gray-300 mt-4 leading-relaxed"
            whileHover={{ x: 3 }}
          >
            I'm a builder who codes with purpose — a <span className="text-purple-300 font-medium">Computer Science graduate</span> passionate about crafting meaningful, scalable experiences using the <span className="text-purple-300 font-medium">MERN stack</span> and <span className="text-purple-300 font-medium">AWS</span>.
          </motion.p>

          <motion.p 
            className="text-gray-300 mt-3 leading-relaxed"
            whileHover={{ x: 3 }}
          >
            From driving sustainability through <span className="text-purple-300">WASRUK</span> to empowering women's health with <span className="text-purple-300">DIVA</span>, I bring clean code, thoughtful design, and real-world impact.
          </motion.p>

          <motion.p 
            className="text-gray-300 mt-3 leading-relaxed"
            whileHover={{ x: 3 }}
          >
            Currently expanding my skills in <span className="text-purple-300">cloud-native architecture</span> and <span className="text-purple-300">immersive tech</span>.
          </motion.p>

          {/* Skills */}
          <motion.div
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-[#1e1b4b]/50 hover:bg-[#1e1b4b]/70 border border-purple-900/30 rounded-lg p-3 flex items-center gap-3 transition-all h-full backdrop-blur-sm"
                whileHover={{ 
                  y: -5,
                  borderColor: 'rgba(168, 85, 247, 0.5)',
                  transition: { type: 'spring', stiffness: 300 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <motion.div 
                  className="bg-purple-900/30 border border-purple-800/50 w-8 h-8 rounded-lg flex items-center justify-center text-purple-300 text-sm"
                  whileHover={{ rotate: 15 }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;