const skills = [
  "Java",
  "Spring Boot",
  "Microservices",
  "Kafka",
  "Redis",
  "MySQL",
  "React",
  "AWS",
  "Linux",
  "DSA",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
