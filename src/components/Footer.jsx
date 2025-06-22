import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-6 mt-12 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Omveer Tyagi. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/omveertyagi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition-colors text-xl"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:omveertyagi544437@gmail.com"
            className="text-cyan-400 hover:text-white transition-colors text-xl"
            title="Emaild"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/omveer-tyagi20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition-colors text-xl"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
