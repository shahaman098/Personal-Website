import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, Code, Zap } from 'lucide-react';

const projects = [
  {
    category: "Hackathons & Prototypes",
    title: "AI-Powered Documentation Assistant",
    context: "24-hour University Hackathon",
    desc: "Built a RAG-based chatbot to query internal technical documentation instanly.",
    stack: ["Python", "LangChain", "OpenAI", "React"],
    outcome: "First Place Winner; Demoed to 200+ attendees."
  },
  {
    category: "Infrastructure & Systems",
    title: "Secure VPS Automation Pipeline",
    context: "Internal Tooling",
    desc: "Automated the provisioning and hardening of Linux VPS instances for staging environments.",
    stack: ["Bash", "Docker", "Ansible", "Linux"],
    outcome: "Reduced deployment time from 2 hours to 10 minutes."
  },
  {
    category: "Web Platforms",
    title: "Community Event Dashboard",
    context: "Client Project",
    desc: "Full-stack event management platform handling registrations and ticketing.",
    stack: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    outcome: "Deployed to production; handled 500+ users securely."
  },
  {
    category: "Experiments & Demos",
    title: "Real-time Data Visualizer",
    context: "Technical Exploration",
    desc: "High-performance dashboard for visualizing socket stream data.",
    stack: ["React", "WebSockets", "D3.js"],
    outcome: "Open-sourced implementation."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm font-mono text-emerald-400 mb-12 uppercase tracking-widest">Selected Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/20 border border-slate-800 p-6 rounded-lg hover:border-slate-600 transition-colors group">
              <div className="text-xs font-mono text-slate-500 mb-2">{project.category}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-xs text-slate-500 border-t border-slate-800/50 pt-3">
                <span className="font-semibold text-slate-400">Outcome:</span> {project.outcome}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
