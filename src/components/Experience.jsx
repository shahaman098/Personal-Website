import React from 'react';
import { motion } from 'framer-motion';

const experience = [
    {
        role: "Cloud & Systems Engineer",
        company: "Freelance / Independent",
        period: "2023 — Present",
        details: [
            "Architected and deployed secure cloud infrastructure for small business clients.",
            "Maintained Linux VPS environments, performing regular security patches and automation.",
            "Developed custom Python scripts to automate data backups and system monitoring."
        ]
    },
    {
        role: "Technical Builder & Participant",
        company: "Various Hackathons",
        period: "2022 — 2024",
        details: [
            "Prototyped full-stack applications under strictly time-boxed conditions.",
            "Led technical implementation for diverse teams of 3-5 members.",
            "Demonstrated working MVPs to judges and industry panels."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800/50">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-sm font-mono text-emerald-400 mb-12 uppercase tracking-widest">Experience</h2>

                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-10">
                            <div className="md:w-1/4">
                                <div className="font-mono text-slate-500 text-sm whitespace-nowrap">{job.period}</div>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-lg font-bold text-white mb-1">{job.role}</h3>
                                <div className="text-emerald-400 text-sm mb-4">{job.company}</div>
                                <ul className="space-y-2">
                                    {job.details.map((item, i) => (
                                        <li key={i} className="text-slate-400 text-sm leading-relaxed pl-4 border-l border-slate-700">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
