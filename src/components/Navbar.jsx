import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo gradient-text">Portfolio.</a>

                <div className="desktop-nav">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>

                <div className={`mobile-nav ${mobileMenuOpen ? 'open glass' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-nav-link"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          height: var(--header-height);
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          height: 70px;
        }

        .nav-container {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-size: 0.95rem;
          color: var(--text-secondary);
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }

        .bar {
          width: 24px;
          height: 2px;
          background-color: var(--text-primary);
          transition: all 0.3s;
        }

        .bar.open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 6px);
        }

        .bar.open:nth-child(2) {
          opacity: 0;
        }

        .bar.open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -6px);
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          right: -100%; /* Hidden by default */
          width: 250px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          transition: right 0.3s ease-in-out;
          background-color: rgba(10, 10, 10, 0.95); /* Fallback */
        }
        
        .mobile-nav.open {
          right: 0;
        }

        .mobile-nav-link {
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-toggle {
            display: flex;
            z-index: 1001;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
