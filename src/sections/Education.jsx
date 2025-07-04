'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      school: 'KIET Group of Institutions, AKTU',
      degree: 'B.Tech in Computer Science',
      date: '2021 - 2025',
      description: 'CGPA: 8.5 | Actively participated in multiple inter-college and national-level hackathons.',
    },
    {
      school: 'CBSE - HSS Public School',
      degree: 'Senior Secondary (Class 12)',
      date: '2020 - 2021',
      description: 'Percentage: 86% | Stream: PCM with Computer Science',
    },
    {
      school: 'CBSE - OPS International School',
      degree: 'Higher Secondary (Class 10)',
      date: '2018 - 2019',
      description: 'Percentage: 87%',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="education"
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

      <div className="max-w-6xl w-full z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My educational journey has been fueled by curiosity and creativity, enhanced by real-world applications and technical challenges.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 hidden lg:block"></div>

          {educationData.map((education, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-20 hidden lg:block border-4 border-[#1e1b4b]"></div>

              {/* Education Card */}
              <motion.div
                className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                }`}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="bg-[#1e1b4b]/50 hover:bg-[#1e1b4b]/70 border border-purple-900/30 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-lg">
                      <FaGraduationCap className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {education.school}
                      </h3>
                      <p className="text-purple-300 font-medium">
                        {education.degree}
                      </p>
                    </div>
                  </div>

                  {/* Date and Performance */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <FaCalendarAlt className="text-purple-400" />
                      <span>{education.date}</span>
                    </div>
                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                      <span className="text-sm font-medium text-purple-200">
                        {education.description.split(' | ')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-gray-300">
                    {education.description.includes(' | ') && education.description.split(' | ').length > 1 ? (
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">
                          {education.description.split(' | ').slice(1).join(' | ')}
                        </span>
                      </div>
                    ) : education.description.split(' | ').length === 1 && !education.description.includes('CGPA') && !education.description.includes('Percentage') ? (
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{education.description}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-10 left-10 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full w-20 h-20 flex items-center justify-center backdrop-blur-sm"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-2xl">🎓</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;