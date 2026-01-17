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
          Kris (Aman Kumar Sah)
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-400 mb-6">
          Cloud & Systems Engineer
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Building secure, scalable digital systems and rapid technical prototypes.
        </p>

        <div className="mb-10 p-5 bg-slate-800/40 border-l-4 border-emerald-500 rounded-r-md">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Recruiter Snapshot</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-300 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              Hands-on cloud & web systems experience
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              Placement experience maintaining live platforms
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              Hackathon experience with shipped demos
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
              Focus on security, reliability, and automation
            </li>
          </ul>
        </div>

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
