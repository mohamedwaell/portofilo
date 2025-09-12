import React from "react";

const TIMELINE = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2023 — Present",
    points: [
      "Built performant React apps with modern UI and motion.",
      "Delivered responsive, accessible interfaces for clients.",
    ],
  },
  {
    role: "Student Projects",
    company: "Computer Engineering",
    period: "2022 — 2023",
    points: [
      "Collaborated on full‑stack apps and REST APIs.",
      "Practiced clean code, git flow, and code reviews.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full mb-16 sm:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold hero-heading text-center">Experience</h2>
        <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">
          A quick look at my journey and what I’ve been up to.
        </p>

        <div className="mt-8 space-y-6">
          {TIMELINE.map((t) => (
            <div key={t.role} className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="text-lg font-semibold">{t.role} · {t.company}</div>
                <div className="text-sm text-white/60">{t.period}</div>
              </div>
              <ul className="mt-3 list-disc list-inside text-white/85 space-y-1">
                {t.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


