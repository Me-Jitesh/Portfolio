import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                View →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
