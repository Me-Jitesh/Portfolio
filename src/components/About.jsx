export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">
          About Me
        </h2>

        <p className="text-gray-700 leading-8 text-lg">
          I’m a backend-focused software engineer at the beginning of my
          professional journey, with a strong interest in how reliable systems
          are built and maintained. I enjoy working with Java and Spring Boot to
          develop clean, structured backend services.
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-6">
          Recently, I’ve been exploring event-driven architecture and
          distributed systems using tools like Apache Kafka. I’m curious about
          how services communicate, how failures are handled, and how systems
          remain stable under load.
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-6">
          As I grow in my career, I’m focused on strengthening my fundamentals
          in system design, writing maintainable code, and understanding
          production-level engineering practices.
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-6">
          Currently, I am exploring Spring AI and production level system design
          to deepen my engineering expertise.
        </p>
      </div>
    </section>
  );
}
