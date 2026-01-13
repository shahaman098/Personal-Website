import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* Contact will go here */}
        <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)' }}>
          <p>© 2024 Portfolio. Built with React.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
