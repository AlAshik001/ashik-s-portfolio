import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/WhatsApp Image 2025-05-08 at 00.27.30_f3cdf0fc.jpg';
import resume from '../assets/Thenvanathi Resume.pdf'; // Import your resume file

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="text-center flex flex-col items-center max-w-xl text-white">
        <img
          src={profile}
          alt="Al Ashik"
          className="w-40 h-40 rounded-full object-cover border-4 border-orange-400 shadow-xl mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">
          Hi, I'm <span className="text-orange-400">Mohammed Al Ashik</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          A passionate MERN Stack Developer who brings ideas to life through modern, responsive, and functional web applications.
        </p>

        <div className="flex gap-6 text-xl text-orange-300 mb-6">
          <a
            href="https://github.com/AlAshik001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/alashik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:alashik0009@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <a
          href={resume} // Link to your resume
          download="#" // Name that will appear for the download
          className="bg-orange-400 text-white py-2 px-6 rounded-full hover:bg-orange-500 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
