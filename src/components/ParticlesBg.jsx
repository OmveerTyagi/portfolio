// File: components/ParticlesBg.jsx
import React, { useEffect } from 'react';

const ParticlesBg = () => {
  useEffect(() => {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gradientColors = [
      'rgba(0,255,255,0.3)',
      'rgba(0,128,255,0.3)',
      'rgba(255,0,255,0.3)',
      'rgba(255,255,0,0.3)',
    ];

    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 15 + 0.5,
      dx: Math.random() * 0.5 - 0.25,
      dy: Math.random() * 0.5 - 0.25,
      scale: 1,
      scaleDir: Math.random() > 0.5 ? 1 : -1,
      color: gradientColors[Math.floor(Math.random() * gradientColors.length)],
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.scale += 0.005 * p.scaleDir;
        if (p.scale >= 1.2 || p.scale <= 0.8) p.scaleDir *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * p.scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas
      id="particles"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    ></canvas>
  );
};

export default ParticlesBg;
