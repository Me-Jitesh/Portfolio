export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Jitesh Singh</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
