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
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Technical Stack
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-slate-800">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border border-gary-600 rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:border-blue-600 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
