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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="education"
      className="relative w-full px-6 py-16 bg-gradient-to-br from-[#0f0c29] via-[#1e1b4b] to-[#24243e] text-white"
    >
      {/* Background Elements */}
      <div className="absolute top-[10%] left-[10%] w-[200px] h-[200px] bg-[#a855f7]/10 rounded-full blur-[80px] z-0" />
      <div className="absolute bottom-[15%] right-[15%] w-[150px] h-[150px] bg-[#06b6d4]/10 rounded-full blur-[60px] z-0" />

      <div className="max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              Education
            </span>
          </h2>
          <p className="text-md text-gray-300 max-w-2xl mx-auto">
            My educational journey has been fueled by curiosity and creativity.
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
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 md:left-1/2 md:transform md:-translate-x-1/2"></div>

          <div className="space-y-8 pl-10 md:pl-0">
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-22px] top-5 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-20 border-2 border-[#1e1b4b] md:left-1/2 md:transform md:-translate-x-1/2"></div>

                {/* Education Card */}
                <motion.div
                  className="bg-[#1e1b4b]/50 border border-purple-900/30 rounded-xl p-5 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-lg self-start">
                      <FaGraduationCap className="text-white text-lg" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {education.school}
                      </h3>
                      <p className="text-purple-300 font-medium text-sm mb-2">
                        {education.degree}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                        <div className="flex items-center gap-1 text-gray-300">
                          <FaCalendarAlt className="text-purple-400" />
                          <span>{education.date}</span>
                        </div>
                        <div className="bg-gradient-to-r from-purple-600/20 to-pink-500/20 px-2 py-1 rounded-full border border-purple-500/30">
                          <span className="text-purple-200">
                            {education.description.split(' | ')[0]}
                          </span>
                        </div>
                      </div>

                      {education.description.includes(' | ') && (
                        <p className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          {education.description.split(' | ')[1]}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;