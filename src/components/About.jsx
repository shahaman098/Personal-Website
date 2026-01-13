import React from 'react';
import '../index.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="section-title gradient-text" style={{ textAlign: 'left' }}>About Me</h2>
                    <p>
                        I'm a Full Stack Developer with a passion for building beautiful, functional, and scalable web applications.
                        With expertise in modern JavaScript frameworks like React and Next.js, I bridge the gap between design and engineering.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open source, or designing user interfaces.
                    </p>

                    <div className="stats">
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                    </div>
                </div>

                <div className="about-image glass">
                    {/* Placeholder for profile image, using a decorative element for now */}
                    <div className="decorative-circle"></div>
                </div>
            </div>

            <style jsx>{`
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .stats {
          display: flex;
          gap: 3rem;
          margin-top: 2rem;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--accent-primary);
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .about-image {
          height: 400px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.02);
        }

        .decorative-circle {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 50%;
          filter: blur(60px);
          animation: pulse 4s infinite alternate;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 0.8; }
        }

        @media (max-width: 768px) {
          .about-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .section-title { /* Override inline style for mobile if needed, but flex/grid fixes most */
             text-align: center !important; 
          }

          .stats {
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
