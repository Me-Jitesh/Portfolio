import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 uppercase tracking-tight">
          My Works
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Desktop Preview */}
              <div className="relative w-full aspect-video bg-gray-100 rounded-t-xl overflow-hidden border-b border-gray-200">
                {/* Browser Top Bar */}
                <div className="absolute top-0 left-0 w-full h-8 bg-gray-50 border-b border-gray-200 flex items-center px-3 gap-2 z-10">
                  <span className="w-2.5 h-2.5 bg-red-400 rounded-full"></span>
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
                </div>

                {/* Scaled Desktop */}
                <div className="absolute inset-0 pt-8 overflow-hidden">
                  <div className="origin-top-left scale-[0.26] will-change-transform">
                    <iframe
                      src={project.link}
                      title={project.title}
                      loading="lazy"
                      className="w-[1920px] h-[1080px] border-0 pointer-events-none"
                      style={{ transform: "translateZ(0)" }}
                    />
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none shadow-inner"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-3 py-1 rounded-full 
                                 bg-sky-50 text-blue-500 
                                 border border-sky-100"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="pt-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sm 
                               px-10 py-2 rounded-3xl
                               bg-gradient-to-r from-slate-700 to-sky-300
                               text-white 
                               shadow-md 
                               hover:shadow-lg 
                               hover:from-gray-900 hover:to-sky-400
                               transition-all duration-300"
                  >
                    → Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
