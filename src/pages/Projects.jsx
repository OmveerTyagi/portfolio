import React, { useEffect } from 'react';
import projects from '../constants/projects';

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card-inner');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (x - centerX) / 10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
    });
  }, []);

  return (
    <section className="px-8 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-cyan-400">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="tilt-card">
            <div className="tilt-card-inner hover-lift relative p-6 rounded-xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-md border border-white/10 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-white mb-2 relative z-10">{project.title}</h3>
              <p className="text-zinc-300 mb-4 relative z-10">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-block mt-2 text-cyan-400 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;