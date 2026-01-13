import React from 'react';
import '../index.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="container hero-content">
                <h1 className="hero-title animate-fade-in">
                    Building <span className="gradient-text">Digital Experiences</span>
                    <br /> That Matter.
                </h1>
                <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    I'm a passionate developer crafting beautiful, high-performance web applications with a focus on user experience and modern design.
                </p>
                <div className="hero-cta animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <a href="#projects" className="btn btn-primary">View Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>

            <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(109, 40, 217, 0.15) 0%, rgba(10, 10, 10, 0) 50%);
          z-index: -1;
        }

        .hero-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
        }

        .btn {
          display: inline-block;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background-color: var(--accent-primary);
          color: white;
          box-shadow: 0 4px 14px 0 rgba(109, 40, 217, 0.39);
        }

        .btn-primary:hover {
          box-shadow: 0 6px 20px rgba(109, 40, 217, 0.23);
          background-color: var(--accent-secondary);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
