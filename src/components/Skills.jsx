import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    "Cloud & Infrastructure": ["Linux Administration", "Docker", "AWS (EC2, S3)", "Nginx", "Bash Scripting"],
    "Web & Platforms": ["React", "Next.js", "Tailwind CSS", "Node.js", "REST APIs"],
    "Automation & Data": ["Python", "Git", "CI/CD Protocols", "SQL", "System Monitoring"],
    "Tools & Workflow": ["VS Code", "Postman", "Figma", "Jira", "Technical Writing"]
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800/50">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-sm font-mono text-emerald-400 mb-12 uppercase tracking-widest">Technical Toolkit</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-white font-medium mb-4 pb-2 border-b border-slate-800 inline-block">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-400 text-sm rounded transition-colors hover:border-slate-600 hover:text-white cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
