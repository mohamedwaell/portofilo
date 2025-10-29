import React from "react";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss,
  SiReact
} from 'react-icons/si';

const items = [
  { icon: <SiReact className="text-[#61dafb]" />, label: "React" },
  { icon: <SiTailwindcss className="text-[#38bdf8]" />, label: "Tailwind" },
  
  
 
  { icon: (
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
        alt="Git"
        className="w-16 h-16 md:w-20 md:h-20"
      />
    ), label: "Git" },
 
  { icon: (
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
        className="w-16 h-16 md:w-20 md:h-20"
      />
    ), label: "MongoDB" },
  { icon: (
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        className="w-16 h-16 md:w-20 md:h-20"
      />
    ), label: "Node.js" },
  { icon: (
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
        alt="Figma"
        className="w-16 h-16 md:w-20 md:h-20"
      />
    ), label: "Figma" },
  
];

export default function TechStack() {
  return (
    <section id="tech" className="w-full my-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold hero-heading">Tech Stack</h2>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 place-items-center">
        {items.map((it) => (
          <div key={it.label} className="group relative rounded-3xl bg-white/5 border border-white/10 w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            {/* Hover label badge */}
            <div className="pointer-events-none absolute -top-4 px-3 py-1 rounded-lg border border-white/10 bg-black/40 backdrop-blur text-sm font-semibold opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ">
              {it.label}
            </div>
            <div className="text-6xl md:text-7xl drop-shadow-[0_0_24px_rgba(255,255,255,0.12)]">{it.icon}</div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(120px_120px_at_80%_0%,rgba(255,255,255,0.06),transparent)]" />
          </div>
        ))}
      </div>
    </section>
  );
}


