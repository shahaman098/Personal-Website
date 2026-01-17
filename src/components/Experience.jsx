import React from 'react';
import { motion } from 'framer-motion';

const experience = [
    {
        role: "Cloud & Systems Engineer",
        company: "Freelance",
        period: "2023 — Present",
        items: [
            {
                context: "Small business clients required secure, cost-effective hosting infrastructure.",
                action: "Architected and managed Linux VPS environments (Ubuntu/Debian). Automated security patching and data backups using Python and Cron.",
                result: "Delivered 99.9% uptime for client sites and reduced hosting costs by 40% vs managed solutions."
            }
        ]
    },
    {
        role: "Hackathon Lead & Technical Builder",
        company: "Various Events",
        period: "2022 — 2024",
        items: [
            {
                context: "Competed in high-pressure 24/48-hour development sprints against university teams.",
                action: "Led technical implementation and architecture decisions. Rapidly prototyped MVPs using React and Node.js.",
                result: "Consistent finalist placement. Successfully shipped 5+ functional demos."
            }
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
                <h2 className="text-sm font-mono text-emerald-400 mb-12 uppercase tracking-widest">Experience (STAR)</h2>

                <div className="space-y-16">
                    {experience.map((job, index) => (
                        <div key={index} className="relative border-l border-slate-700 pl-8 ml-2">
                            <span className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-slate-700 border border-slate-900"></span>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-6">
                                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                <div className="text-slate-500 font-mono text-sm">{job.period}</div>
                            </div>
                            <div className="text-emerald-400 text-sm font-medium mb-6 uppercase tracking-wider">{job.company}</div>

                            <div className="space-y-8">
                                {job.items.map((item, i) => (
                                    <div key={i} className="bg-slate-800/20 p-5 rounded border border-slate-800/50">
                                        <div className="mb-3">
                                            <span className="text-xs font-bold text-slate-500 uppercase">Context</span>
                                            <p className="text-slate-300 text-sm mt-1">{item.context}</p>
                                        </div>
                                        <div className="mb-3">
                                            <span className="text-xs font-bold text-slate-500 uppercase">Action</span>
                                            <p className="text-slate-300 text-sm mt-1">{item.action}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-slate-500 uppercase">Result</span>
                                            <p className="text-emerald-300 text-sm font-medium mt-1">{item.result}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
