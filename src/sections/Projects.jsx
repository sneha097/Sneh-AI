"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Code,
  Server,
  Database,
  Github,
  PlayCircle,
  ExternalLink,
  Laptop,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      observer.observe(projectsSection);
    }
    return () => observer.disconnect();
  }, []);

  const getTechIcon = (tag) => {
    switch (tag) {
      case "React":
        return <Code size={14} className="text-cyan-400" />;
      case "Next.js":
        return <Code size={14} className="text-white" />;
      case "Node.js":
        return <Server size={14} className="text-green-400" />;
      case "MongoDB":
        return <Database size={14} className="text-emerald-400" />;
      case "TypeScript":
        return <Code size={14} className="text-blue-400" />;
      case "Tailwind":
        return <Code size={14} className="text-cyan-300" />;
      case "AWS":
        return <Code size={14} className="text-orange-400" />;
      case "GSAP":
        return <Code size={14} className="text-purple-400" />;
      case "Framer Motion":
        return <Code size={14} className="text-pink-400" />;
      default:
        return <Code size={14} className="text-gray-300" />;
    }
  };

  const projectList = [
    {
      title: "SnehAI – My Portfolio",
      description:
        "An interactive portfolio powered by AI, showcasing my journey, projects, and achievements through creative storytelling, SnehAI assistant, and elegant design.",
      link: "https://sneh-ai.vercel.app/",
      github: "https://github.com/sneha097/Sneh-AI",
      video: "https://youtu.be/sneha-portfolio-demo",
      tags: ["Next.js", "Tailwind", "GSAP", "Framer Motion"],
      icon: <Laptop size={28} />,
    accentColor: "from-[#A855F7] to-[#EC4899]", // rich violet to rose
bgGradient: "from-[#6B21A8]/30 to-[#BE185D]/30", // deeper purple-pink for background

      image: "/assets/images/project-1.png",
    },
    {
      title: "WASRUK – Smart Waste Management",
      description:
        "A tech-driven platform promoting waste segregation through gamification, WCoins, machine learning-powered dashboards, and impact tracking tools.",
      link: "https://www.wasruk.com/",
      github: "https://github.com/sneha097/Wasruk",
      video: "https://drive.google.com/file/d/13YCMSLZNIfAoUXeWe_zee8BTU4vdQylQ/view?usp=sharing",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      icon: <Sparkles size={28} />,
 accentColor: "from-[#A855F7] to-[#EC4899]", // rich violet to rose
bgGradient: "from-[#6B21A8]/30 to-[#BE185D]/30"// deeper purple-pink for background
,

      image: "/assets/images/project-4.png", // Make sure to add this image to your public directory
    },
   {
  title: "Diva – Women's Wellness & Empowerment",
  description:
    "A supportive digital space tailored for women, featuring mental wellness tracking, community forums, health resources, and emergency assistance tools.",
  link: "https://sneha097.github.io/SHE/",
  github: "https://github.com/sneha097/SHE",
  video: "https://drive.google.com/file/d/1AX-Jo1-RSvLi62J-99qMuyNn5yus4cMl/view",
  tags: ["React", "Node.js", "MongoDB", "Tailwind"],
  icon: <Globe size={28} />,
  accentColor: "from-rose-400 to-fuchsia-500",
  bgGradient: "from-rose-900/20 to-fuchsia-900/20",
  featured: false,
  image: "/assets/images/project-3.png", // Make sure to add this image to your public directory
}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const floatingVariants = {
    animate: (delay = 0) => ({
      y: [0, -15, 0],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    }),
  };

  return (
    <section
      id="projects-section"
      className="relative min-h-screen py-24 px-6 bg-gradient-to-br from-[#0f0c29] via-[#1e1b4b] to-[#24243e] text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-[20%] left-[5%] w-[200px] h-[200px] bg-fuchsia-500/10 rounded-full blur-[80px] z-0"
        variants={floatingVariants}
        animate="animate"
        custom={1}
      />
      <motion.div 
        className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[90px] z-0"
        variants={floatingVariants}
        animate="animate"
        custom={3}
      />
      <motion.div 
        className="absolute top-[50%] right-[5%] w-[180px] h-[180px] bg-emerald-500/10 rounded-full blur-[70px] z-0"
        variants={floatingVariants}
        animate="animate"
        custom={2}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Ideas to <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Impact</span>{" "}
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Each project represents a unique solution crafted with cutting-edge technologies and attention to detail.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-${project.accentColor.split(' ')[0].replace('from-', '')}/30 transition-all duration-500 h-full flex flex-col ${
                  hoveredProject === index ? 'shadow-xl' : 'shadow-lg'
                }`}
                whileHover={{ 
                  y: -8,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient Accent */}
                <div className={`h-1.5 bg-gradient-to-r ${project.accentColor}`} />
                
                {/* Project Header with Image */}
                <div className={`relative h-48 ${project.bgGradient} overflow-hidden`}>
                  {project.image && (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[3%]" />
                    </>
                  )}
                  
                  <motion.div
                    className="relative z-10 text-center p-4 w-full"
                    animate={hoveredProject === index ? { y: -10 } : { y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${project.accentColor} shadow-lg mb-4 mx-auto`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800/70 border border-gray-700/50 text-gray-200 text-xs rounded-full backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "rgba(39, 39, 42, 0.9)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {getTechIcon(tag)}
                        <span>{tag}</span>
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.accentColor} hover:opacity-90 text-white rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/70 hover:bg-gray-700/70 text-gray-200 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/70 hover:bg-gray-700/70 text-gray-200 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PlayCircle size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-r ${project.accentColor} blur-xl -z-10`}
                  animate={{
                    opacity: hoveredProject === index ? 0.1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-fuchsia-600/20 to-pink-600/20 border border-fuchsia-500/30 rounded-full text-fuchsia-300 font-medium hover:from-fuchsia-600/30 hover:to-pink-600/30 transition-all duration-300 backdrop-blur-sm hover:shadow-fuchsia-500/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Want to collaborate on a project?</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;