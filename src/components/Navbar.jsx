import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-zinc-900 shadow-md backdrop-blur-md">
      <h1 className="text-xl font-bold text-cyan-400">Omveer Tyagi</h1>
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`relative hover-lift px-2 py-1 transition-colors ${pathname === link.path ? 'text-cyan-400' : 'text-white'}`}
            >
              <span className="absolute inset-0 border border-cyan-400 rounded-md opacity-0 group-hover:opacity-100 animate-pulse"></span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;