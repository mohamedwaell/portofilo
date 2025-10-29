import React from "react";
import GlareHover from "./GlareHover";

export default function ProjectCard({
  title,
  description,
  image,
  tech = [],
  link = "#",
  repo = "#",
  imageHeightClass = "h-56"
}) {
  return (
    <GlareHover
      width="100%"
      height="100%"
      background="rgba(255, 255, 255, 0.05)"
      borderRadius="16px"
      borderColor="rgba(255, 255, 255, 0.1)"
      glareColor="#a47cf3"
      glareOpacity={0.3}
      glareAngle={-45}
      glareSize={200}
      transitionDuration={600}
      className="h-full"
    >
      <div className="group relative overflow-hidden rounded-2xl h-full flex flex-col w-full">
        <div className={`relative ${imageHeightClass} w-full overflow-hidden bg-black/50`}>
          <img
            src={image}
            alt={`${title} - ${description}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute top-3 left-3 text-xs text-white/90 bg-black/40 backdrop-blur px-2 py-1 rounded-full">
            {tech.slice(0, 1).join(" ")}
          </div>

          {/* Hover overlay with action buttons (GitHub & Live) */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
                aria-label="View source code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-.95-.02-1.86-3.05.66-3.69-1.47-3.69-1.47-.5-1.28-1.22-1.62-1.22-1.62-1-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.99 1.7 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .93-.3 3.05 1.13.88-.25 1.84-.37 2.79-.37.95 0 1.91.13 2.79.37 2.12-1.43 3.04-1.13 3.04-1.13.6 1.52.22 2.64.11 2.92.7.77 1.12 1.75 1.12 2.95 0 4.23-2.57 5.16-5.02 5.43.4.35.76 1.05.76 2.12 0 1.53-.01 2.76-.01 3.14 0 .29.2.64.76.53 4.35-1.45 7.5-5.56 7.5-10.41C23.02 5.24 18.27.5 12 .5z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#a47cf3] text-white flex items-center justify-center hover:brightness-110 transition"
                aria-label="Open live demo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                  <path d="M5 5h5V3H3v7h2V5z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/80 border border-white/10">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-4 flex gap-3">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-[#a47cf3] hover:underline"
            >
              Live
            </a>
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:underline"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </GlareHover>
  );
}


