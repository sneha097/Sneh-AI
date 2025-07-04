'use client';

import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Education from '../sections/Education';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';  
import Certificates from '../sections/Certificates';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main className="text-white">
      <Hero />
      <About />
            <Education />

            <Skills />

      <Projects />
      <Certificates />
      <Contact />
      
    </main>
  );
}
