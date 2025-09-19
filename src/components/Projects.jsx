import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Dr. Ahmed Gad – Fitness Trainer",
    description: "Landing website for a personal gym trainer with strong CTA and Arabic UI.",
    image: "/drahmed.jpg",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://www.dr-ahmed-gad.com/",
    repo: "https://github.com/HEMA-HEMDAN/drAhmed"
  },
  {
    title: "Portfolio Website",
    description: "3D interactions, particles, and smooth scroll built with React and Vite.",
    image: "/portofilo.png",
    tech: ["React", "Vite", "Tailwind"],
    link: "/",
    repo: "/"
  },
  {
    title: "Tic tac toe js",
    description: "tic tac toe game with javascript",
    image: "/tic.png",
    tech: ["javascript", "html", "css"],
    link: "https://mohamedwaell.github.io/tic-tac-toe-js/",
    repo: "https://github.com/mohamedwaell/tic-tac-toe-js"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full mb-16 sm:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold hero-heading text-center">Projects</h2>
        <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">
          A selection of things I've built recently.
        </p>

        {/* Mobile: horizontal slider */}
        <div className="mt-8 md:hidden">
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-1 scrollbar-none">
            {PROJECTS.map((p) => (
              <div key={p.title} className="snap-start shrink-0 w-[88%]">
                <ProjectCard {...p} imageHeightClass="h-56" />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid like the referenced layout */}
        <div className="mt-10 hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} imageHeightClass="h-64" />
          ))}
        </div>
      </div>
    </section>
  );
}



