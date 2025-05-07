import React from 'react';
import { motion } from 'framer-motion';
import projectData from './projectData';

export default function Projects() {
  const handleScrollToAllProjects = () => {
    const section = document.getElementById("all-projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen p-10 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Glowing floating background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="w-80 h-80 bg-purple-700 opacity-30 blur-3xl rounded-full absolute -top-16 -left-16 animate-pulse"></div>
        <div className="w-96 h-96 bg-orange-500 opacity-20 blur-2xl rounded-full absolute bottom-10 right-10 animate-ping"></div>
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-center text-5xl font-bold mb-14 text-white drop-shadow">
          Checkout My Live <span className="text-orange-400">Projects</span> Here
        </h2>

        {/* Top 3 Projects */}
        <div className="flex justify-center flex-wrap gap-8 px-4">
          {projectData.slice(0, 3).map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="w-64 backdrop-blur-lg bg-white/10 border border-gray-600 shadow-lg rounded-md cursor-pointer hover:shadow-orange-500 transition-all"
            >
              <img src={project.img} alt={project.title} className="rounded-md border" />
            </motion.a>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center my-10">
          <button
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
            onClick={handleScrollToAllProjects}
          >
            View More Projects
          </button>
        </div>

        {/* Full Projects Grid */}
        <div id="all-projects" className="mt-20">
          <h3 className="text-4xl font-bold mb-10 text-center text-white drop-shadow">
            All Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/10 border border-gray-700 backdrop-blur-md p-4 rounded-xl shadow hover:shadow-orange-400 transition-all"
                whileHover={{ scale: 1.03 }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                </a>
                <h3 className="text-xl font-semibold text-orange-400 mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 text-white px-2 py-1 rounded-full border border-gray-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <ul className="text-sm list-disc list-inside text-gray-200">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
