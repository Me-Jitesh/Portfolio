import { useState } from "react";
import SocialIcon from "./SocialIcon";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaEnvelope,
  FaFileAlt,
  FaDownload,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section id="contact" className=" py-28 px-6 bg-white">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-14">
            Let's Connect
          </h2>

          <div className="grid grid-cols-2 sm:flex sm:justify-center gap-12">
            <SocialIcon
              href="https://wakatime.com/@Er_Jrsingh"
              icon={FaCode}
              label="Code Time"
              tooltip="@Er_Jrsingh"
              gradient="from-purple-300 to-purple-600 group-hover:from-purple-400 group-hover:to-purple-700"
              iconColor="text-purple-600"
              labelHoverColor="group-hover:text-purple-600"
              tooltipBg="bg-purple-600"
            />

            <SocialIcon
              href="https://linkedin.com/in/me-jitesh"
              icon={FaLinkedin}
              label="LinkedIn"
              tooltip="@Me-Jitesh"
              gradient="from-blue-300 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-700"
              iconColor="text-blue-600"
              labelHoverColor="group-hover:text-blue-600"
              tooltipBg="bg-blue-600"
            />

            <SocialIcon
              href="https://github.com/Me-Jitesh"
              icon={FaGithub}
              label="GitHub"
              tooltip="@Me-Jitesh"
              gradient="from-gray-300 to-gray-600 group-hover:from-gray-400 group-hover:to-black"
              iconColor="text-gray-800"
              labelHoverColor="group-hover:text-gray-900"
              tooltipBg="bg-gray-900"
            />

            <SocialIcon
              href="https://leetcode.com/u/Me-Jitesh/"
              icon={SiLeetcode}
              label="LeetCode"
              tooltip="@Me-Jitesh"
              gradient="from-orange-300 to-orange-600 group-hover:from-orange-400 group-hover:to-orange-700"
              iconColor="text-orange-500"
              labelHoverColor="group-hover:text-orange-600"
              tooltipBg="bg-orange-600"
            />

            <SocialIcon
              href="mailto:jiteshs101@gmail.com"
              icon={FaEnvelope}
              label="Email"
              tooltip="jiteshs101@gmail.com"
              gradient="from-red-300 to-red-600 group-hover:from-red-400 group-hover:to-red-700"
              iconColor="text-red-500"
              labelHoverColor="group-hover:text-red-600"
              tooltipBg="bg-red-600"
            />

            <button
              onClick={() => setIsResumeOpen(true)}
              className="group relative flex flex-col items-center focus:outline-none"
            >
              {/* Gradient Border */}
              <div className="p-[2px] rounded-full bg-gradient-to-r from-indigo-300 to-indigo-600 group-hover:from-indigo-400 group-hover:to-indigo-700 transition-all duration-500">
                <div className="p-6 rounded-full bg-white shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110">
                  <FaFileAlt className="h-8 w-8 text-indigo-600" />
                </div>
              </div>

              {/* Label */}
              <span className="mt-4 text-gray-700 transition-colors duration-300 group-hover:text-indigo-600">
                Resume
              </span>

              {/* Tooltip BELOW */}
              <span className="absolute top-full mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 bg-indigo-600 text-white text-xs px-3 py-1 rounded-md transition-all duration-300 pointer-events-none whitespace-nowrap">
                View Resume
              </span>
            </button>
          </div>
        </div>
      </section>

      {isResumeOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className="relative w-[95%] md:w-[75%] h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">My Resume</h3>

              <div className="flex gap-3">
                {/* Download Button */}
                <a
                  href="https://drive.google.com/uc?export=download&id=1u7zLrukmtr4hfozhYQo2UH15s__eHYep"
                  className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  <FaDownload className="h-4 w-4" />
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  X
                </button>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center bg-gray-100">
              <iframe
                src="https://drive.google.com/file/d/1u7zLrukmtr4hfozhYQo2UH15s__eHYep/preview"
                className="w-[95%] h-[95%] rounded-lg shadow-lg"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
