import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Building Scalable
            <br />
            <span className="text-blue-600">Backend Systems</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Java • Spring Boot • Kafka • Microservices • AWS
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
