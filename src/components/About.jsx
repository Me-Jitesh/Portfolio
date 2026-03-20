export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase">
          About Me
        </h2>

        <p className="text-gray-700 leading-8 text-lg">
          I am a backend focused software engineer passionate about building
          clean and reliable services using Java and Spring Boot
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-6">
          I m currently exploring event-driven architecture and distributed
          systems with Apache Kafka, learning how systems handle scale,
          communication, and failure in real world environments
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-6">
          My focus is on strengthening my fundamentals in system design, writing
          maintainable code, and growing into a well rounded backend engineer.
        </p>
      </div>
    </section>
  );
}
