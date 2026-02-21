export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <div>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Jitesh Singh
        </h2>
        <p className="text-gray-400 text-lg">
          Java | Spring Boot | Kafka | React | AWS
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
