import React from 'react';
import '../index.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Dashboard',
            description: 'A comprehensive dashboard for managing online stores with real-time analytics.',
            tags: ['React', 'D3.js', 'Node.js'],
            link: '#',
            image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Dashboard'
        },
        {
            title: 'Social Media App',
            description: 'Full-stack social platform with real-time messaging and media sharing.',
            tags: ['Next.js', 'Tailwind', 'Firebase'],
            link: '#',
            image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Social+App'
        },
        {
            title: 'AI Content Generator',
            description: 'SaaS application leveraging LLMs to help efficient content creation.',
            tags: ['Python', 'FastAPI', 'React'],
            link: '#',
            image: 'https://placehold.co/600x400/1a1a1a/FFF?text=AI+Tool'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title gradient-text">Featured Work</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="overlay">
                                    <a href={project.link} className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .section {
          padding: 100px 0;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 3rem;
          text-align: center;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px -10px rgba(109, 40, 217, 0.3);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .overlay {
          opacity: 1;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .project-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          font-size: 0.8rem;
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
        }
      `}</style>
        </section>
    );
};

export default Projects;
