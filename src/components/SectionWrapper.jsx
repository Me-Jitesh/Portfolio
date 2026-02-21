export default function SectionWrapper({ children, id }) {
  return (
    <section id={id} className="py-24 px-6 max-w-6xl mx-auto">
      {children}
    </section>
  );
}
