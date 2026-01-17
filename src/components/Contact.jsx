import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800/50">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold text-white mb-6">Ready to collaborate?</h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    I'm currently open entirely to new opportunities, from hackathons to full-time engineering roles.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <a href="mailto:2383758@brunel.ac.uk" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-6 py-3 rounded-md font-bold transition-all w-full md:w-auto justify-center">
                        <Mail className="w-4 h-4" />
                        2383758@brunel.ac.uk
                    </a>
                    <div className="flex gap-4">
                        <a href="https://github.com/shahaman098" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-md transition-colors" aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/amansahcode/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-md transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="/Kris_Aman-Kumar-Sah_CV.pdf" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-md transition-colors flex items-center gap-2 group" aria-label="Download CV">
                            <FileText className="w-5 h-5" />
                            <span className="text-sm font-medium hidden group-hover:inline-block">Download CV</span>
                        </a>
                    </div>
                </div>

                <footer className="mt-20 text-slate-600 text-sm">
                    &copy; {new Date().getFullYear()} Kris. Built with React & Tailwind.
                </footer>
            </motion.div>
        </section>
    );
};

export default Contact;
