export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">
            <span className="bg-gradient-to-r from-slate-700 via-sky-700 to-gray-700 bg-clip-text text-transparent uppercase">
              Jitesh Singh
            </span>
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
          {["Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition"
            >
              <span className="group-hover:text-gray-900 transition-colors duration-300">
                {item}
              </span>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
