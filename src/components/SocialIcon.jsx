import React from "react";

export default function SocialIcon({
  href,
  icon: Icon,
  label,
  tooltip,
  gradient,
  brandColor,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex flex-col items-center focus:outline-none"
    >
      {/* Gradient Border */}
      <div
        className={`p-[2px] rounded-full bg-gradient-to-r ${gradient} transition-all duration-500`}
      >
        <div className="p-6 rounded-full bg-white shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110">
          <Icon className={`h-8 w-8 ${brandColor}`} />
        </div>
      </div>

      {/* Label */}
      <span
        className={`mt-4 text-gray-700 transition-colors duration-300 group-hover:${brandColor}`}
      >
        {label}
      </span>

      {/* Tooltip BELOW */}
      <span className="absolute top-full mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 bg-gray-900 text-white text-xs px-3 py-1 rounded-md transition-all duration-300 pointer-events-none whitespace-nowrap">
        {tooltip}
      </span>
    </a>
  );
}
