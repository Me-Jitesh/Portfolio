import SectionWrapper from "./SectionWrapper";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl font-bold mb-12 text-cyan-400">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" className="text-cyan-400">
              Live →
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
