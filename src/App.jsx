import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Now from './components/Now';

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    return () => {
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200">
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg text-white tracking-tight">
            kris<span className="text-emerald-500">.dev</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Now />

        {/* Narrative Break 1 */}
        <section className="py-24 px-6 max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed"
          >
            "Systems should be boring. <br className="hidden md:block" />
            The innovation is in the reliability."
          </motion.p>
        </section>

        <About />
        <Projects />

        {/* Narrative Break 2 */}
        <section className="py-24 px-6 max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed"
          >
            "Code is liability. Value is functionality."
          </motion.p>
        </section>

        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
