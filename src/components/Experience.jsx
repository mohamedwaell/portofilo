import React from "react";

const TIMELINE = [
  {
    role: "MERN Stack Intern",
    company: "ITI",
    period: "2025",
    points: [
      "Learning full-stack development with MongoDB, Express.js, React, and Node.js.",
      "Building end-to-end web applications with modern JavaScript technologies.",
      "Implementing RESTful APIs and database integration.",
    ],
  },
  {
    role: "Python Intern",
    company: "ITI",
    period: "2025",
    points: [
      "Learned the basics of Python programming, including Object-Oriented Programming (OOP) and Data Structures.",
      "Gained experience with data manipulation techniques and Python best practices.",
    ],
  },
  {
    role: "Web Intern",
    company: "NTI",
    period: "2025",
    points: [
      "Learned HTML, CSS, and JavaScript fundamentals.",
      "Built small practice projects to apply web development concepts.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "",
    period: "2025",
    points: [
      "Worked on freelance projects delivering custom web solutions for clients.",
      "Built responsive websites and web applications using modern frameworks.",
      "Collaborated with clients to gather requirements and deliver tailored solutions.",
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


