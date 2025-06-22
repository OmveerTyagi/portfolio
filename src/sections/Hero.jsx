import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="text-center py-24 px-4 bg-gradient-to-br from-zinc-800 to-black shadow-inner">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-cyan-400 drop-shadow-lg"
      >
        Hi, I'm Omveer Tyagi 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-xl mt-6 text-white/80"
      >
        Software Developer | React | Javascript | Web Applications
      </motion.p>
    </section>
  );
};

export default Hero;