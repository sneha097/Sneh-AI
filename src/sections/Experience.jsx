'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCodeBranch } from 'react-icons/fa';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const experiences = [
  {
    role: 'Systems Engineer Trainee',
    company: 'Infosys',
    location: 'India',
    period: 'August 2025 – Present',
    type: 'Trainee',
    points: [
      ' Undergoing comprehensive training in Java, SQL, MERN stack, and Selenium automation.',
      'Learning industry-standard development practices.',
      'Building hands-on experience through structured modules, demonstrating fast learning, problem-solving, and technical adaptability.'
    ]
  },
  {
    role: 'Backend Development Intern',
    company: 'Lenstrack Pvt. Ltd.',
    location: 'Noida, India',
    period: 'July 2025 – August 2025',
    type: 'Internship',
    points: [
      'Built and optimized RESTful APIs using Node.js, Express.js, and MongoDB.',
      'Implemented secure CRUD operations with authentication and role-based access control.',
      'Partnered with frontend engineers to ship smooth, end-to-end user experiences.'
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6 }
  })
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#0f0c29] via-[#1e1b4b] to-[#24243e] text-white overflow-hidden"
    >
      {/* Background glows */}
      <motion.div
        className="pointer-events-none absolute -top-24 -left-10 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/15 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-10 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-400/15 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

    <div className="relative z-10 max-w-5xl mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12 sm:mb-16"
  >
    {/* Top Tag */}
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    bg-white/10 backdrop-blur-md border border-purple-300/20
                    text-xs sm:text-sm text-purple-200/90 shadow-sm mb-4">
      <FaBriefcase className="text-purple-300" />
      <span className="tracking-wide">Experience</span>
    </div>

    
   

    {/* Title (match Education style) */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      My{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
        Experience
      </span>
    </h2>

    {/* Subtitle */}
    <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
        A quick overview of my roles, contributions, and technical journey.
    </p>
  </motion.div>

                    {/* Timeline */}
        <div className="relative pl-4 sm:pl-8">
          {/* Vertical line */}
          <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/60 via-cyan-400/40 to-transparent" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company + exp.role}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                className="relative flex gap-4"
              >
                {/* Timeline dot */}
                <div className="mt-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                </div>

                {/* Card */}
                <div className="flex-1">
                  <div className="relative bg-gray-900/60 border border-white/10 rounded-xl px-4 py-4 sm:px-6 sm:py-5 backdrop-blur-md shadow-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[2%] pointer-events-none" />
                    <div className="absolute -top-px left-0 w-24 h-[2px] bg-gradient-to-r from-purple-500 via-pink-400 to-transparent" />

                    <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                          <span>{exp.role}</span>
                          <FaCodeBranch className="text-purple-300 text-sm sm:text-base" />
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-300">
                          <span className="inline-flex items-center gap-1">
                            <HiOutlineOfficeBuilding className="text-purple-200/80" />
                            <span className="font-medium text-white/90">{exp.company}</span>
                          </span>
                          <span className="h-1 w-1 rounded-full bg-white/40" />
                          <span>{exp.location}</span>
                          <span className="h-1 w-1 rounded-full bg-white/40" />
                          <span className="text-purple-200/90">{exp.type}</span>
                        </div>
                      </div>

                      <div className="text-xs sm:text-sm text-gray-400 sm:text-right">
                        {exp.period}
                      </div>
                    </div>

                    <ul className="relative mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-200 leading-relaxed">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-[6px] h-1 w-1 rounded-full bg-purple-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
