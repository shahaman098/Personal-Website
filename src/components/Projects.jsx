import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    category: "Hackathons & Prototypes",
    title: "AI-Powered Documentation Assistant",
    context: "Finalist in 24-hour University Hackathon. The problem was inefficient manual searching of technical docs.",
    actions: [
      "Engineered a RAG (Retrieval-Augmented Generation) pipeline using Python and LangChain.",
      "Integrated OpenAI API for query processing and vector search.",
      "Built a React frontend for real-time interaction.",
    ],
    result: "Secured 1st Place. Demoed a functional MVP to 200+ attendees.",
    proof: "Private repo — available on request (Live demo recording available)",
    insight: "Optimized vector search latency to <200ms."
  },
  {
    category: "Infrastructure & Systems",
    title: "Secure VPS Automation Pipeline",
    context: "Needed to reduce manual configuration time and security risks for new staging environments.",
    actions: [
      "Wrote Bash and Ansible scripts to automate server provisioning.",
      "Implemented SSH hardening and firewall configuration (UFW).",
      "Containerized core services using Docker for consistency.",
    ],
    result: "Reduced deployment time from 2 hours to 10 minutes per instance. Zero security incidents.",
    proof: "Private repo — available on request",
    insight: "Idempotent Ansible playbooks ensure consistency."
  },
  {
    category: "Web Platforms",
    title: "Community Event Dashboard",
    context: "Client needed a custom platform to handle registrations for a 500-person event.",
    actions: [
      "Designed a full-stack Next.js architecture with PostgreSQL.",
      "Implemented secure authentication and role-based access control.",
      "Optimized database queries for peak load performance.",
    ],
    result: "Successfully handled 500+ users without downtime.",
    proof: "deployed-site-example.com (Client Proprietary)",
    insight: "Implemented redis caching for high-read endpoints."
  },
  {
    category: "Experiments & Demos",
    title: "Real-time Data Visualizer",
    context: "Exploration of high-frequency data handling in the browser.",
    actions: [
      "Built a WebSocket server to stream mock financial data.",
      "Implemented D3.js and Canvas API for performant rendering.",
      "Optimized React state management to prevent re-renders.",
    ],
    result: "Achieved 60fps rendering with 10k+ data points.",
    proof: "https://github.com/shahaman098/data-viz-demo (Open Source)",
    insight: "Used Canvas API over SVG for performance with >1k nodes."
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
        <h2 className="text-sm font-mono text-emerald-400 mb-12 uppercase tracking-widest">Selected Projects (STAR)</h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-800/20 border border-slate-800 p-6 rounded-lg hover:border-slate-600 hover:bg-slate-800/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-xs font-mono text-emerald-400 border border-emerald-900 bg-emerald-900/20 px-2 py-1 rounded w-fit">
                  {project.category}
                </span>
                {project.insight && (
                  <span className="text-xs font-medium text-slate-500 italic">
                    Details: {project.insight}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Context</h4>
                  <p className="text-slate-300 leading-relaxed text-sm">{project.context}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Action</h4>
                  <ul className="list-disc list-outside ml-4 text-slate-300 space-y-1 text-sm">
                    {project.actions.map((action, i) => (
                      <li key={i}>{action}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Result</h4>
                  <p className="text-emerald-300 font-medium leading-relaxed text-sm border-l-2 border-emerald-500 pl-3">
                    {project.result}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-800/50">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Proof:</span>
                  <span className="text-sm font-mono text-slate-400 break-all">{project.proof}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
