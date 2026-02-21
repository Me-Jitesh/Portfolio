import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <p className="text-sm text-cyan-400 mb-4">{project.tech}</p>
              <a
                href={project.link}
                className="text-white underline"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
