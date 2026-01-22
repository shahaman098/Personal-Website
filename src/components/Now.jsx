import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Search } from 'lucide-react';

const Now = () => {
    const items = [
        {
            icon: <Activity className="w-5 h-5 text-emerald-400" />,
            label: "Building",
            text: "A distributed system for real-time asset tracking."
        },
        {
            icon: <Zap className="w-5 h-5 text-amber-400" />,
            label: "Improving",
            text: "Deepening knowledge in Rust and WebAssembly performance."
        },
        {
            icon: <Search className="w-5 h-5 text-sky-400" />,
            label: "Looking For",
            text: "Senior roles in Cloud Infrastructure or Backend Systems."
        }
    ];

    return (
        <section className="py-12 px-6 max-w-4xl mx-auto border-t border-slate-800/30">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-px bg-slate-800 flex-1"></div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Now / Currently</span>
                    <div className="h-px bg-slate-800 flex-1"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3 p-4 bg-slate-800/20 rounded-md border border-slate-800/50 hover:border-slate-700 transition-colors">
                            <div className="flex items-center gap-2 mb-1">
                                {item.icon}
                                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">{item.label}</h4>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Now;
