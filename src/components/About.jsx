export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">
          About Me
        </h2>

        <p className="text-slate-700 leading-5 text-lg">
          I'm a backend-focused software engineer who enjoys building reliable
          systems that solve real-world problems. My primary stack includes
          Spring Boot and Apache Kafka, where I work with event-driven
          architectures to design scalable and resilient services.
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-6">
          I’m particularly interested in distributed systems, understanding how
          services communicate, how failures are handled, and how performance
          can be improved through thoughtful design. Beyond coding, I focus on
          writing clean, maintainable code and continuously improving system
          efficiency and observability.
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-6">
          Currently, I am exploring Spring AI and production level system design
          to deepen my engineering expertise.
        </p>
      </div>
    </section>
  );
}
