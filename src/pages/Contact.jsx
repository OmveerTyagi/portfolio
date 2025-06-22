import React from 'react';

const Contact = () => {
  return (
    <section className="px-8 py-16 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contact</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-zinc-800 text-white border border-transparent focus:border-cyan-400 transition-all" required />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-zinc-800 text-white border border-transparent focus:border-cyan-400 transition-all" required />
        <textarea placeholder="Your Message" rows="5" className="p-3 rounded bg-zinc-800 text-white border border-transparent focus:border-cyan-400 transition-all" required></textarea>
        <button type="submit" className="relative z-10 bg-cyan-500 text-white px-6 py-3 rounded font-semibold overflow-hidden group">
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-xl opacity-60 animate-spin-slow group-hover:opacity-80"></span>
          <span className="relative">Send Message</span>
        </button>
      </form>
    </section>
  );
};

export default Contact;