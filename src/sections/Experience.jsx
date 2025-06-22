import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Java Full-Stack Trainee',
      company: 'QSpiders, Noida',
      time: '2025 - Present',
      description:
        'Trained in Java, JDBC, Servlets, and Spring. Developed full-stack apps using OOP principles and modern frontend tools.',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'CrazyWebDev Technologies',
      time: 'Dec 2023 – Jun 2024',
      description:
        'Built high-performance web apps using React, integrated APIs, and managed state using Redux and Context API.',
    },
  ];

  return (
    <section className="px-8 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-cyan-400">Experience</h2>
      <ul className="space-y-8">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="hover-lift bg-zinc-800 p-6 rounded-lg shadow hover:shadow-cyan-500/30 transition-all"
          >
            <h3 className="text-xl font-semibold text-white">
              {exp.title} - <span className="text-cyan-400">{exp.company}</span>
            </h3>
            <p className="text-sm text-gray-400 mb-2">{exp.time}</p>
            <p className="text-zinc-300">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
