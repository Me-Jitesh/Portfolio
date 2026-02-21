export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-lg font-semibold text-gray-900">Jitesh Singh</h1>

        <div className="hidden md:flex space-x-8 text-sm text-gray-600">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
