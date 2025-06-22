// File: pages/About.jsx
import React, { useEffect, useRef } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiSpringboot,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", level: 90 },
  { icon: <FaCss3Alt />, name: "CSS3", level: 85 },
  { icon: <FaJsSquare />, name: "JavaScript", level: 92 },
  { icon: <FaReact />, name: "React", level: 88 },
  { icon: <SiRedux />, name: "Redux", level: 80 },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 85 },
  { icon: <SiBootstrap />, name: "Bootstrap", level: 75 },
  { icon: <FaGitAlt />, name: "Git", level: 78 },
  { icon: <FaJava />, name: "Java", level: 82 },
  { icon: <SiSpringboot />, name: "Spring Boot", level: 70 },
];

const About = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    const cards = skillRef.current.querySelectorAll(".skill-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="px-8 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h2>
      <p className="text-lg leading-8 mb-10">
        I'm Omveer Tyagi, a frontend developer with a passion for crafting
        interactive, user-focused web applications. With hands-on experience in
        technologies like React.js, Redux, and Tailwind CSS, I enjoy building
        clean, scalable interfaces that blend functionality with modern design
        trends. My journey includes real-world experience as a Frontend
        Developer Intern at CrazyWebDev Technologies, where I built
        production-grade React apps, integrated RESTful APIs, and applied state
        management tools like Redux and Context API. I've also undergone Java
        Full-Stack training at QSpiders, gaining a strong foundation in backend
        technologies like Java, Spring, and JDBC. Whether it’s e-commerce,
        productivity tools, or immersive UI design, I’m constantly exploring how
        to deliver smooth, engaging digital experiences.
      </p>

      <div className="bg-zinc-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          ref={skillRef}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="hover-lift bg-zinc-900 rounded-lg p-4 flex flex-col items-center justify-center text-center text-cyan-400 shadow-md hover:shadow-cyan-500/30 transition-all"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <div className="text-sm font-medium text-white mb-2">
                {skill.name}
              </div>
              <div className="w-full bg-zinc-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-full rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
