'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCloud, FaMobile, FaDatabase, FaPalette, FaCreativeCommonsPdAlt } from 'react-icons/fa';

const About = () => {
  const skills = [
    { icon: <FaCode className="text-xl" />, name: 'Frontend Development' },
    { icon: <FaServer className="text-xl" />, name: 'Backend Development' },
    { icon: <FaDatabase className="text-xl" />, name: 'Database Design' },
    { icon: <FaCloud className="text-xl" />, name: 'Cloud Architecture' },
    { icon: <FaMobile className="text-xl" />, name: 'Responsive Design' },
    { icon: <FaCreativeCommonsPdAlt className="text-xl" />, name: 'Design Systems' }
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen px-6 py-20 bg-gradient-to-br from-[#0f0c29] via-[#1e1b4b] to-[#24243e] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-[#a855f7]/10 rounded-full blur-[100px] z-0"
        animate={{ 
          y: [0, -15, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      <motion.div 
        className="absolute bottom-[15%] right-[15%] w-[250px] h-[250px] bg-[#06b6d4]/10 rounded-full blur-[80px] z-0"
        animate={{ 
          y: [0, -15, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }
        }}
      />
      <motion.div 
        className="absolute top-[30%] right-[20%] w-[200px] h-[200px] bg-[#ec4899]/10 rounded-full blur-[70px] z-0"
        animate={{ 
          y: [0, -15, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }
        }}
      />

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16 z-10">
        {/* Unique Image Container */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative w-full max-w-md"
        >
          <div className="relative aspect-[3/4]">
            {/* Creative layers behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rotate-6 scale-105 opacity-70 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b]/50 to-[#24243e]/50 -rotate-6 scale-105 opacity-60 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"></div>

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

            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-purple-400/50"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-pink-400/50"></div>
          </div>

          {/* Floating icon */}
          <motion.div
            className="absolute -top-6 -right-6 bg-[#1e1b4b] border border-purple-400/30 w-16 h-16 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          >
            <FaCode className="text-purple-300 text-xl" />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              Me
            </span>
          </h2>

          <p className="text-lg text-gray-300 mt-6 leading-relaxed">
            I'm a builder who codes with purpose — a <span className="text-purple-300 font-medium">Computer Science graduate</span> passionate about crafting meaningful, scalable experiences using the <span className="text-purple-300 font-medium">MERN stack</span> and <span className="text-purple-300 font-medium">AWS</span>.
          </p>

          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            From driving sustainability through <span className="text-purple-300">WASRUK</span> to empowering women's health with <span className="text-purple-300">DIVA</span>, I bring clean code, thoughtful design, and real-world impact to every line I write.
          </p>

          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            Currently expanding my skills in <span className="text-purple-300">cloud-native architecture</span> and <span className="text-purple-300">immersive tech</span> to shape solutions that don't just work — they resonate.
          </p>

          {/* Skills */}
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-[#1e1b4b]/50 hover:bg-[#1e1b4b]/70 border border-purple-900/30 rounded-lg p-4 flex items-center gap-4 transition-all duration-300 h-full backdrop-blur-sm"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="bg-purple-900/30 border border-purple-800/50 w-10 h-10 rounded-lg flex items-center justify-center text-purple-300">
                  {skill.icon}
                </div>
                <span className="text-gray-200 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;