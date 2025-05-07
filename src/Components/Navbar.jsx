export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-gray-700 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-bold tracking-wide text-orange-400 drop-shadow-md">
          Mohammed Al Ashik
        </h1>
        <ul className="flex gap-6 text-sm md:text-base font-medium text-white">
          <li>
            <a
              href="#home"
              className="hover:text-orange-400 hover:drop-shadow transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-orange-400 hover:drop-shadow transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-orange-400 hover:drop-shadow transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-orange-400 hover:drop-shadow transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
