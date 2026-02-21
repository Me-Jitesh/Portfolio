export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-semibold tracking-widest text-cyan-400">JITESH</h1>
        <div className="space-x-8 hidden md:block text-sm">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
