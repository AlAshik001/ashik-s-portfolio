import React from 'react';

export default function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-8">
      {/* Glass Box */}
      <div className="bg-black/40 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl p-10 max-w-4xl w-full text-white">
        <h2 className="text-5xl font-bold mb-6 text-center">
          About <span className="text-orange-400 drop-shadow-[0_0_5px_rgba(255,165,0,0.8)]">Me</span>
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          Hello! I'm{' '}
          <span className="font-semibold text-orange-300 hover:text-orange-400 transition">
            Mohammed Al Ashik
          </span>, a committed MERN Stack Developer with a passion for building full-stack web applications. I specialize in React.js, Node.js, Express.js, and MongoDB, and I love crafting sleek, responsive UIs with Tailwind CSS.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          I've created impactful projects like a complete E-commerce platform, a bulk email manager. I focus on delivering clean code, smooth UX, and reliable backend systems—ready to take on real-world challenges.
        </p>
      </div>
    </section>
  );
}

