export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h2>

        <p className="text-gray-600 mb-8">jiteshs101@gmail.com</p>

        <div className="flex justify-center gap-8 text-gray-700">
          <a
            href="https://linkedin.com/in/me-jitesh"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Me-Jitesh"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
