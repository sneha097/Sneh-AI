'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    techs: [
      { name: 'React', icon: '/icons/react.webp' },
      { name: 'Next.js', icon: '/icons/next.webp' },
      { name: 'TypeScript', icon: '/icons/ts.webp' },
      { name: 'JavaScript', icon: '/icons/js.webp' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.webp' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.webp' },
      { name: 'Framer Motion', icon: '/icons/framer-motion.webp' },
      { name: 'GSAP', icon: '/icons/gsap.webp' },
      { name: 'Redux', icon: '/icons/redux.webp' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    techs: [
      { name: 'Node.js', icon: '/icons/nodejs.webp' },
      { name: 'Express', icon: '/icons/express.webp' },
      { name: 'MongoDB', icon: '/icons/mongodb.webp' },
      { name: 'MySQL', icon: '/icons/mySQL.webp' },
      { name: 'Java', icon: '/icons/java.webp' },
      { name: 'REST APIs', icon: '/icons/rest api.webp' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    techs: [
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'AWS', icon: '/icons/aws.webp' },
      { name: 'Selenium', icon: '/icons/selenium.webp' },
      { name: 'CI/CD', icon: '/icons/ci.webp' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    techs: [
      { name: 'Git', icon: '/icons/git.webp' },
      { name: 'GitHub', icon: '/icons/github.webp' },
      { name: 'Figma', icon: '/icons/figma.webp' },
      { name: 'VS Code', icon: '/icons/vs code.webp' },
      { name: 'Postman', icon: '/icons/postman.webp' },
      { name: 'Stripe', icon: '/icons/stripe.webp' },
    ],
  },
];

const Skills = () => {
  return (
    <section 
      id="tech-stack" 
      className="relative w-full px-6 py-16 bg-gradient-to-br from-[#0f0c29] via-[#1e1b4b] to-[#24243e] text-white overflow-hidden"
    >
      {/* Enhanced Glow Elements */}
      <div className="absolute top-[10%] left-[10%] w-[200px] h-[200px] bg-[#a855f7]/10 rounded-full blur-[80px] z-0" />
      <div className="absolute bottom-[15%] right-[15%] w-[180px] h-[180px] bg-[#06b6d4]/10 rounded-full blur-[70px] z-0" />
      <div className="absolute top-[30%] right-[20%] w-[150px] h-[150px] bg-[#ec4899]/10 rounded-full blur-[60px] z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
         <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              Proficiencies
            </span>
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional digital experiences
          </p>
          <div className="w-20 h-0.5 mt-4 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full mx-auto" />
        </motion.div>

        {/* Skills Categories */}
        <div className="flex flex-col gap-10">
          {categories.map(({ id, label, techs }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex md:flex-row flex-col gap-6 items-start"
              id={id}
            >
              {/* Category Label */}
              <div className="w-full md:w-1/6">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent hover:from-cyan-400 hover:to-purple-400 transition-all duration-500 cursor-pointer">
                  {label}
                </div>
              </div>

              {/* Tech Grid */}
              <div className="w-full md:w-5/6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/15 rounded-lg blur-sm group-hover:blur-md transition-all duration-300 -z-10" />
                    
                    {/* Tech Card */}
                    <div className="flex flex-col items-center justify-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-400/60 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-purple-500/20">
                      {/* Enhanced Icon Container */}
                      <div className="relative w-10 h-10 mb-2 flex items-center justify-center">
                        {/* Icon Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/10 border border-white/20 rounded-lg group-hover:bg-gradient-to-br group-hover:from-purple-500/40 group-hover:to-pink-500/30 group-hover:border-purple-400/70 transition-all duration-300 rotate-45 scale-90 group-hover:rotate-0 group-hover:scale-100" />
                        
                        {/* Icon */}
                        <div className="relative w-6 h-6 flex items-center justify-center">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      
                      {/* Tech Name */}
                      <span className="text-gray-200 font-medium text-xs text-center group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;