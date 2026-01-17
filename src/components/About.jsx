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
            I approach engineering with a systems-first mindset, focusing on security, maintainability, and reliability in every build. My experience spans managing live production environments, hardening Linux infrastructure, and automating deployment pipelines.
          </p>
          <p>
            I believe in learning by shipping. Whether it's a 24-hour hackathon prototype or a long-term enterprise platform, I prioritize delivering functional code that solves immediate problems under real-world constraints.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
