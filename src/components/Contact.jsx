import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className=" py-28 px-6 bg-white">
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-14">
          Let's Connect
        </h2>

        <div className="flex justify-center gap-14">
          {/* GitHub */}
          <a
            href="https://github.com/Me-Jitesh"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="p-[2px] rounded-full bg-gradient-to-r from-gray-300 to-gray-500 transition duration-300">
              <div className="p-6 rounded-full bg-white shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <FaGithub className="h-8 w-8 text-gray-800" />
              </div>
            </div>
            <span className="mt-4 text-gray-700 group-hover:text-gray-900 transition">
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
            <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-300 to-blue-500 transition duration-300">
              <div className="p-6 rounded-full bg-white shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <FaLinkedin className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <span className="mt-4 text-gray-700 group-hover:text-blue-600 transition">
              LinkedIn
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:jiteshs101@gmail.com"
            className="group flex flex-col items-center"
          >
            <div className="p-[2px] rounded-full bg-gradient-to-r from-red-300 to-red-500 transition duration-300">
              <div className="p-6 rounded-full bg-white shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <EnvelopeIcon className="h-8 w-8 text-red-500" />
              </div>
            </div>
            <span className="mt-4 text-gray-700 group-hover:text-red-500 transition">
              Email
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
