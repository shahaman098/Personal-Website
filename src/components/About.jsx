import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-mono text-emerald-400 mb-8 uppercase tracking-widest">About</h2>
        <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
          <p>
            I work on production-grade web and cloud systems, with experience spanning VPS management, security hardening, automation, and rapid prototyping. My work includes maintaining live organisational platforms, building hackathon demos, and collaborating with technical and non-technical stakeholders.
          </p>
          <p>
            I focus on simple, reliable architectures that solve real problems. Whether it's deploying a secured containerized environment or shipping a frontend prototype in 24 hours, I prioritize execution and maintainability over theoretical perfection.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
