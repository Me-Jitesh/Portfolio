import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Let's Connect
        </h2>

        <div className="flex justify-center gap-10">
          {/* GitHub - Octocat */}
          <a
            href="https://github.com/Me-Jitesh"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="p-4 rounded-full bg-gray-100 group-hover:bg-black transition duration-300 shadow-md">
              <FaGithub className="h-8 w-8 text-gray-800 group-hover:text-white transition duration-300" />
            </div>
            <span className="mt-3 text-gray-600 group-hover:text-black transition">
              GitHub
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/me-jitesh"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="p-4 rounded-full bg-gray-100 group-hover:bg-blue-600 transition duration-300 shadow-md">
              <FaLinkedin className="h-8 w-8 text-gray-800 group-hover:text-white transition duration-300" />
            </div>
            <span className="mt-3 text-gray-600 group-hover:text-blue-600 transition">
              LinkedIn
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:jiteshs101@gmail.com"
            className="group flex flex-col items-center"
          >
            <div className="p-4 rounded-full bg-gray-100 group-hover:bg-red-500 transition duration-300 shadow-md">
              <EnvelopeIcon className="h-8 w-8 text-gray-800 group-hover:text-white transition duration-300" />
            </div>
            <span className="mt-3 text-gray-600 group-hover:text-red-500 transition">
              Email
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
