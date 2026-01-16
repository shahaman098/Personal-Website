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
                    <a href="mailto:hello@example.com" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-6 py-3 rounded-md font-bold transition-all w-full md:w-auto justify-center">
                        <Mail className="w-4 h-4" />
                        hello@example.com
                    </a>
                    <div className="flex gap-4">
                        <a href="#" className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-md transition-colors" aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-md transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 bg-slate-800 text-slate-400 hover:text-white rounded-md transition-colors flex items-center gap-2 group" aria-label="Resume">
                            <FileText className="w-5 h-5" />
                            <span className="text-sm font-medium hidden group-hover:inline-block">Resume</span>
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
