import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Kris
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-400 mb-6">
          Cloud & Systems Engineer
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Building secure, scalable digital systems and rapid technical prototypes.
          <br />
          <span className="text-slate-500 text-base mt-2 block">
            Cloud • Web Systems • Automation • Security • Hackathons
          </span>
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-md font-medium hover:bg-slate-200 transition-colors"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-slate-700 text-slate-300 px-6 py-3 rounded-md font-medium hover:border-slate-500 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
