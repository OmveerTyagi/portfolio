import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import ParticlesBg from './components/ParticlesBg';
import './styles/index.css';

function App() {
  const [showParticles, setShowParticles] = useState(true);

  return (
    <Router>
      <div className="relative bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white min-h-screen overflow-hidden">
        {showParticles && <ParticlesBg />}
        <div className="fixed bottom-4 right-4 z-50">
          <button
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded shadow-md text-sm cursor-pointer"
            onClick={() => setShowParticles(!showParticles)}
          >
            {showParticles ? 'Hide Particles' : 'Show Particles'}
          </button>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;