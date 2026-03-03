import SocialIcon from "./SocialIcon";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
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
        </div>
      </div>
    </section>
  );
}
