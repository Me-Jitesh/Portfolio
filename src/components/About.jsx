import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h2>
        <p className="text-gray-300 leading-8">
          I design and build scalable backend systems using Java, Spring Boot,
          Kafka, and cloud-native infrastructure. Focused on distributed
          architecture, event-driven systems, and performance optimization.
        </p>
      </div>
    </SectionWrapper>
  );
}
