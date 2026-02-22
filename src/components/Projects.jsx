import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 uppercase">
          My Works ::{" "}
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/*  Desktop Fit Preview */}
              <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="origin-center scale-[0.26]">
                    <iframe
                      src={project.link}
                      title={project.title}
                      className="w-[1920px] h-[1080px] border-0"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-3 py-1 rounded-full 
                 bg-gradient-to-r from-indigo-50 to-blue-50 
                 text-indigo-600 
                 border border-indigo-100
                 transition hover:from-indigo-100 hover:to-blue-100"
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
               px-12 py-2 rounded-3xl
               bg-gradient-to-r from-indigo-800 to-blue-500 
               text-white 
               shadow-md 
               hover:shadow-lg 
               hover:from-indigo-500 hover:to-blue-900
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
