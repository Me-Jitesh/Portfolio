import SectionWrapper from "./SectionWrapper";

const skills = [
  "Java",
  "Spring Boot",
  "Kafka",
  "Microservices",
  "Redis",
  "AWS",
  "React",
  "Linux",
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl font-bold mb-12 text-cyan-400">
        Technical Stack
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl text-center hover:border-cyan-400 hover:shadow-cyan-400/20 hover:shadow-lg transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
