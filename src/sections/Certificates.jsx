'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const certificates = [
  {
    title: 'AWS Cloud Practitioner',
    image: '/certificates/aws.jpg',
  },
  {
    title: 'Java Full Stack - Wipro',
    image: '/certificates/wipro.png',
  },
];

export default function Certificates() {
  const [hoveredImage, setHoveredImage] = useState('');
  const [showFixedImage, setShowFixedImage] = useState(false);

  return (
    <section
      id="certificates"
      className="relative w-full py-16 px-6 bg-gradient-to-br from-[#0f0c29] via-[#1e1b4b] to-[#24243e] text-white overflow-hidden"
    >
      {/* Glow Effects - More Subtle */}
      <div className="absolute top-[10%] left-[10%] w-[200px] h-[200px] bg-[#a855f7]/10 rounded-full blur-[80px] z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[200px] h-[200px] bg-[#06b6d4]/10 rounded-full blur-[80px] z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Compact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-4">
            Certifications
          </h2>
          <p className="text-gray-300 max-w-lg mx-auto">
            Validations of my technical expertise and professional skills
          </p>
          <div className="w-24 h-1 mt-6 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full mx-auto" />
        </motion.div>

        {/* Fixed Image Preview - More Compact */}
        <div
          className={`fixed top-1/2 right-[5%] w-64 h-80 rounded-xl shadow-xl z-10 transition-all duration-300 ease-out transform -translate-y-1/2 ${
            showFixedImage ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: hoveredImage ? `url(${hoveredImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            boxShadow: '0 15px 30px -5px rgba(168, 85, 247, 0.2)',
          }}
        >
          {hoveredImage && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <h3 className="text-white text-lg font-medium">
                {certificates.find(c => c.image === hoveredImage)?.title}
              </h3>
            </div>
          )}
        </div>

        {/* Compact Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => {
                setHoveredImage(cert.image);
                setShowFixedImage(true);
              }}
              onMouseLeave={() => {
                setShowFixedImage(false);
                setHoveredImage('');
              }}
            >
              {/* Certificate Card - More Compact */}
              <div className="flex items-center gap-4 p-4 bg-[#1e1b4b]/60 backdrop-blur-sm rounded-lg border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 h-full hover:shadow-md hover:shadow-purple-500/10">
                {/* Number Badge - Smaller */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-md border border-purple-800/50 transition-all duration-300">
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    {index + 1}
                  </span>
                </div>
                
                {/* Certificate Info - More Compact */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Hover to preview
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}