// src/sections/TechStack.jsx
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

export default function TechStack() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Tech <span className="text-orange-400">Stack</span>
      </h2>
      <div className="flex justify-center flex-wrap gap-10 px-6 text-5xl text-orange-300">
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <FaJs title="JavaScript" />
        <FaReact title="React" />
        <FaNodeJs title="Node.js" />
        <SiExpress title="Express.js" />
        <SiMongodb title="MongoDB" />
        <SiTailwindcss title="Tailwind CSS" />
        <FaGithub title="GitHub" />
      </div>
    </section>
  );
}
