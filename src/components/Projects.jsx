import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../consts";

export default function Projects() {
  // Calculate how many columns are left in the last row so the
  // "More coming soon" card fills exactly the remaining space.
  const colsMd = 2;
  const colsLg = 3;
  const remainderMd = PROJECTS.length % colsMd;
  const remainderLg = PROJECTS.length % colsLg;
  const spanMd = (colsMd - remainderMd) % colsMd || colsMd; // 1 or 2
  const spanLg = (colsLg - remainderLg) % colsLg || colsLg; // 1,2 or 3
  const mdClass = spanMd === 1 ? "col-span-1" : "col-span-2";
  const lgClass = spanLg === 1 ? "lg:col-span-1" : spanLg === 2 ? "lg:col-span-2" : "lg:col-span-3";

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
            {/* More coming soon card (mobile) */}
            <div className="snap-start shrink-0 w-[88%]">
              <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 h-full p-6 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-semibold hero-heading">More coming soon</span>
                <p className="text-white/70 mt-2">I’m actively building new projects. Stay tuned.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: 3-column grid like the referenced layout */}
        <div className="mt-10 hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} imageHeightClass="h-64" />
          ))}
          {/* More coming soon card (desktop) - spans remaining columns */}
          <div className={`rounded-2xl border border-dashed border-white/15 bg-white/5 p-8 flex flex-col items-center justify-center text-center min-h-[260px] ${mdClass} ${lgClass}`}>
            <span className="text-3xl md:text-4xl font-semibold hero-heading">More coming soon</span>
            <p className="text-white/70 mt-2">I’m actively building new projects. Stay tuned.</p>
          </div>
        </div>
      </div>
    </section>
  );
}



